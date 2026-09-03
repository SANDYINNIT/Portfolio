# Sandy's Portfolio

Personal portfolio of **Saihajdeep Singh Kaur** - early-career IT and software.
Live target: `https://sandyinnit.github.io/Portfolio/` via GitHub Pages.

## Stack

Hand-built, no dependencies: `index.html` + `styles.css` + `main.js`.
System fonts + Google Fonts (Space Grotesk / Inter / JetBrains Mono).
No build step, no framework, no runtime API calls.

## Run locally

```bash
python -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages)

1. Push this folder to `SANDYINNIT/Portfolio` on the `main` branch.
2. Repo → **Settings → Pages** → Deploy from branch → `main` / root.
3. Site appears at `https://sandyinnit.github.io/Portfolio/`.

## Updating content

- **Projects:** edit the `<article>` cards in `index.html` (`#projects`).
  Featured = Server Utils, Dap Ur Homies, Restaurant. Secondary = ePiano, lab manuals.
- **Languages (EN/ES):** all copy lives in the `I18N` dictionary in `main.js`.
  Every `data-i18n` / `data-i18n-html` / `data-i18n-aria` key in `index.html` needs
  both an `en` and an `es` entry. Choice persists in `localStorage` (`sk-lang`).
- **Skills / experience / education:** same file, clearly labelled sections `01`–`06`.
- **Theme:** dark default, toggle persisted in `localStorage` (`main.js`).
- **CV:** the downloadable CV lives at `assets/cv.pdf` (2 pages, generated from
  the CV source of truth in `AGENTS.md`). Replace that file with a new export to
  update the view and download links. They are wired in the About facts box and
  the Contact row.

## Content rules (from AGENTS.md)

- CV + GitHub repos are the sources of truth, plus facts the user states directly
  (see "Additional user-stated interests" in `AGENTS.md`). Never invent credentials,
  metrics, employers, or project features.
- Copy avoids AI clichés; skill levels are honest (no percentage bars).
- External links were last verified Sep 2026: all GitHub + live demos return
  200. CurseForge/LinkedIn block bots (403/999) but URLs are CV-verbatim.
