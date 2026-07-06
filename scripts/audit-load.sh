#!/bin/bash
# Audit temps/poids de chargement des pages (HTML + images servies en direct)
# Usage: bash scripts/audit-load.sh
set -u

BASE="http://localhost:3010"
PAGES=(
  "/"
  "/chirurgies"
  "/centres"
  "/explorations"
  "/hospitalisation"
  "/contact"
  "/devis"
  "/chirurgies/chirurgie-bariatrique"
  "/chirurgies/chirurgie-bariatrique/sleeve-gastrectomie"
  "/centres/radiologie/irm"
  "/centres/radiologie/scanner"
  "/explorations/explorations-cardiaques/coronarographie"
  "/chirurgies/chirurgie-orthopedique/prothese-totale-hanche"
  "/centres/endoscopie/coloscopie"
)

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

printf "%-55s %8s %12s %10s %12s %s\n" "PAGE" "IMAGES" "POIDS(Ko)" "HTML(ms)" "IMG_MAX(ms)" "STATUT"
printf '%.0s-' {1..110}; echo

for page in "${PAGES[@]}"; do
  html_file="$TMP/page.html"
  read -r html_code html_time html_size <<< "$(curl -s -o "$html_file" -w "%{http_code} %{time_total} %{size_download}" --max-time 30 "$BASE$page")"
  html_ms=$(awk -v t="$html_time" 'BEGIN{printf "%.0f", t*1000}')

  # Extraction des images /images/... (dédoublonnées) + détection /_next/image
  next_image_count=$(grep -o 'src="/_next/image[^"]*"' "$html_file" 2>/dev/null | wc -l)
  mapfile -t imgs < <(grep -o 'src="/images/[^"]*"' "$html_file" 2>/dev/null | sed 's/^src="//; s/"$//' | sort -u)

  img_count=${#imgs[@]}
  img_total_bytes=0
  img_max_ms=0
  img_max_kb=0
  img_max_url=""
  bad_codes=""

  if [ "$img_count" -gt 0 ]; then
    results="$TMP/imgs.txt"
    : > "$results"
    # Téléchargement concurrence 4 max, timeout 15s
    printf '%s\n' "${imgs[@]}" | xargs -P 4 -I{} sh -c \
      "curl -s -o /dev/null -w '{} %{http_code} %{time_total} %{size_download}\n' --max-time 15 '$BASE{}'" >> "$results"

    while read -r url code t size; do
      [ "$code" != "200" ] && bad_codes="$bad_codes $url($code)"
      img_total_bytes=$((img_total_bytes + size))
      ms=$(awk -v t="$t" 'BEGIN{printf "%.0f", t*1000}')
      [ "$ms" -gt "$img_max_ms" ] && img_max_ms=$ms
      kb=$((size / 1024))
      if [ "$kb" -gt "$img_max_kb" ]; then img_max_kb=$kb; img_max_url=$url; fi
    done < "$results"
  fi

  total_kb=$(( (html_size + img_total_bytes) / 1024 ))

  status="✅"
  reasons=""
  [ "$html_code" != "200" ] && { status="⚠️"; reasons="$reasons HTML=$html_code"; }
  [ "$total_kb" -gt 1500 ] && { status="⚠️"; reasons="$reasons total>1500Ko"; }
  [ "$img_max_kb" -gt 300 ] && { status="⚠️"; reasons="$reasons img>300Ko($img_max_url=${img_max_kb}Ko)"; }
  [ -n "$bad_codes" ] && { status="⚠️"; reasons="$reasons codes:$bad_codes"; }
  [ "$next_image_count" -gt 0 ] && { status="⚠️"; reasons="$reasons /_next/image×$next_image_count"; }

  printf "%-55s %8s %12s %10s %12s %s%s\n" "$page" "$img_count" "$total_kb" "$html_ms" "$img_max_ms" "$status" "$reasons"
done
