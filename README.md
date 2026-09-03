# Portfolio - Saihajdeep Singh Kaur

My personal portfolio website. It covers my background in IT systems,
networks and technical support, plus the software and Minecraft projects
I build in my own time.

**Live site:** https://sandyinnit.github.io/Portfolio/

## What's on the page

- Hero with a short intro and links
- About me and key facts
- Featured projects (Minecraft mods, websites, hardware + docs)
- Skills grouped by how I actually use them
- Work experience and education
- What I am learning right now
- Contact links and a downloadable CV

The whole site works in English and Spanish. There is a language
switcher in the top right corner.

## Built with

Just the basics, no frameworks:

- `index.html` - all the content and structure
- `styles.css` - dark and light themes, responsive layout
- `main.js` - theme toggle, language switcher, mobile menu, small interactions

Fonts come from Google Fonts (Space Grotesk, Inter, JetBrains Mono).
Everything else is hand-written.

## Getting started

You need nothing installed to look at the site. To run it yourself,
pick one option below.

### Option 1: download the ZIP

1. Go to https://github.com/SANDYINNIT/Portfolio
2. Click the green **Code** button, then **Download ZIP**
3. Extract the ZIP file anywhere you like
   - On Windows: right click the file, then **Extract All**
4. Open the extracted folder and double click `index.html`

That opens the site in your browser. Done.

### Option 2: clone with git

```bash
git clone https://github.com/SANDYINNIT/Portfolio.git
cd Portfolio
```

Then either open `index.html` directly, or serve the folder so
everything behaves exactly like the live site:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000 in your browser.

## Project structure

```text
Portfolio/
├── index.html      Page content (sections 01-06)
├── styles.css      All styling, themes and responsive rules
├── main.js         Interactions + the EN/ES translations
├── assets/
│   └── cv.pdf      Downloadable CV
├── LICENSE         MIT License
└── README.md       This file
```

## Customizing

- **Projects:** the cards live in `index.html` under `#projects`.
- **Text in both languages:** every string sits in the `I18N` object in
  `main.js`. If you add a line to the page, add it under both `en`
  and `es`, or it will not switch.
- **Colors:** all of them are variables at the top of `styles.css`.
  Start with `--accent` if you want a new look.
- **CV:** replace `assets/cv.pdf` with a new export and the view and
  download links keep working. They are linked from the About box and
  the Contact section.

## Deployment

The site is plain static files, so it runs anywhere. It is currently
hosted with GitHub Pages:

1. Push the `main` branch to `SANDYINNIT/Portfolio`
2. Go to repo **Settings → Pages**
3. Set source to **Deploy from a branch**, branch `main`, folder `/ (root)`
4. The site goes live at https://sandyinnit.github.io/Portfolio/

## License

MIT License, see [LICENSE](LICENSE). You are free to use and adapt
this code as long as the original copyright notice stays included.

## Author

**Saihajdeep Singh Kaur**

- GitHub: https://github.com/SANDYINNIT
- LinkedIn: https://www.linkedin.com/in/saihajdeep-singh-kaur-b448ba270/
- CurseForge: https://www.curseforge.com/members/sandyinnit/projects
- Fiverr: https://www.fiverr.com/sellers/saihajdeep
- Email: innitsandy@gmail.com
