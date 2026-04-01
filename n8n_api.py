#!/usr/bin/env python3
"""
API locale pour n8n - Health check et réparation du site Clinique Pasteur
Port 5681
"""

from http.server import HTTPServer, BaseHTTPRequestHandler
import json
import subprocess
import sys
import os

os.chdir("/root/projets-ai/clinique-pasteur")

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/health":
            self.handle_health()
        elif self.path == "/repair":
            self.handle_repair()
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'{"error": "Not found"}')

    def handle_health(self):
        try:
            result = subprocess.run(
                [sys.executable, "/root/projets-ai/clinique-pasteur/health_check.py"],
                capture_output=True, text=True, timeout=120
            )
            data = json.loads(result.stdout)
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(data, ensure_ascii=False).encode())
        except Exception as e:
            self.send_response(500)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"status": "error", "problems": [str(e)]}).encode())

    def handle_repair(self):
        try:
            # 1. Try simple restart first
            subprocess.run(["systemctl", "restart", "clinique-pasteur"], timeout=10)
            import time
            time.sleep(3)

            # Check if restart fixed it
            import requests
            try:
                r = requests.get("https://cptunis.com", timeout=10)
                if r.status_code == 200:
                    # Check CSS too
                    import re
                    css_match = re.search(r'href="(/_next/static/css/[^"]+)"', r.text)
                    if css_match:
                        css_r = requests.get(f"https://cptunis.com{css_match.group(1)}", timeout=10)
                        if css_r.status_code == 200 and len(css_r.text) > 100:
                            self.send_json({"repaired": True, "method": "restart", "detail": "Service restart fixed the issue"})
                            return
            except:
                pass

            # 2. Rebuild if restart didn't work
            # Restore files from git if needed
            subprocess.run(["git", "restore", "."], cwd="/root/projets-ai/clinique-pasteur", timeout=30)

            # Rebuild
            build = subprocess.run(
                ["npm", "run", "build"],
                capture_output=True, text=True, timeout=300,
                cwd="/root/projets-ai/clinique-pasteur"
            )

            if build.returncode == 0:
                subprocess.run(["systemctl", "restart", "clinique-pasteur"], timeout=10)
                time.sleep(3)
                self.send_json({"repaired": True, "method": "rebuild", "detail": "Git restore + npm build + restart", "build_output": build.stdout[-500:]})
            else:
                # 3. Use Claude Code CLI as last resort
                claude_result = subprocess.run(
                    ["claude", "-p", "Le site cptunis.com ne fonctionne pas. Diagnostique et répare le problème. Le projet est dans /root/projets-ai/clinique-pasteur. Fais npm run build et systemctl restart clinique-pasteur après la réparation."],
                    capture_output=True, text=True, timeout=600,
                    cwd="/root/projets-ai/clinique-pasteur"
                )
                self.send_json({
                    "repaired": claude_result.returncode == 0,
                    "method": "claude",
                    "detail": claude_result.stdout[-1000:] if claude_result.stdout else claude_result.stderr[-500:]
                })

        except Exception as e:
            self.send_json({"repaired": False, "method": "failed", "detail": str(e)})

    def send_json(self, data):
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode())

    def log_message(self, format, *args):
        pass  # Silence logs

if __name__ == "__main__":
    server = HTTPServer(("127.0.0.1", 5681), Handler)
    print("Clinique Pasteur health API running on http://127.0.0.1:5681")
    server.serve_forever()
