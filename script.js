// Textos en ambos idiomas. Para cambiar un texto, edítalo aquí.
const translations = {
  es: {
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.hello": "Hola, soy",
    "hero.role": "Project Manager y estudiante de Desarrollo",
    "hero.lead": "Combino la gestión de proyectos con el desarrollo web: organizo equipos y plazos, y ahora también construyo las soluciones.",
    "hero.cta": "Ver proyectos",
    "hero.contact": "Contactar",
    "about.title": "Sobre mí",
    "about.p1": "Trabajo como Project Manager, coordinando personas, prioridades y entregas. Esa experiencia me ha llevado a querer entender a fondo cómo se construye el software, así que estoy formándome en Desarrollo de Aplicaciones Web.",
    "about.p2": "Mi objetivo es unir los dos mundos: hablar el idioma del negocio y el del código para que los proyectos lleguen a buen puerto.",
    "skills.title": "Habilidades",
    "skills.pm.title": "Gestión de proyectos",
    "skills.pm.1": "Planificación",
    "skills.pm.2": "Coordinación de equipos",
    "skills.pm.3": "Seguimiento de plazos",
    "skills.pm.4": "Comunicación con clientes",
    "skills.dev.title": "Desarrollo",
    "projects.title": "Proyectos",
    "projects.badge": "En curso",
    "projects.p1.title": "Este portfolio",
    "projects.p1.desc": "Web personal bilingüe hecha con HTML, CSS y JavaScript, sin frameworks, y publicada en GitHub Pages.",
    "projects.soon.title": "Próximamente",
    "projects.soon.desc": "Estoy trabajando en nuevos proyectos. Vuelve pronto o sígueme en GitHub para verlos.",
    "contact.title": "Contacto",
    "contact.text": "¿Quieres hablar de un proyecto o simplemente saludar? Encuéntrame aquí:",
    "footer.made": "Hecho con HTML, CSS y JavaScript",
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.hello": "Hi, I'm",
    "hero.role": "Project Manager and Development student",
    "hero.lead": "I combine project management with web development: I organise teams and deadlines, and now I also build the solutions.",
    "hero.cta": "See projects",
    "hero.contact": "Get in touch",
    "about.title": "About me",
    "about.p1": "I work as a Project Manager, coordinating people, priorities and deliveries. That experience made me want to understand in depth how software is built, so I'm studying Web Application Development.",
    "about.p2": "My goal is to bridge both worlds: speaking the language of business and the language of code so projects reach a successful finish.",
    "skills.title": "Skills",
    "skills.pm.title": "Project management",
    "skills.pm.1": "Planning",
    "skills.pm.2": "Team coordination",
    "skills.pm.3": "Deadline tracking",
    "skills.pm.4": "Client communication",
    "skills.dev.title": "Development",
    "projects.title": "Projects",
    "projects.badge": "In progress",
    "projects.p1.title": "This portfolio",
    "projects.p1.desc": "A bilingual personal website built with plain HTML, CSS and JavaScript, no frameworks, and hosted on GitHub Pages.",
    "projects.soon.title": "Coming soon",
    "projects.soon.desc": "I'm working on new projects. Check back soon or follow me on GitHub to see them.",
    "contact.title": "Contact",
    "contact.text": "Want to talk about a project or just say hi? Find me here:",
    "footer.made": "Built with HTML, CSS and JavaScript",
  },
};

const toggle = document.getElementById("lang-toggle");

function setLanguage(lang) {
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text) el.textContent = text;
  });
  document.documentElement.lang = lang;
  // El botón muestra el idioma al que se cambiará
  toggle.textContent = lang === "es" ? "EN" : "ES";
  localStorage.setItem("lang", lang);
}

// Idioma inicial: el guardado, o el del navegador, o español
const saved = localStorage.getItem("lang");
const browser = navigator.language.startsWith("es") ? "es" : "en";
setLanguage(saved || browser);

toggle.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "es" ? "en" : "es");
});

document.getElementById("year").textContent = new Date().getFullYear();
