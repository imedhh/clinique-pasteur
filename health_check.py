#!/usr/bin/env python3
"""
Health check pour cptunis.com
Vérifie : site, CSS, pages clés, formulaire email, chatbot IA
Retourne JSON avec statut et détails
"""

import json
import time
import subprocess
import sys
import re

RESULTS = {"status": "ok", "checks": [], "problems": [], "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")}

def check(name, passed, detail=""):
    RESULTS["checks"].append({"name": name, "passed": passed, "detail": detail})
    if not passed:
        RESULTS["problems"].append(f"{name}: {detail}")
        RESULTS["status"] = "error"

# Use localhost to avoid Caddy rate limits
LOCAL = "http://localhost:3010"
PUBLIC = "https://cptunis.com"

import requests

# Use a session with keep-alive
session = requests.Session()

# 1. Homepage via localhost (fast, no SSL overhead)
try:
    r = session.get(LOCAL, timeout=10)
    check("Homepage", r.status_code == 200, f"HTTP {r.status_code}, {len(r.text)} bytes, {r.elapsed.total_seconds():.2f}s")
    html = r.text
except Exception as e:
    check("Homepage", False, str(e))
    html = ""

# 2. CSS loads
try:
    css_match = re.search(r'href="(/_next/static/css/[^"]+)"', html)
    if css_match:
        r = session.get(f"{LOCAL}{css_match.group(1)}", timeout=10)
        check("CSS", r.status_code == 200 and len(r.text) > 100, f"HTTP {r.status_code}, {len(r.text)} bytes")
    else:
        check("CSS", False, "CSS link not found in HTML")
except Exception as e:
    check("CSS", False, str(e))

# 3. Key pages (via localhost, one at a time)
for page in ["/chirurgies", "/explorations", "/centres", "/devis", "/contact"]:
    try:
        r = session.get(f"{LOCAL}{page}", timeout=10)
        check(f"Page {page}", r.status_code == 200, f"HTTP {r.status_code}")
    except Exception as e:
        check(f"Page {page}", False, str(e))

# 4. Exam detail page
try:
    r = session.get(f"{LOCAL}/explorations/explorations-cardiaques/ecg-repos", timeout=10)
    check("Exam detail page", r.status_code == 200, f"HTTP {r.status_code}")
except Exception as e:
    check("Exam detail page", False, str(e))

# 5. Email API endpoint exists (check route responds, NO actual email sent)
try:
    r = session.get(f"{LOCAL}/api/devis", timeout=10)
    # GET on POST-only route returns 405 = route exists and works
    check("Email API (devis)", r.status_code == 405, f"HTTP {r.status_code}")
except Exception as e:
    check("Email API (devis)", False, str(e))

# 6. Chatbot AI - test via localhost
try:
    r = session.post(f"{LOCAL}/api/chat", json={
        "messages": [{"role": "user", "content": "bonjour"}]
    }, timeout=30, stream=True)
    content = ""
    for chunk in r.iter_content(chunk_size=512, decode_unicode=True):
        content += chunk
        if len(content) > 50:
            break
    check("Chatbot IA", r.status_code == 200 and len(content) > 10, f"HTTP {r.status_code}, {len(content)} chars")
except Exception as e:
    check("Chatbot IA", False, str(e))

# 7. systemd service
try:
    result = subprocess.run(["systemctl", "is-active", "clinique-pasteur"], capture_output=True, text=True)
    active = result.stdout.strip() == "active"
    check("systemd service", active, result.stdout.strip())
except Exception as e:
    check("systemd service", False, str(e))

# 8. Public HTTPS access (single request)
try:
    r = requests.get(PUBLIC, timeout=10)
    check("HTTPS public", r.status_code == 200, f"HTTP {r.status_code}, {r.elapsed.total_seconds():.2f}s")
except Exception as e:
    check("HTTPS public", False, str(e))

print(json.dumps(RESULTS, ensure_ascii=False, indent=2))
