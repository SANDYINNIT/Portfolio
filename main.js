/* tiny vanilla JS for the site. no libraries, just plain DOM stuff. should be easy to follow */
(function () {
  "use strict";

  var root = document.documentElement;

  /* ---- all the EN/ES text lives here. if you add a line to the page, add it in BOTH objects or it just won't switch ---- */
  var I18N = {
    en: {
      "meta.title": "Saihajdeep Singh Kaur - IT Systems & Software",
      "meta.desc": "Portfolio of Saihajdeep Singh Kaur: SMR technician working across IT systems, networks, technical support, Java and web development, and Minecraft modding. Based in Spain.",
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
      "hero.eyebrow": "Early-career IT & software - Spain",
      "hero.lede": "SMR technician working across <strong>systems, networks, and software</strong>. I maintain machines and networks, write Java and web code, and ship Minecraft mods people actually download.",
      "hero.sub": "Finishing Higher Vocational studies in Microcomputer Systems and Networks, building toward systems administration and software development.",
      "hero.cta1": "View projects",
      "hero.cta2": "Contact",
      "hero.proofLabel": "Highlights",
      "hero.p1k": "CurseForge downloads",
      "hero.p2k": "Published mods",
      "hero.p3k": "Mod loaders",
      "hero.panelLabel": "Profile summary",
      "hero.status": "open to opportunities",
      "hero.r1k": "focus",
      "hero.r1v": "sysadmin · support · dev",
      "hero.r2k": "stack",
      "hero.r3k": "infra",
      "hero.r4k": "modus",
      "hero.r5k": "languages",
      "hero.note": "700h hands-on support experience · 80h Erasmus placement at Bosch",
      "hero.tickerLabel": "Technologies",
      "copy.copy": "Copy",
      "copy.done": "Copied ✓",
      "about.label": "About",
      "about.h": "I work in IT support and I write code.",
      "about.p1": "I study Microcomputer Systems and Networks at Institut Puig Castellar. Most of what I know comes from hands-on work. I have supported real users, installed and repaired machines, and configured small networks.",
      "about.p2": "Outside coursework I write code. I build Java mods for Minecraft and have published two of them on CurseForge. I also build websites from scratch with HTML, CSS, and a little JavaScript. I am also interested in AI and machine learning, and I have started studying the fundamentals on my own.",
      "about.p3": "I have also started learning cybersecurity basics, practising with Kali Linux in a virtual machine. I want to understand how systems get attacked and how to harden them. It fits with the support and networking work I already do.",
      "about.p4": "I am looking for practical experience in IT support, systems administration, or junior software work.",
      "about.factsLabel": "Key facts",
      "about.facts": "At a glance",
      "about.f1": "<span>Studying</span>Higher Vocational SMR, Institut Puig Castellar",
      "about.f2": "<span>Experience</span>700h school support + 80h Erasmus / Bosch",
      "about.f3": "<span>Built</span>2 CurseForge mods · several GitHub Pages sites",
      "about.f4": "<span>Languages</span>EN C1 · ES B2 · CA B2 · Punjabi B2 · Hindi/Urdu C1",
      "about.f5": "<span>CV</span><a href=\"assets/cv.pdf\" target=\"_blank\" rel=\"noopener\">Request for CV (view PDF)</a> · <a href=\"assets/cv.pdf\" download=\"Saihajdeep-Singh-Kaur-CV.pdf\">Download</a>",
      "projects.label": "Featured projects",
      "projects.h": "Selected work.",
      "projects.sub": "These come from 18 public repositories and 2 published mods. I picked them for substance and relevance.",
      "projects.techLabel": "Technologies",
      "projects.i1": "01 / Java · Forge mod",
      "projects.d1": "A server administration mod for Minecraft Forge 1.21.1. It adds an economy layer and day-to-day admin tools. Server owners get chunk claims, teleport utilities, and shop systems. It is built with Gradle against the Forge MDK.",
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
      "projects.d3": "A small-business website built by hand. It has home, menu, news, reservations, directions, and jobs pages. They share stylesheets and a little vanilla JavaScript. No framework and no template.",
      "projects.demo": "Live demo",
      "projects.t3": "7 pages · live",
      "projects.m3": "menu · booking · news · jobs",
      "projects.more": "Also worth a look",
      "projects.s1k": "Hardware + web",
      "projects.s1d": "A two-part build. One part is a documentation and progress website. The other is a 55 KB Arduino firmware sketch for a piano interface. The site is live and both parts are on GitHub.",
      "projects.s1l": "<a href=\"https://github.com/SANDYINNIT/ePiano\" target=\"_blank\" rel=\"noopener\">Website source</a> <span aria-hidden=\"true\">·</span> <a href=\"https://github.com/SANDYINNIT/ePianoArduino\" target=\"_blank\" rel=\"noopener\">Firmware source</a> <span aria-hidden=\"true\">·</span> <a href=\"https://sandyinnit.github.io/ePiano/\" target=\"_blank\" rel=\"noopener\">Live demo</a>",
      "projects.s2k": "Systems documentation",
      "projects.s2h": "Self-hosting lab manuals",
      "projects.s2d": "Step-by-step install and configuration guides from my coursework. They cover Nextcloud, ownCloud, WordPress, and Moodle.",
      "projects.note": "Everything else is on <a href=\"https://github.com/SANDYINNIT?tab=repositories\" target=\"_blank\" rel=\"noopener\">GitHub</a>. Most of it is early coursework. I keep it public and I do not feature it here.",
      "skills.label": "Technical skills",
      "skills.h": "Skills, grouped by how I use them.",
      "skills.sub": "Everything here is backed by my CV or my repositories. There are no percentage bars.",
      "skills.g1": "Programming & dev",
      "skills.g2": "Minecraft development",
      "skills.g3": "Systems & networks",
      "skills.g4": "Support & tools",
      "skills.s01": "<strong>Java</strong><span>Practical - two shipped mods</span>",
      "skills.s02": "<strong>HTML / CSS</strong><span>Practical - multi-page sites</span>",
      "skills.s03": "<strong>JavaScript</strong><span>Basic - small site scripts</span>",
      "skills.s04": "<strong>MCFunction / JSON</strong><span>Learning - datapacks</span>",
      "skills.s05": "<strong>Forge + Gradle</strong><span>Practical - Server Utils</span>",
      "skills.s06": "<strong>Fabric</strong><span>Practical - backport release</span>",
      "skills.s07": "<strong>Origins API · datapacks</strong><span>Working knowledge</span>",
      "skills.s08": "<strong>CurseForge publishing</strong><span>2 mods · 2.2k downloads</span>",
      "skills.s09": "<strong>Windows / Linux</strong><span>Install & configure</span>",
      "skills.s10": "<strong>VirtualBox / VMware</strong><span>Coursework + labs</span>",
      "skills.s11": "<strong>IP · DHCP · DNS · routers</strong><span>Intermediate config</span>",
      "skills.s12": "<strong>PC assembly & repair</strong><span>Hands-on, 700h</span>",
      "skills.s13": "<strong>Troubleshooting</strong><span>Support desk + field</span>",
      "skills.s14": "<strong>Git / GitHub</strong><span>Daily use, 18 repos</span>",
      "skills.s15": "<strong>VS Code</strong><span>Main editor</span>",
      "skills.s16": "<strong>Arduino (C++)</strong><span>Basic - ePiano firmware</span>",
      "skills.s17": "<strong>AI / ML fundamentals</strong><span>Learning - studying the basics on my own</span>",
      "skills.s18": "<strong>Kali Linux (VM)</strong><span>Learning - cybersecurity practice</span>",
      "exp.label": "Experience",
      "exp.h": "Where I have worked.",
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
      "edu.h": "Education",
      "edu.h1": "Higher Vocational - Microcomputer Systems and Networks",
      "edu.p1": "Systems administration, networks, and IT infrastructure at advanced vocational level. In progress.",
      "edu.h2": "Intermediate Vocational - Microcomputer Systems and Networks",
      "edu.p2": "Foundations in hardware, operating systems, office networks, and user support.",
      "edu.n": "What I am learning now",
      "edu.n1": "<strong>Systems administration</strong><span>Linux, virtualization, self-hosting</span>",
      "edu.n2": "<strong>Software development</strong><span>Deeper Java, more shipped code</span>",
      "edu.n3": "<strong>Networking & security basics</strong><span>Config now, hardening next</span>",
      "edu.n4": "<strong>AI and machine learning</strong><span>Studying the fundamentals</span>",
      "contact.label": "Contact",
      "contact.h": "Get in touch.",
      "contact.sub": "I am open to internships, junior IT roles, and collaborations. Email is the fastest way to reach me.",
      "contact.copy": "Copy email",
      "contact.wh": "What I can help with",
      "contact.w1h": "User support",
      "contact.w1d": "Troubleshooting and setup help for staff and users.",
      "contact.w2h": "PCs and systems",
      "contact.w2d": "Assembly, OS installs, maintenance, and repairs.",
      "contact.w3h": "Small networks",
      "contact.w3d": "IP, DHCP, and DNS setup plus troubleshooting.",
      "contact.w4h": "Simple websites",
      "contact.w4d": "Hand-built multi-page sites with HTML, CSS, and a little JavaScript.",
      "contact.cv": "Request CV",
      "contact.socialLabel": "Profiles",
      "footer.made": "© <span id=\"year\">2026</span> Saihajdeep Singh Kaur · Built by hand with HTML, CSS & JS",
      "footer.top": "Top",
      "footer.source": "Site source"
    },
    es: {
      "meta.title": "Saihajdeep Singh Kaur - Sistemas IT y Software",
      "meta.desc": "Portfolio de Saihajdeep Singh Kaur: técnico SMR. Sistemas IT, redes, soporte técnico, desarrollo Java y web, y mods de Minecraft. En España.",
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
      "hero.eyebrow": "IT y software en etapa inicial - España",
      "hero.lede": "Técnico SMR. Trabajo con <strong>sistemas, redes y software</strong>. Mantengo equipos y redes, programo en Java y desarrollo web, y publico mods de Minecraft que la gente descarga de verdad.",
      "hero.sub": "Estoy terminando el Grado Superior de Sistemas Microinformáticos y Redes. Mi objetivo es la administración de sistemas y el desarrollo de software.",
      "hero.cta1": "Ver proyectos",
      "hero.cta2": "Contacto",
      "hero.proofLabel": "Destacados",
      "hero.p1k": "Descargas en CurseForge",
      "hero.p2k": "Mods publicados",
      "hero.p3k": "Plataformas de mods",
      "hero.panelLabel": "Resumen del perfil",
      "hero.status": "abierto a oportunidades",
      "hero.r1k": "foco",
      "hero.r1v": "sysadmin · soporte · dev",
      "hero.r2k": "stack",
      "hero.r3k": "infra",
      "hero.r4k": "mods",
      "hero.r5k": "idiomas",
      "hero.note": "700 h de soporte técnico · 80 h de prácticas Erasmus en Bosch",
      "hero.tickerLabel": "Tecnologías",
      "copy.copy": "Copiar",
      "copy.done": "Copiado ✓",
      "about.label": "Sobre mí",
      "about.h": "Trabajo en soporte IT y programo.",
      "about.p1": "Estudio Sistemas Microinformáticos y Redes en el Institut Puig Castellar. Casi todo lo que sé viene de la práctica. He dado soporte a usuarios reales, he instalado y reparado equipos, y he configurado redes pequeñas.",
      "about.p2": "Fuera de clase programo. Creo mods de Minecraft en Java y he publicado dos en CurseForge. También creo sitios web desde cero con HTML, CSS y un poco de JavaScript. También me interesa la IA y el machine learning, y he empezado a estudiar los fundamentos por mi cuenta.",
      "about.p3": "También he empezado con los fundamentos de ciberseguridad, practicando con Kali Linux en una máquina virtual. Quiero entender cómo se ataca un sistema y cómo protegerlo. Encaja con el trabajo de soporte y redes que ya hago.",
      "about.p4": "Busco experiencia práctica en soporte IT, administración de sistemas o desarrollo de software junior.",
      "about.factsLabel": "Datos clave",
      "about.facts": "De un vistazo",
      "about.f1": "<span>Estudios</span>GS Sistemas Microinformáticos y Redes, Institut Puig Castellar",
      "about.f2": "<span>Experiencia</span>700 h soporte + 80 h Erasmus / Bosch",
      "about.f3": "<span>Creados</span>2 mods en CurseForge · varios sitios en GitHub Pages",
      "about.f4": "<span>Idiomas</span>EN C1 · ES B2 · CA B2 · Punjabi B2 · Hindi/Urdu C1",
      "about.f5": "<span>CV</span><a href=\"assets/cv.pdf\" target=\"_blank\" rel=\"noopener\">Solicitar CV (ver PDF)</a> · <a href=\"assets/cv.pdf\" download=\"Saihajdeep-Singh-Kaur-CV.pdf\">Descargar</a>",
      "projects.label": "Proyectos destacados",
      "projects.h": "Trabajo seleccionado.",
      "projects.sub": "Vienen de 18 repositorios públicos y 2 mods publicados. Los elegí por su contenido y relevancia.",
      "projects.techLabel": "Tecnologías",
      "projects.i1": "01 / Java · Mod de Forge",
      "projects.d1": "Un mod de administración de servidores para Minecraft Forge 1.21.1. Añade una capa de economía y herramientas de administración diaria. Incluye protección de chunks, utilidades de teletransporte y tiendas. Está construido con Gradle sobre el Forge MDK.",
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
      "projects.d3": "Un sitio web para un negocio pequeño, hecho a mano. Tiene páginas de inicio, menú, noticias, reservas, cómo llegar y empleo. Comparten hojas de estilo y un poco de JavaScript puro. Sin frameworks ni plantillas.",
      "projects.demo": "Demo en vivo",
      "projects.t3": "7 páginas · en vivo",
      "projects.m3": "menú · reservas · noticias · empleo",
      "projects.more": "También vale la pena ver",
      "projects.s1k": "Hardware + web",
      "projects.s1d": "Un proyecto en dos partes. Una es un sitio web de documentación y progreso. La otra es un firmware de Arduino de 55 KB para una interfaz de piano. El sitio está en vivo y ambas partes están en GitHub.",
      "projects.s1l": "<a href=\"https://github.com/SANDYINNIT/ePiano\" target=\"_blank\" rel=\"noopener\">Código web</a> <span aria-hidden=\"true\">·</span> <a href=\"https://github.com/SANDYINNIT/ePianoArduino\" target=\"_blank\" rel=\"noopener\">Código firmware</a> <span aria-hidden=\"true\">·</span> <a href=\"https://sandyinnit.github.io/ePiano/\" target=\"_blank\" rel=\"noopener\">Demo en vivo</a>",
      "projects.s2k": "Documentación de sistemas",
      "projects.s2h": "Manuales de laboratorio (self-hosting)",
      "projects.s2d": "Guías de instalación y configuración paso a paso de mis estudios. Cubren Nextcloud, ownCloud, WordPress y Moodle.",
      "projects.note": "Todo lo demás está en <a href=\"https://github.com/SANDYINNIT?tab=repositories\" target=\"_blank\" rel=\"noopener\">GitHub</a>. Casi todo son ejercicios iniciales. Lo mantengo público, pero no lo destaco aquí.",
      "skills.label": "Habilidades técnicas",
      "skills.h": "Habilidades, agrupadas por uso.",
      "skills.sub": "Todo esto está respaldado por mi CV o mis repositorios. No hay barras de porcentaje.",
      "skills.g1": "Programación",
      "skills.g2": "Desarrollo para Minecraft",
      "skills.g3": "Sistemas y redes",
      "skills.g4": "Soporte y herramientas",
      "skills.s01": "<strong>Java</strong><span>Práctico - dos mods publicados</span>",
      "skills.s02": "<strong>HTML / CSS</strong><span>Práctico - sitios de varias páginas</span>",
      "skills.s03": "<strong>JavaScript</strong><span>Básico - scripts pequeños</span>",
      "skills.s04": "<strong>MCFunction / JSON</strong><span>Aprendiendo - datapacks</span>",
      "skills.s05": "<strong>Forge + Gradle</strong><span>Práctico - Server Utils</span>",
      "skills.s06": "<strong>Fabric</strong><span>Práctico - backport publicado</span>",
      "skills.s07": "<strong>Origins API · datapacks</strong><span>Conocimiento funcional</span>",
      "skills.s08": "<strong>Publicación en CurseForge</strong><span>2 mods · 2,2 mil descargas</span>",
      "skills.s09": "<strong>Windows / Linux</strong><span>Instalación y configuración</span>",
      "skills.s10": "<strong>VirtualBox / VMware</strong><span>Clase y laboratorios</span>",
      "skills.s11": "<strong>IP · DHCP · DNS · routers</strong><span>Configuración intermedia</span>",
      "skills.s12": "<strong>Montaje y reparación de PC</strong><span>Práctica, 700 h</span>",
      "skills.s13": "<strong>Resolución de problemas</strong><span>Soporte directo y en sitio</span>",
      "skills.s14": "<strong>Git / GitHub</strong><span>Uso diario, 18 repos</span>",
      "skills.s15": "<strong>VS Code</strong><span>Editor principal</span>",
      "skills.s16": "<strong>Arduino (C++)</strong><span>Básico - firmware ePiano</span>",
      "skills.s17": "<strong>Fundamentos de IA / ML</strong><span>Aprendiendo - bases por mi cuenta</span>",
      "skills.s18": "<strong>Kali Linux (VM)</strong><span>Aprendiendo - práctica de ciberseguridad</span>",
      "exp.label": "Experiencia",
      "exp.h": "Dónde he trabajado.",
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
      "edu.h": "Formación",
      "edu.h1": "Grado Superior - Sistemas Microinformáticos y Redes",
      "edu.p1": "Administración de sistemas, redes e infraestructura IT a nivel avanzado. En curso.",
      "edu.h2": "Grado Medio - Sistemas Microinformáticos y Redes",
      "edu.p2": "Bases de hardware, sistemas operativos, redes de oficina y soporte a usuarios.",
      "edu.n": "Lo que aprendo ahora",
      "edu.n1": "<strong>Administración de sistemas</strong><span>Linux, virtualización, self-hosting</span>",
      "edu.n2": "<strong>Desarrollo de software</strong><span>Más Java y más código publicado</span>",
      "edu.n3": "<strong>Redes y bases de seguridad</strong><span>Configurar ahora, proteger después</span>",
      "edu.n4": "<strong>IA y machine learning</strong><span>Estudiando los fundamentos</span>",
      "contact.label": "Contacto",
      "contact.h": "Escríbeme.",
      "contact.sub": "Estoy abierto a prácticas, puestos IT junior y colaboraciones. El correo es la vía más rápida.",
      "contact.copy": "Copiar correo",
      "contact.wh": "En qué puedo ayudar",
      "contact.w1h": "Soporte a usuarios",
      "contact.w1d": "Ayuda con problemas y equipos para personal y usuarios.",
      "contact.w2h": "Equipos y sistemas",
      "contact.w2d": "Montaje, instalación de sistemas operativos, mantenimiento y reparaciones.",
      "contact.w3h": "Redes pequeñas",
      "contact.w3d": "Configuración de IP, DHCP y DNS, más resolución de problemas.",
      "contact.w4h": "Sitios web sencillos",
      "contact.w4d": "Sitios de varias páginas hechos a mano con HTML, CSS y un poco de JavaScript.",
      "contact.cv": "Solicitar CV",
      "contact.socialLabel": "Perfiles",
      "footer.made": "© <span id=\"year\">2026</span> Saihajdeep Singh Kaur · Hecho a mano con HTML, CSS y JS",
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

  /* ---- language dropdown open/close. closes on outside click and Escape ---- */
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

  /* theme toggle. remembers your pick in localStorage, dark by default */
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

  /* phone menu open/close. labels switch language too */
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

  /* fades sections in as you scroll. if it ever looks broken, check .reveal in the css first */
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

  /* highlights whichever nav link matches the section you're reading */
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

  /* copy-email button. tries the clipboard API, falls back to the old textarea trick */
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

  /* footer year, so I never have to update it by hand */
  function syncYear() {
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  /* run the stored language on load. english unless you picked spanish before */
  applyLang(currentLang);
})();
