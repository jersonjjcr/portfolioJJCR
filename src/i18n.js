import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      hello: "Hola, soy Jerson",
      dev: "Desarrollador Web",
      about: "Sobre mí",
      aboutText: "¡Hola! Soy Jerson, desarrollador web Full Stack con muchas ganas de seguir creando y aprendiendo. Me gusta trabajar en proyectos donde pueda combinar el lado visual del frontend con la lógica del backend, usando tecnologías como React, Vite, Node.js y PostgreSQL.",
      skills: "Habilidades",
      softskills: "Habilidades Blandas",
      projects: "Proyectos",
      project1: "Cafélado",
      project1Desc: "Cafélado es una marca que fusiona el sabor intenso del café con la frescura de los granizados, ofreciendo una experiencia única para los amantes del café. El proyecto incluye una landing page desarrollada con React y Vite, con diseño responsive, menú visual con precios, identidad visual personalizada y un botón flotante de contacto por WhatsApp.",
      project2: "HMI Turbina de Arquímedes",
      project2Desc: "HMI Turbina de Arquímedes es una interfaz desarrollada para visualizar en tiempo real el funcionamiento de un sistema de generación de energía a partir de una turbina de Arquímedes. Esta HMI fue construida con React, ofreciendo una visual moderna, responsive y dinámica que muestra datos clave como voltaje, corriente, potencia y frecuencia, facilitando el monitoreo del sistema energético a través de una plataforma web intuitiva y accesible.",
      project3: "The Smash Room",
      project3Desc: "The Smash Room es una landing page diseñada para una marca de hamburguesas estilo smash, con una identidad visual llamativa y moderna. Desarrollada con React y Vite, la página presenta un menú con imágenes, precios organizados en una tabla, diseño responsive y un botón flotante de contacto por WhatsApp, ofreciendo una experiencia atractiva y funcional tanto en móviles como en escritorio.",
      cv: "Ver CV",
      contact: "Contacto",
      available: "Disponible para proyectos",
      communication: "Comunicación efectiva",
      teamwork: "Trabajo en equipo",
      problem: "Resolución de problemas",
      creativity: "Creatividad",
      learning: "Aprendizaje continuo",
      empathy: "Empatía",
      adaptability: "Adaptabilidad",
      time: "Gestión del tiempo",
      detail: "Atención al detalle",
      express: "Express",
      postgresql: "PostgreSQL",
      typeorm: "TypeORM",
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
      react: "React",
      vite: "Vite",
      node: "Node.js",
      git: "Git",
      github: "GitHub"
    }
  },
  en: {
    translation: {
      hello: "Hi, I'm Jerson",
      dev: "Web Developer",
      about: "About me",
      aboutText: "Hello! I'm Jerson, a Full Stack web developer eager to keep creating and learning. I enjoy working on projects where I can combine the visual side of the frontend with backend logic, using technologies like React, Vite, Node.js, and PostgreSQL.",
      skills: "Skills",
      softskills: "Soft Skills",
      projects: "Projects",
      project1: "Cafélado",
      project1Desc: "Cafélado is a brand that fuses the intense flavor of coffee with the freshness of granitas, offering a unique experience for coffee lovers. The project includes a landing page developed with React and Vite, featuring responsive design, a visual menu with prices, custom visual identity, and a floating WhatsApp contact button.",
      project2: "HMI Archimedes Turbine",
      project2Desc: "HMI Archimedes Turbine is an interface developed to visualize in real time the operation of an energy generation system based on an Archimedes turbine. This HMI was built with React, offering a modern, responsive, and dynamic look that displays key data such as voltage, current, power, and frequency, making it easy to monitor the energy system through an intuitive and accessible web platform.",
      project3: "The Smash Room",
      project3Desc: "The Smash Room is a landing page designed for a smash-style burger brand, with a striking and modern visual identity. Developed with React and Vite, the page features a menu with images, prices organized in a table, responsive design, and a floating WhatsApp contact button, offering an attractive and functional experience on both mobile and desktop.",
      cv: "View CV",
      contact: "Contact",
      available: "Available for projects",
      communication: "Effective communication",
      teamwork: "Teamwork",
      problem: "Problem solving",
      creativity: "Creativity",
      learning: "Continuous learning",
      empathy: "Empathy",
      adaptability: "Adaptability",
      time: "Time management",
      detail: "Attention to detail",
      express: "Express",
      postgresql: "PostgreSQL",
      typeorm: "TypeORM",
      html: "HTML",
      css: "CSS",
      javascript: "JavaScript",
      react: "React",
      vite: "Vite",
      node: "Node.js",
      git: "Git",
      github: "GitHub"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;