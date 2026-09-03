(function () {
  "use strict";

  var root = document.documentElement;

  /* new strings need both en and es or they won't switch */
  var I18N = {
    en: {
      "meta.title": "Saihajdeep Singh Kaur - IT Student Portfolio",
      "meta.desc": "Portfolio of Saihajdeep Singh Kaur, IT student from Spain. Support, systems, code and Minecraft mods.",
      "a11y.skip": "Skip to content",
      "a11y.top": "Back to top",
      "a11y.nav": "Primary",
      "a11y.theme": "Toggle light and dark theme",
      "a11y.openMenu": "Open menu",
      "a11y.closeMenu": "Close menu",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.experience": "Experience",
      "nav.contact": "Contact",
      "lang.label": "ENGLISH",
      "hero.eyebrow": "IT student - Spain",
      "hero.lede": "I study systems and networks, and I write code in my free time. Mostly Java mods for Minecraft and small websites.",
      "hero.sub": "Right now I'm finishing my advanced vocational course (SMR).",
      "hero.cta1": "See my work",
      "hero.cta2": "Contact",
      "hero.proofLabel": "Highlights",
      "hero.p1k": "CurseForge downloads",
      "hero.p2k": "Published mods",
      "hero.p3k": "Mod loaders",
      "hero.panelLabel": "Profile summary",
      "hero.status": "looking for work",
      "hero.r1k": "focus",
      "hero.r1v": "sysadmin · support · dev",
      "hero.r2k": "stack",
      "hero.r3k": "infra",
      "hero.r4k": "modus",
      "hero.r5k": "languages",
      "hero.note": "700h of IT support, plus 80h at Bosch through Erasmus",
      "hero.tickerLabel": "Technologies",
      "copy.copy": "Copy",
      "copy.done": "Copied ✓",
      "about.label": "About",
      "about.h": "A bit about me.",
      "about.p1": "I'm at Institut Puig Castellar studying Microcomputer Systems and Networks. Most of what I know comes from actually doing the work: helping real users, fixing and installing machines, setting up small networks.",
      "about.p2": "Outside of class I mostly write Java. I've published two Minecraft mods on CurseForge. I also make websites from scratch with HTML, CSS and a bit of JavaScript. Lately I've started looking into AI and machine learning basics on my own.",
      "about.p3": "I'm also getting into cybersecurity basics using Kali Linux in a virtual machine. I want to understand how attacks work and how to defend against them.",
      "about.factsLabel": "Key facts",
      "about.facts": "In short",
      "about.f1": "<span>Studying</span>Higher Vocational SMR, Institut Puig Castellar",
      "about.f2": "<span>Experience</span>700h school support + 80h Erasmus / Bosch",
      "about.f3": "<span>Built</span>2 Minecraft mods · a few websites",
      "about.f4": "<span>Languages</span>EN C1 · ES B2 · CA B2 · Punjabi B2 · Hindi/Urdu C1",
      "about.f5": "<span>CV</span><a href=\"assets/cv.pdf\" target=\"_blank\" rel=\"noopener\">CV (PDF)</a> · <a href=\"assets/cv.pdf\" download=\"Saihajdeep-Singh-Kaur-CV.pdf\">Download</a>",
      "projects.label": "Projects",
      "projects.h": "Things I've built.",
      "projects.sub": "I have 18 public repos on GitHub. These are the ones I think are worth showing.",
      "projects.techLabel": "Technologies",
      "projects.i1": "01 / Java · Forge mod",
      "projects.d1": "A server admin mod for Minecraft Forge 1.21.1. It adds an economy system plus everyday admin tools: chunk claims, teleports and a shop system. Built with Gradle using the Forge MDK.",
      "projects.source": "Source",
      "projects.cfpage": "CurseForge page",
      "projects.m1": "economy · claims · teleports · shops",
      "projects.i2": "02 / Java · Fabric mod · 2.1k downloads",
      "projects.d2": "An unofficial Fabric backport of a co-op interaction mod. Players can dap each other up, catch and throw other players, and use several other multiplayer interactions. It is my most-downloaded release, with over 2,000 downloads.",
      "projects.c1": "Backporting",
      "projects.t2": "fabric · 2.1k downloads",
      "projects.m2": "co-op · interactions · released Jun 2026",
      "projects.i3": "03 / Web · live demo",
      "projects.h3": "Restaurant - multi-page site",
      "projects.d3": "A multi-page website I built by hand: home, menu, news, reservations, directions and jobs pages. Same stylesheets throughout, a bit of plain JavaScript, no frameworks.",
      "projects.demo": "Live demo",
      "projects.t3": "7 pages · live",
      "projects.m3": "menu · booking · news · jobs",
      "projects.more": "More",
      "projects.s1k": "Hardware + web",
      "projects.s1d": "Two parts: a website documenting the build and my progress, and a 55 KB Arduino sketch for a piano interface. The site is online and both parts are on GitHub.",
      "projects.s1l": "<a href=\"https://github.com/SANDYINNIT/ePiano\" target=\"_blank\" rel=\"noopener\">Website source</a> <span aria-hidden=\"true\">·</span> <a href=\"https://github.com/SANDYINNIT/ePianoArduino\" target=\"_blank\" rel=\"noopener\">Firmware source</a> <span aria-hidden=\"true\">·</span> <a href=\"https://sandyinnit.github.io/ePiano/\" target=\"_blank\" rel=\"noopener\">Live demo</a>",
      "projects.s2k": "Systems documentation",
      "projects.s2h": "Self-hosting lab manuals",
      "projects.s2d": "Step-by-step install and configuration guides from my coursework. They cover Nextcloud, ownCloud, WordPress, and Moodle.",
      "projects.note": "The rest is on my <a href=\"https://github.com/SANDYINNIT?tab=repositories\" target=\"_blank\" rel=\"noopener\">GitHub</a>. Mostly older coursework.",
      "skills.label": "Skills",
      "skills.h": "Skills",
      "skills.g1": "Programming",
      "skills.g2": "Minecraft",
      "skills.g3": "Systems and networks",
      "skills.g4": "Other tools",
      "skills.s01": "<strong>Java</strong><span>two released mods</span>",
      "skills.s02": "<strong>HTML / CSS</strong><span>several multi-page sites</span>",
      "skills.s03": "<strong>JavaScript</strong><span>basics, small scripts</span>",
      "skills.s04": "<strong>MCFunction / JSON</strong><span>learning</span>",
      "skills.s05": "<strong>Forge + Gradle</strong><span>used for Server Utils</span>",
      "skills.s06": "<strong>Fabric</strong><span>used for a backport</span>",
      "skills.s07": "<strong>Origins API · datapacks</strong><span>basics</span>",
      "skills.s08": "<strong>CurseForge publishing</strong><span>2 mods · 2.2k downloads</span>",
      "skills.s09": "<strong>Windows / Linux</strong><span>install and setup</span>",
      "skills.s10": "<strong>VirtualBox / VMware</strong><span>used in class</span>",
      "skills.s11": "<strong>IP · DHCP · DNS · routers</strong><span>can configure</span>",
      "skills.s12": "<strong>PC assembly & repair</strong><span>700h hands-on</span>",
      "skills.s13": "<strong>Troubleshooting</strong><span>support experience</span>",
      "skills.s14": "<strong>Git / GitHub</strong><span>daily use, 18 repos</span>",
      "skills.s15": "<strong>VS Code</strong><span>my editor</span>",
      "skills.s16": "<strong>Arduino (C++)</strong><span>basics</span>",
      "skills.s17": "<strong>AI / ML fundamentals</strong><span>just starting</span>",
      "skills.s18": "<strong>Kali Linux (VM)</strong><span>practising basics</span>",
      "exp.label": "Experience",
      "exp.h": "Experience",
      "exp.m1": "Educational center · 700 hours",
      "exp.j1": "IT support intern",
      "exp.b11": "Provided basic technical support to staff and users",
      "exp.b12": "Performed computer maintenance and troubleshooting",
      "exp.b13": "Installed and updated operating systems",
      "exp.b14": "Configured systems and internal networks",
      "exp.b15": "Assisted with hardware and software setup",
      "exp.m2": "Erasmus internship · Bosch · 80 hours",
      "exp.j2": "Technical support intern",
      "exp.b21": "Provided basic technical support",
      "exp.b22": "Assisted with data analysis tasks",
      "exp.b23": "Participated in troubleshooting activities",
      "exp.b24": "Supported system integration processes",
      "edu.label": "Education",
      "edu.h": "Studies",
      "edu.h1": "Higher Vocational - Microcomputer Systems and Networks",
      "edu.p1": "Advanced course: systems, networks and IT infrastructure. Still studying.",
      "edu.h2": "Intermediate Vocational - Microcomputer Systems and Networks",
      "edu.p2": "The basics: hardware, operating systems, office networks and user support.",
      "edu.n": "Learning now",
      "edu.n1": "<strong>Systems administration</strong><span>Linux, virtualization, self-hosting</span>",
      "edu.n2": "<strong>Software development</strong><span>more Java, more finished code</span>",
      "edu.n3": "<strong>Networking & security basics</strong><span>setup first, security next</span>",
      "edu.n4": "<strong>AI and machine learning</strong><span>the basics, on my own</span>",
      "contact.label": "Contact",
      "contact.h": "Contact",
      "contact.sub": "I'm looking for an internship or junior IT work. Email is the fastest way to reach me.",
      "contact.copy": "Copy email",
      "contact.wh": "What I can do",
      "contact.w1h": "User support",
      "contact.w1d": "Troubleshooting and setup help for staff and users.",
      "contact.w2h": "PCs and systems",
      "contact.w2d": "Assembly, OS installs, maintenance, and repairs.",
      "contact.w3h": "Small networks",
      "contact.w3d": "IP, DHCP, and DNS setup plus troubleshooting.",
      "contact.w4h": "Simple websites",
      "contact.w4d": "Hand-built multi-page sites with HTML, CSS, and a little JavaScript.",
      "contact.cv": "Download CV",
      "contact.socialLabel": "Profiles",
      "footer.made": "© <span id=\"year\">2026</span> Saihajdeep Singh Kaur · Made with HTML, CSS and JS",
      "footer.top": "Top",
      "footer.source": "Site source"
    },
    es: {
      "meta.title": "Saihajdeep Singh Kaur - Portfolio de estudiante IT",
      "meta.desc": "Portfolio de Saihajdeep Singh Kaur, estudiante de IT. Soporte, sistemas, código y mods de Minecraft.",
      "a11y.skip": "Saltar al contenido",
      "a11y.top": "Volver arriba",
      "a11y.nav": "Principal",
      "a11y.theme": "Cambiar entre tema claro y oscuro",
      "a11y.openMenu": "Abrir menú",
      "a11y.closeMenu": "Cerrar menú",
      "nav.about": "Sobre mí",
      "nav.projects": "Proyectos",
      "nav.skills": "Habilidades",
      "nav.experience": "Experiencia",
      "nav.contact": "Contacto",
      "lang.label": "ESPAÑOL",
      "hero.eyebrow": "Estudiante de IT - España",
      "hero.lede": "Estudio sistemas y redes, y programo en mi tiempo libre. Sobre todo mods de Minecraft en Java y webs pequeñas.",
      "hero.sub": "Ahora mismo estoy terminando el grado superior (SMR).",
      "hero.cta1": "Ver mi trabajo",
      "hero.cta2": "Contacto",
      "hero.proofLabel": "Destacados",
      "hero.p1k": "Descargas en CurseForge",
      "hero.p2k": "Mods publicados",
      "hero.p3k": "Plataformas de mods",
      "hero.panelLabel": "Resumen del perfil",
      "hero.status": "buscando trabajo",
      "hero.r1k": "foco",
      "hero.r1v": "sysadmin · soporte · dev",
      "hero.r2k": "stack",
      "hero.r3k": "infra",
      "hero.r4k": "mods",
      "hero.r5k": "idiomas",
      "hero.note": "700 h de soporte IT, más 80 h en Bosch con Erasmus",
      "hero.tickerLabel": "Tecnologías",
      "copy.copy": "Copiar",
      "copy.done": "Copiado ✓",
      "about.label": "Sobre mí",
      "about.h": "Algo sobre mí.",
      "about.p1": "Estoy en el Institut Puig Castellar, en Sistemas Microinformáticos y Redes. Casi todo lo que sé lo aprendí haciéndolo: ayudar a usuarios reales, arreglar e instalar equipos, montar redes pequeñas.",
      "about.p2": "Fuera de clase escribo sobre todo Java. He publicado dos mods de Minecraft en CurseForge. También hago webs desde cero con HTML, CSS y un poco de JavaScript. Últimamente también estoy mirando lo básico de IA y machine learning por mi cuenta.",
      "about.p3": "También estoy empezando con ciberseguridad usando Kali Linux en una máquina virtual. Quiero entender cómo funcionan los ataques y cómo defenderse.",
      "about.factsLabel": "Datos clave",
      "about.facts": "En resumen",
      "about.f1": "<span>Estudios</span>GS Sistemas Microinformáticos y Redes, Institut Puig Castellar",
      "about.f2": "<span>Experiencia</span>700 h soporte + 80 h Erasmus / Bosch",
      "about.f3": "<span>Creados</span>2 mods de Minecraft · varias webs",
      "about.f4": "<span>Idiomas</span>EN C1 · ES B2 · CA B2 · Punjabi B2 · Hindi/Urdu C1",
      "about.f5": "<span>CV</span><a href=\"assets/cv.pdf\" target=\"_blank\" rel=\"noopener\">CV (PDF)</a> · <a href=\"assets/cv.pdf\" download=\"Saihajdeep-Singh-Kaur-CV.pdf\">Descargar</a>",
      "projects.label": "Proyectos",
      "projects.h": "Cosas que he hecho.",
      "projects.sub": "Tengo 18 repositorios públicos en GitHub. Estos son los que creo que merecen la pena.",
      "projects.techLabel": "Tecnologías",
      "projects.i1": "01 / Java · Mod de Forge",
      "projects.d1": "Un mod de administración para servidores de Minecraft Forge 1.21.1. Añade economía y herramientas del día a día: protección de chunks, teletransporte y tiendas. Hecho con Gradle y el Forge MDK.",
      "projects.source": "Código",
      "projects.cfpage": "Página en CurseForge",
      "projects.m1": "economía · protección · teletransporte · tiendas",
      "projects.i2": "02 / Java · Mod de Fabric · 2.1k descargas",
      "projects.d2": "Un backport no oficial a Fabric de un mod de interacción cooperativa. Los jugadores pueden chocarlas entre sí, atrapar y lanzar a otros jugadores, y usar otras interacciones multijugador. Es mi lanzamiento más descargado, con más de 2.000 descargas.",
      "projects.c1": "Backport",
      "projects.t2": "fabric · 2.1k descargas",
      "projects.m2": "cooperativo · interacciones · Junio 2026",
      "projects.i3": "03 / Web · demo en vivo",
      "projects.h3": "Restaurante - sitio de varias páginas",
      "projects.d3": "Una web de varias páginas hecha a mano: inicio, menú, noticias, reservas, cómo llegar y empleo. Mismas hojas de estilo en todo, un poco de JavaScript puro, sin frameworks.",
      "projects.demo": "Demo en vivo",
      "projects.t3": "7 páginas · en vivo",
      "projects.m3": "menú · reservas · noticias · empleo",
      "projects.more": "Más",
      "projects.s1k": "Hardware + web",
      "projects.s1d": "Dos partes: una web con la documentación y mi progreso, y un programa de Arduino de 55 KB para una interfaz de piano. La web está en línea y las dos partes están en GitHub.",
      "projects.s1l": "<a href=\"https://github.com/SANDYINNIT/ePiano\" target=\"_blank\" rel=\"noopener\">Código web</a> <span aria-hidden=\"true\">·</span> <a href=\"https://github.com/SANDYINNIT/ePianoArduino\" target=\"_blank\" rel=\"noopener\">Código firmware</a> <span aria-hidden=\"true\">·</span> <a href=\"https://sandyinnit.github.io/ePiano/\" target=\"_blank\" rel=\"noopener\">Demo en vivo</a>",
      "projects.s2k": "Documentación de sistemas",
      "projects.s2h": "Manuales de laboratorio (self-hosting)",
      "projects.s2d": "Guías de instalación y configuración paso a paso de mis estudios. Cubren Nextcloud, ownCloud, WordPress y Moodle.",
      "projects.note": "El resto está en mi <a href=\"https://github.com/SANDYINNIT?tab=repositories\" target=\"_blank\" rel=\"noopener\">GitHub</a>. Casi todo son ejercicios antiguos.",
      "skills.label": "Habilidades",
      "skills.h": "Habilidades",
      "skills.g1": "Programación",
      "skills.g2": "Minecraft",
      "skills.g3": "Sistemas y redes",
      "skills.g4": "Otras herramientas",
      "skills.s01": "<strong>Java</strong><span>dos mods publicados</span>",
      "skills.s02": "<strong>HTML / CSS</strong><span>varias webs multipágina</span>",
      "skills.s03": "<strong>JavaScript</strong><span>lo básico, scripts pequeños</span>",
      "skills.s04": "<strong>MCFunction / JSON</strong><span>aprendiendo</span>",
      "skills.s05": "<strong>Forge + Gradle</strong><span>lo usé en Server Utils</span>",
      "skills.s06": "<strong>Fabric</strong><span>lo usé en un backport</span>",
      "skills.s07": "<strong>Origins API · datapacks</strong><span>lo básico</span>",
      "skills.s08": "<strong>Publicación en CurseForge</strong><span>2 mods · 2,2 mil descargas</span>",
      "skills.s09": "<strong>Windows / Linux</strong><span>Instalación y configuración</span>",
      "skills.s10": "<strong>VirtualBox / VMware</strong><span>Clase y laboratorios</span>",
      "skills.s11": "<strong>IP · DHCP · DNS · routers</strong><span>Configuración intermedia</span>",
      "skills.s12": "<strong>Montaje y reparación de PC</strong><span>700 h de práctica</span>",
      "skills.s13": "<strong>Resolución de problemas</strong><span>experiencia en soporte</span>",
      "skills.s14": "<strong>Git / GitHub</strong><span>uso diario, 18 repos</span>",
      "skills.s15": "<strong>VS Code</strong><span>mi editor</span>",
      "skills.s16": "<strong>Arduino (C++)</strong><span>lo básico</span>",
      "skills.s17": "<strong>Fundamentos de IA / ML</strong><span>empezando</span>",
      "skills.s18": "<strong>Kali Linux (VM)</strong><span>practicando lo básico</span>",
      "exp.label": "Experiencia",
      "exp.h": "Experiencia",
      "exp.m1": "Centro educativo · 700 horas",
      "exp.j1": "Becario de soporte IT",
      "exp.b11": "Soporte técnico básico al personal y a los usuarios",
      "exp.b12": "Mantenimiento y resolución de problemas en equipos",
      "exp.b13": "Instalación y actualización de sistemas operativos",
      "exp.b14": "Configuración de sistemas y redes internas",
      "exp.b15": "Apoyo en la instalación de hardware y software",
      "exp.m2": "Prácticas Erasmus · Bosch · 80 horas",
      "exp.j2": "Becario de soporte técnico",
      "exp.b21": "Soporte técnico básico",
      "exp.b22": "Apoyo en tareas de análisis de datos",
      "exp.b23": "Participación en resolución de problemas",
      "exp.b24": "Apoyo en procesos de integración de sistemas",
      "edu.label": "Formación",
      "edu.h": "Estudios",
      "edu.h1": "Grado Superior - Sistemas Microinformáticos y Redes",
      "edu.p1": "Grado superior: sistemas, redes e infraestructura. Todavía estudiando.",
      "edu.h2": "Grado Medio - Sistemas Microinformáticos y Redes",
      "edu.p2": "La base: hardware, sistemas operativos, redes de oficina y soporte.",
      "edu.n": "Aprendiendo ahora",
      "edu.n1": "<strong>Administración de sistemas</strong><span>Linux, virtualización, self-hosting</span>",
      "edu.n2": "<strong>Desarrollo de software</strong><span>Más Java y más código terminado</span>",
      "edu.n3": "<strong>Redes y bases de seguridad</strong><span>primero montar, luego proteger</span>",
      "edu.n4": "<strong>IA y machine learning</strong><span>lo básico, por mi cuenta</span>",
      "contact.label": "Contacto",
      "contact.h": "Contacto",
      "contact.sub": "Busco prácticas o un puesto IT junior. El correo es la vía más rápida.",
      "contact.copy": "Copiar correo",
      "contact.wh": "Lo que sé hacer",
      "contact.w1h": "Soporte a usuarios",
      "contact.w1d": "Ayuda con problemas y equipos para personal y usuarios.",
      "contact.w2h": "Equipos y sistemas",
      "contact.w2d": "Montaje, instalación de sistemas operativos, mantenimiento y reparaciones.",
      "contact.w3h": "Redes pequeñas",
      "contact.w3d": "Configuración de IP, DHCP y DNS, más resolución de problemas.",
      "contact.w4h": "Sitios web sencillos",
      "contact.w4d": "Sitios de varias páginas hechos a mano con HTML, CSS y un poco de JavaScript.",
      "contact.cv": "Descargar CV",
      "contact.socialLabel": "Perfiles",
      "footer.made": "© <span id=\"year\">2026</span> Saihajdeep Singh Kaur · Hecho con HTML, CSS y JS",
      "footer.top": "Arriba",
      "footer.source": "Código del sitio"
    }
  };

  var currentLang = "en";
  try {
    var saved = localStorage.getItem("sk-lang");
    if (saved === "en" || saved === "es") currentLang = saved;
  } catch (e) { /* ignore */ }

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || "";
  }

  function applyLang(lang) {
    currentLang = lang === "es" ? "es" : "en";
    var dict = I18N[currentLang];
    root.setAttribute("lang", currentLang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    document.title = t("meta.title");
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t("meta.desc"));

    var label = document.getElementById("lang-label");
    if (label) label.textContent = t("lang.label");
    var flagEn = document.getElementById("flag-en");
    var flagEs = document.getElementById("flag-es");
    if (flagEn && flagEs) {
      flagEn.hidden = currentLang !== "en";
      flagEs.hidden = currentLang !== "es";
    }
    document.querySelectorAll("[data-lang-item]").forEach(function (btn) {
      btn.setAttribute(
        "aria-checked",
        btn.getAttribute("data-lang") === currentLang ? "true" : "false"
      );
    });

    /* footer year survives innerHTML swaps */
    syncYear();

    try {
      localStorage.setItem("sk-lang", currentLang);
    } catch (e) { /* ignore */ }
  }

  var switcher = document.getElementById("lang-switcher");
  var langBtn = document.getElementById("lang-btn");
  var langMenu = document.getElementById("lang-menu");
  function closeLang() {
    if (!switcher) return;
    switcher.classList.remove("open");
    if (langBtn) langBtn.setAttribute("aria-expanded", "false");
  }
  if (switcher && langBtn) {
    langBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = switcher.classList.toggle("open");
      langBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    langMenu.querySelectorAll("[data-lang]").forEach(function (item) {
      item.addEventListener("click", function () {
        applyLang(item.getAttribute("data-lang"));
        closeLang();
      });
    });
    document.addEventListener("click", function (e) {
      if (!switcher.contains(e.target)) closeLang();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLang();
    });
  }

  var toggle = document.getElementById("theme-toggle");
  try {
    var stored = localStorage.getItem("sk-theme");
    if (stored === "light" || stored === "dark") {
      root.setAttribute("data-theme", stored);
    }
  } catch (e) { /* ignore */ }
  function syncToggle() {
    if (!toggle) return;
    toggle.setAttribute(
      "aria-pressed",
      root.getAttribute("data-theme") === "light" ? "true" : "false"
    );
  }
  syncToggle();
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", next === "light" ? "#f6f4ee" : "#0a0c11");
      try {
        localStorage.setItem("sk-theme", next);
      } catch (e) { /* ignore */ }
      syncToggle();
    });
  }

  var navToggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("site-nav");
  function syncNavLabel() {
    if (!navToggle) return;
    var open = nav && nav.classList.contains("open");
    navToggle.setAttribute("aria-label", open ? t("a11y.closeMenu") : t("a11y.openMenu"));
  }
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      syncNavLabel();
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        syncNavLabel();
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        syncNavLabel();
      }
    });
  }

  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  var sections = ["about", "projects", "skills", "experience", "contact"];
  var navLinks = nav ? Array.from(nav.querySelectorAll("a")) : [];
  if ("IntersectionObserver" in window && navLinks.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (a) {
            a.classList.toggle(
              "active",
              a.getAttribute("href") === "#" + entry.target.id
            );
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(function (id) {
      var s = document.getElementById(id);
      if (s) spy.observe(s);
    });
  }

  /* clipboard API with a fallback for older browsers */
  function bindCopy(id, labelKey) {
    var btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener("click", function () {
      var email = btn.getAttribute("data-email") || "innitsandy@gmail.com";
      function done() {
        btn.textContent = t("copy.done");
        setTimeout(function () { btn.textContent = t(labelKey); }, 1600);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done, done);
      } else {
        var ta = document.createElement("textarea");
        ta.value = email;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch (e) { /* ignore */ }
        document.body.removeChild(ta);
        done();
      }
    });
  }
  bindCopy("copy-email", "copy.copy");
  bindCopy("copy-email-2", "contact.copy");

  function syncYear() {
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  applyLang(currentLang);
})();
