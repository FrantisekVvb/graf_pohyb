# Graf pohybu

Interaktivní **graf závislosti dráhy na čase** (*s–t*) s vizualizací cyklistů na přímé dráze. Jedna stránka (`index.html`), bez build kroků — stačí otevřít v prohlížeči nebo nasadit jako statické stránky (např. GitHub Pages).

## Funkce

- Kliknutím přidáváš body, přetahováním je měníš, dvojklikem mažeš.
- Volitelně **druhý graf** a druhý cyklista pod hlavní černou čárou dráhy.
- Simulace času, časomíra, ukazatele na grafu.
- Tryský pohon při vysoké rychlosti, otočení cyklisty při couvání.

## Lokální spuštění

```bash
open index.html
```

Nebo libovolný statický server v kořeni projektu.

## Nasazení na GitHub

1. V **Terminálu** na svém počítači:

   ```bash
   cd ~/Documents/dev2/graf_pohyb
   bash setup-git.sh
   ```

   (Nebo ručně: `git init -b main`, `git add .`, `git commit -m "Initial commit"`.)

2. Na GitHubu vytvoř nový **prázdný** repozitář (např. `graf_pohyb`, bez README).

3. Propojení a první push:

   ```bash
   git remote add origin https://github.com/TVUJ-UCET/graf_pohyb.git
   git push -u origin main
   ```

## GitHub Pages

Repozitář obsahuje workflow **[Deploy GitHub Pages](.github/workflows/pages.yml)** — po každém pushi na `main` poběží job v záložce **Actions**.

1. Na GitHubu: **Settings → Pages → Build and deployment**.
2. U **Source** zvol **GitHub Actions** (ne „Deploy from branch“, pokud tam něco máš — dvě zdroje nejdou kombinovat smysluplně).
3. Pushni změny na `main`; v **Actions** uvidíš běh „Deploy GitHub Pages“. Po zeleném jobu Pages nabídnou URL typu `https://<uživatel>.github.io/graf_pohyb/`.

Bez workflow by záložka Actions zůstala prázdná — projekt nemá CI příkazy, jen statické soubory.
