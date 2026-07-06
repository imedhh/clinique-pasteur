#!/usr/bin/env python3
"""Genere une photo realiste via Gemini 2.5 Flash Image et l'enregistre en webp.
Usage: python3 scripts/genimg.py <chemin_sortie.webp> "<prompt>"
- Rotation des 2 cles Gemini + retry/backoff sur 429/503.
- Skip si le fichier existe deja (resumable).
- Convertit le PNG en webp (qualite 82).
"""
import base64, json, os, sys, time, subprocess, urllib.request, urllib.error, io
from PIL import Image

def _load_keys():
    """Clés Gemini via env (GEMINI_KEY/GEMINI_KEY2) sinon coffre chiffré. Jamais en clair dans le code."""
    env = [k for k in (os.environ.get("GEMINI_KEY"), os.environ.get("GEMINI_KEY2")) if k]
    if env:
        return env
    try:
        d = json.loads(subprocess.check_output(["/root/config/vault.sh", "get", "gemini_keys"], text=True))
        return [d["compte1_key"], d["compte2_key"]]
    except Exception:
        raise SystemExit("Clés Gemini introuvables : définir GEMINI_KEY/GEMINI_KEY2 ou `vault.sh get gemini_keys`")

KEYS = _load_keys()
MODEL = "gemini-2.5-flash-image"
STYLE = (" Ultra realistic professional editorial medical photograph, shot on a full-frame DSLR, "
         "natural soft clinical lighting, shallow depth of field with a softly blurred background, high detail, "
         "true-to-life colors, clean and modern private clinic in Tunisia. If people appear they are Tunisian / "
         "North African (Mediterranean features, warm skin tone), wearing clean BLUE medical scrubs. "
         "Surgical drapes, gowns and aprons are BLUE - absolutely avoid green colors. "
         "Plain unmarked walls. ABSOLUTELY NO text, no letters, no words, no writing, no signage, no wall lettering, "
         "no brand names, no numbers, no watermark, no logo anywhere in the image. Landscape 16:9 composition.")

def call(prompt, key, aspect=True):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={key}"
    gen = {"responseModalities": ["IMAGE", "TEXT"]}
    if aspect:
        gen["imageConfig"] = {"aspectRatio": "16:9"}
    body = {"contents": [{"parts": [{"text": prompt + STYLE}]}], "generationConfig": gen}
    req = urllib.request.Request(url, data=json.dumps(body).encode(),
                                 headers={"Content-Type": "application/json"})
    r = urllib.request.urlopen(req, timeout=180)
    data = json.loads(r.read())
    for p in data["candidates"][0]["content"]["parts"]:
        if "inlineData" in p:
            return base64.b64decode(p["inlineData"]["data"])
    raise RuntimeError("no image in response: " + json.dumps(data)[:200])

def main():
    out, prompt = sys.argv[1], sys.argv[2]
    if os.path.exists(out) and os.path.getsize(out) > 5000:
        print(f"SKIP (exists): {out}"); return
    os.makedirs(os.path.dirname(out), exist_ok=True)
    last = None
    for attempt in range(6):
        key = KEYS[attempt % len(KEYS)]
        try:
            png = call(prompt, key, aspect=(attempt < 4))
            img = Image.open(io.BytesIO(png)).convert("RGB")
            img.save(out, "WEBP", quality=82, method=6)
            print(f"OK: {out} ({os.path.getsize(out)//1024} KB)"); return
        except urllib.error.HTTPError as e:
            code = e.code; last = f"HTTP {code}"
            if code in (429, 503, 500):
                time.sleep(min(2 ** attempt, 30)); continue
            if code == 400 and attempt < 4:
                continue  # retry sans aspectRatio
            time.sleep(3)
        except Exception as e:
            last = str(e)[:150]; time.sleep(3)
    print(f"FAIL: {out} :: {last}"); sys.exit(1)

if __name__ == "__main__":
    main()
