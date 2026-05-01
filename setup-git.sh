#!/usr/bin/env bash
# Lokální inicializace Gitu — spusť v Terminálu na Macu v této složce: bash setup-git.sh
set -euo pipefail
cd "$(dirname "$0")"
rm -rf .git
git init -b main
git add index.html README.md .gitignore setup-git.sh
git commit -m "Initial commit: Graf pohybu (interaktivní s–t graf a dráha)"
echo ""
echo "Hotovo. Na GitHubu vytvoř nový repozitář (např. graf_pohyb), pak:"
echo "  git remote add origin https://github.com/TVUJ-UCET/graf_pohyb.git"
echo "  git push -u origin main"
