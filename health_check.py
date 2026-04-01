#!/usr/bin/env python3
"""
Health check pour cptunis.com
Vérifie : site, CSS, pages clés, formulaire email, chatbot IA
Retourne JSON avec statut et détails
"""

import json
import requests
import time
import subprocess
import sys

BASE_URL = "https://cptunis.com"
RESULTS = {"status": "ok", "checks": [], "problems": [], "timestamp": time.strftime("%Y-%m-%d %H:%M:%S")}

def check(name, passed, detail=""):
    RESULTS["checks"].append({"name": name, "passed": passed, "detail": detail})
    if not passed:
        RESULTS["problems"].append(f"{name}: {detail}")
        RESULTS["status"] = "error"

# 1. Homepage
try:
    r = requests.get(BASE_URL, timeout=10)
    check("Homepage", r.status_code == 200, f"HTTP {r.status_code}, {len(r.text)} bytes, {r.elapsed.total_seconds():.2f}s")
except Exception as e:
    check("Homepage", False, str(e))

# 2. CSS loads
try:
    html = requests.get(BASE_URL, timeout=10).text
    import re
    css_match = re.search(r'href="(/_next/static/css/[^"]+)"', html)
    if css_match:
        css_url = BASE_URL + css_match.group(1)
        r = requests.get(css_url, timeout=10)
        check("CSS", r.status_code == 200 and len(r.text) > 100, f"HTTP {r.status_code}, {len(r.text)} bytes")
    else:
        check("CSS", False, "CSS link not found in HTML")
except Exception as e:
    check("CSS", False, str(e))

# 3. Key pages
for page in ["/chirurgies", "/explorations", "/centres", "/devis", "/contact", "/hospitalisation", "/la-clinique"]:
    try:
        r = requests.get(f"{BASE_URL}{page}", timeout=10)
        check(f"Page {page}", r.status_code == 200, f"HTTP {r.status_code}")
    except Exception as e:
        check(f"Page {page}", False, str(e))

# 4. Exam detail page
try:
    r = requests.get(f"{BASE_URL}/explorations/explorations-cardiaques/ecg-repos", timeout=10)
    check("Exam detail page", r.status_code == 200, f"HTTP {r.status_code}")
except Exception as e:
    check("Exam detail page", False, str(e))

# 5. Email API (devis)
try:
    r = requests.post(f"{BASE_URL}/api/devis", json={
        "nom": "HealthCheck", "prenom": "Auto", "email": "healthcheck@test.local",
        "telephone": "+216 00 000 000", "pays": "Test", "specialite": "Test",
        "message": "Automated health check - ignore this email"
    }, timeout=15)
    check("Email API (devis)", r.status_code == 200 and r.json().get("success"), f"HTTP {r.status_code}, response: {r.text[:100]}")
except Exception as e:
    check("Email API (devis)", False, str(e))

# 6. Contact API
try:
    r = requests.post(f"{BASE_URL}/api/contact", json={
        "nom": "HealthCheck", "prenom": "Auto", "email": "healthcheck@test.local",
        "sujet": "Test", "message": "Automated health check - ignore"
    }, timeout=15)
    check("Email API (contact)", r.status_code == 200 and r.json().get("success"), f"HTTP {r.status_code}, response: {r.text[:100]}")
except Exception as e:
    check("Email API (contact)", False, str(e))

# 7. Chatbot AI
try:
    r = requests.post(f"{BASE_URL}/api/chat", json={
        "messages": [{"role": "user", "content": "bonjour"}]
    }, timeout=30, stream=True)
    content = ""
    for chunk in r.iter_content(chunk_size=512, decode_unicode=True):
        content += chunk
        if len(content) > 50:
            break
    check("Chatbot IA", r.status_code == 200 and len(content) > 10, f"HTTP {r.status_code}, response length: {len(content)}")
except Exception as e:
    check("Chatbot IA", False, str(e))

# 8. systemd service
try:
    result = subprocess.run(["systemctl", "is-active", "clinique-pasteur"], capture_output=True, text=True)
    active = result.stdout.strip() == "active"
    check("systemd service", active, result.stdout.strip())
except Exception as e:
    check("systemd service", False, str(e))

# 9. Response time
try:
    start = time.time()
    requests.get(BASE_URL, timeout=10)
    elapsed = time.time() - start
    check("Response time", elapsed < 2.0, f"{elapsed:.2f}s")
except Exception as e:
    check("Response time", False, str(e))

print(json.dumps(RESULTS, ensure_ascii=False, indent=2))
