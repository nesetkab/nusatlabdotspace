#!/usr/bin/env bash
# Regenerates src/assets/fonts/science-gothic.woff2 from the upstream variable font.
#
# Google Fonts (and Fontsource, which mirrors it) serve a stripped Science Gothic without the
# small-caps (smcp/c2sc) glyphs the wordmark style relies on, so we self-host a subset instead:
# Latin only, weight axis kept (100–900), other axes pinned to their defaults.
#
# Requires: python3. Run from the repo root: ./scripts/subset-science-gothic.sh
set -euo pipefail

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

python3 -m venv "$tmp/venv"
"$tmp/venv/bin/pip" install --quiet fonttools brotli

curl -fsSL -o "$tmp/full.ttf" \
  "https://github.com/google/fonts/raw/main/ofl/sciencegothic/ScienceGothic%5BCTRS,slnt,wdth,wght%5D.ttf"

"$tmp/venv/bin/fonttools" varLib.instancer "$tmp/full.ttf" CTRS=0 slnt=0 wdth=100 -q -o "$tmp/wght.ttf"

"$tmp/venv/bin/pyftsubset" "$tmp/wght.ttf" \
  --unicodes="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD" \
  --layout-features="kern,liga,calt,ccmp,locl,mark,mkmk,smcp,c2sc,case,tnum,pnum,frac,numr,dnom,zero,ss01,ss02,salt,rvrn" \
  --flavor=woff2 \
  --output-file=src/assets/fonts/science-gothic.woff2

echo "Wrote src/assets/fonts/science-gothic.woff2"
