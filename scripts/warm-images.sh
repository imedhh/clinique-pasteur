#!/usr/bin/env bash
# Préchauffe le cache /_next/image (sharp) pour toutes les images fiches + héros.
# Concurrence max 4, timeout 30s/requête. Loggue les codes != 200.
set -u

BASE="http://localhost:3010"
DIR="/root/projets-ai/clinique-pasteur"
WIDTHS="640 828 1080 1200 1920 3840"
ACCEPT="image/avif,image/webp,image/*,*/*;q=0.8"
LOG="${TMPDIR:-/tmp}/warm-images-results.$$"

# 1. Liste des chemins d'images (relatifs à public/)
paths() {
  for f in "$DIR"/public/images/fiches/*.webp; do
    echo "/images/fiches/$(basename "$f")"
  done
  for g in clinic-exterior.webp medical-team.webp hospital-modern.webp surgery-modern.webp logo-fr.png; do
    echo "/images/$g"
  done
}

# 2. Génère toutes les paires (chemin, largeur)
jobs_list() {
  paths | while read -r p; do
    for w in $WIDTHS; do
      echo "$p $w"
    done
  done
}

# 3. Fonction de warm-up d'une variante (appelée via xargs)
warm_one() {
  p="$1"; w="$2"
  # URL-encode du chemin (/ -> %2F ; noms de fichiers = [a-z0-9._-], rien d'autre à encoder)
  enc=$(printf '%s' "$p" | sed 's|/|%2F|g')
  code=$(curl -s -o /dev/null -w '%{http_code}' --max-time 30 \
    -H "Accept: image/avif,image/webp,image/*,*/*;q=0.8" \
    "http://localhost:3010/_next/image?url=${enc}&w=${w}&q=75")
  echo "$code $p $w"
}
export -f warm_one

total=$(jobs_list | wc -l)
echo "Warm-up de $total variantes (concurrence 4)..."

jobs_list | xargs -P 4 -n 2 bash -c 'warm_one "$@"' _ > "$LOG"

ok=$(grep -c '^200 ' "$LOG" || true)
fail=$(grep -vc '^200 ' "$LOG" || true)

echo ""
echo "=== RÉSUMÉ ==="
echo "Variantes réchauffées (200) : $ok / $total"
if [ "$fail" -gt 0 ]; then
  echo "Échecs ($fail) :"
  grep -v '^200 ' "$LOG" | sort | awk '{printf "  HTTP %s  %s  w=%s\n", $1, $2, $3}'
else
  echo "Aucun échec."
fi

rm -f "$LOG"
