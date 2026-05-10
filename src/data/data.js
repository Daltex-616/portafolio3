export const personalInfo = {
  nombre: "FEDERICO ZAMORA",
  rol: "Software Developer | Full-Stack & Automation",
  frase: "Transformando ideas en código eficiente y soluciones automatizadas.",
};

export const proyectos = [
  {
    id: 1,
    titulo: "Luxury landing page",
    descripcion: "Paguina optimizada y con estetica premiun para trasporte",
    tech: ["Python", "PySide6", "SQLite"],
    imagen: "/images/luxury.png", // Ruta a tu imagen
    github: "https://github.com/federiconzamora-",
    demo: "https://luxurytransfer.com.ar/"
  },
  {
    id: 2,
    titulo: "Nexo libreria",
    descripcion: "Juego multijugador a pedido basado en wordle",
    tech: ["Java", "Spring Boot", "React", "Docker"],
    imagen: "/images/nexolibreria.png",
    demo: "https://nexolibreria.netlify.app/"
  },
  {
    id: 3,
    titulo: "vogues studio",
    descripcion: "Pagina de ropa",
    tech: ["Java", "Spring Boot", "React", "Docker"],
    imagen: "/images/ropa.png",
    demo: "https://voguestudiolr.netlify.app/"
  },
  {
    id: 4,
    titulo: "Umamusume Wordle",
    descripcion: "Juego multijugador a pedido basado en wordle",
    tech: ["Java", "Spring Boot", "React", "Docker"],
    imagen: "/images/umamusume.png",
    demo: "https://umamusume-wordle.web.app/"
  },
  {
    id: 5,
    titulo: "ferreteria ",
    descripcion: "Juego multijugador a pedido basado en wordle",
    tech: ["Java", "Spring Boot", "React", "Docker"],
    imagen: "/images/",
    demo: "https://umamusume-wordle.web.app/"
  }
];

export const skills = [
  { categoria: "Frontend", items: ["React", "JavaScript", "Bootstrap"], icon: "🌐" },
  { categoria: "Backend", items: ["Java", "Node.js", "Python"], icon: "⚙️" },
  { categoria: "Herramientas", items: ["Docker", "SQL", "Prompt Engineering"], icon: "🛠️" }
];
export const experiencia = [
  {
    periodo: "2024 - Actualidad",
    cargo: "Freelance Web Developer",
    descripcion: "Desarrollo independiente de soluciones web personalizadas y sistemas a medida."
  }
];

export const metodologia = [
  { paso: "01", titulo: "Análisis", desc: "Reunión inicial para entender el problema y definir requerimientos técnicos." },
  { paso: "02", titulo: "Desarrollo Ágil", desc: "Codificación con entregas incrementales para feedback constante del cliente." },
  { paso: "03", titulo: "Despliegue", desc: "Implementación en entornos seguros mediante Docker y control de calidad." }
];