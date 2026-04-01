#!/usr/bin/env python3
"""
API locale pour n8n + cron - Health check et réparation du site Clinique Pasteur
Port 5681
"""

from http.server import HTTPServer, BaseHTTPRequestHandler
import json
import subprocess
import sys
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import time

os.chdir("/root/projets-ai/clinique-pasteur")

SMTP_USER = "imedhh.ia@gmail.com"
SMTP_PASS = "poua olwb xsxn bykv"
ALERT_TO = "imedhh@gmail.com"

def send_email(subject, html):
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = SMTP_USER
    msg["To"] = ALERT_TO
    msg.attach(MIMEText(html, "html"))
    with smtplib.SMTP("smtp.gmail.com", 587) as server:
        server.starttls()
        server.login(SMTP_USER, SMTP_PASS)
        server.send_message(msg)

def run_health_check():
    result = subprocess.run(
        [sys.executable, "/root/projets-ai/clinique-pasteur/health_check.py"],
        capture_output=True, text=True, timeout=120
    )
    return json.loads(result.stdout)

def run_repair():
    # 1. Restart
    subprocess.run(["systemctl", "restart", "clinique-pasteur"], timeout=10)
    time.sleep(3)

    import requests as req
    import re
    try:
        r = req.get("https://cptunis.com", timeout=10)
        if r.status_code == 200:
            css_match = re.search(r'href="(/_next/static/css/[^"]+)"', r.text)
            if css_match:
                css_r = req.get(f"https://cptunis.com{css_match.group(1)}", timeout=10)
                if css_r.status_code == 200 and len(css_r.text) > 100:
                    return {"repaired": True, "method": "restart", "detail": "Service restart fixed the issue"}
    except:
        pass

    # 2. Git restore + rebuild
    subprocess.run(["git", "restore", "."], cwd="/root/projets-ai/clinique-pasteur", timeout=30)
    build = subprocess.run(["npm", "run", "build"], capture_output=True, text=True, timeout=300, cwd="/root/projets-ai/clinique-pasteur")
    if build.returncode == 0:
        subprocess.run(["systemctl", "restart", "clinique-pasteur"], timeout=10)
        time.sleep(3)
        return {"repaired": True, "method": "rebuild", "detail": "Git restore + rebuild + restart"}

    # 3. Claude CLI
    claude = subprocess.run(
        ["claude", "-p", "Le site cptunis.com ne fonctionne pas. Diagnostique et répare. Projet: /root/projets-ai/clinique-pasteur. Fais npm run build et systemctl restart clinique-pasteur."],
        capture_output=True, text=True, timeout=600, cwd="/root/projets-ai/clinique-pasteur"
    )
    return {"repaired": claude.returncode == 0, "method": "claude", "detail": (claude.stdout or claude.stderr)[-500:]}

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/health":
            try:
                data = run_health_check()
                self.send_json(data)
            except Exception as e:
                self.send_json({"status": "error", "problems": [str(e)]})

        elif self.path == "/repair":
            try:
                result = run_repair()
                self.send_json(result)
            except Exception as e:
                self.send_json({"repaired": False, "method": "failed", "detail": str(e)})

        elif self.path == "/check-and-alert":
            # All-in-one: health check → repair if needed → email
            try:
                health = run_health_check()

                if health["status"] == "ok":
                    self.send_json({"action": "none", "status": "ok", "message": "Site OK, no action needed"})
                    return

                # Problems found - try repair
                problems = health.get("problems", [])
                checks = health.get("checks", [])
                now = time.strftime("%d/%m/%Y %H:%M", time.localtime())

                # Send alert email
                checks_html = "".join(
                    f"<tr><td style='padding:4px 8px'>{'✅' if c['passed'] else '❌'}</td><td style='padding:4px 8px'>{c['name']}</td><td style='padding:4px 8px;color:#666'>{c.get('detail','')}</td></tr>"
                    for c in checks
                )
                alert_html = f"""
                <div style="font-family:Arial;max-width:600px;margin:0 auto">
                  <div style="background:#dc2626;padding:20px;border-radius:12px 12px 0 0">
                    <h1 style="color:white;margin:0">⚠️ Alerte cptunis.com</h1>
                    <p style="color:rgba(255,255,255,0.8);margin:8px 0 0">{now}</p>
                  </div>
                  <div style="background:#f9fafb;padding:20px;border:1px solid #e5e7eb;border-radius:0 0 12px 12px">
                    <h2 style="color:#dc2626">Problèmes détectés :</h2>
                    <ul>{"".join(f"<li style='color:#dc2626'>{p}</li>" for p in problems)}</ul>
                    <h3>Rapport complet :</h3>
                    <table style="width:100%;border-collapse:collapse">{checks_html}</table>
                    <p style="color:#999;font-size:12px;margin-top:20px">Réparation automatique en cours...</p>
                  </div>
                </div>
                """
                send_email(f"⚠️ cptunis.com - {len(problems)} problème(s) détecté(s)", alert_html)

                # Repair
                repair = run_repair()
                repaired = repair.get("repaired", False)
                method = repair.get("method", "?")
                detail = repair.get("detail", "")
                color = "#2D8C4E" if repaired else "#dc2626"
                title = "✅ Site réparé" if repaired else "❌ Réparation échouée"

                repair_html = f"""
                <div style="font-family:Arial;max-width:600px;margin:0 auto">
                  <div style="background:{color};padding:20px;border-radius:12px 12px 0 0">
                    <h1 style="color:white;margin:0">{title}</h1>
                    <p style="color:rgba(255,255,255,0.8);margin:8px 0 0">{now}</p>
                  </div>
                  <div style="background:#f9fafb;padding:20px;border:1px solid #e5e7eb;border-radius:0 0 12px 12px">
                    <p><strong>Méthode :</strong> {method}</p>
                    <p><strong>Détails :</strong></p>
                    <pre style="background:white;padding:12px;border-radius:8px;border:1px solid #e5e7eb;font-size:12px;overflow:auto;white-space:pre-wrap">{detail}</pre>
                  </div>
                </div>
                """
                repair_subject = f"{'✅' if repaired else '❌'} cptunis.com - Réparation {'réussie' if repaired else 'échouée'} ({method})"
                send_email(repair_subject, repair_html)

                self.send_json({"action": "repaired" if repaired else "failed", "problems": problems, "repair": repair})

            except Exception as e:
                try:
                    send_email("❌ cptunis.com - Erreur monitoring", f"<h1>Erreur</h1><pre>{str(e)}</pre>")
                except:
                    pass
                self.send_json({"action": "error", "detail": str(e)})

        elif self.path == "/send-email":
            self.send_response(405)
            self.end_headers()
            self.wfile.write(b'{"error": "Use POST"}')
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'{"error": "Not found"}')

    def do_POST(self):
        if self.path == "/send-email":
            try:
                length = int(self.headers.get("Content-Length", 0))
                body = json.loads(self.rfile.read(length))
                send_email(body["subject"], body["html"])
                self.send_json({"sent": True})
            except Exception as e:
                self.send_json({"sent": False, "error": str(e)})
        else:
            self.send_response(404)
            self.end_headers()

    def send_json(self, data):
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(data, ensure_ascii=False).encode())

    def log_message(self, format, *args):
        pass

if __name__ == "__main__":
    server = HTTPServer(("127.0.0.1", 5681), Handler)
    print("Clinique Pasteur health API running on http://127.0.0.1:5681")
    server.serve_forever()
