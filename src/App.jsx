import React from 'react';

// Importación de Secciones
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Methodology from './sections/Methodology';
import Timeline from './sections/Timeline';
import Contact from './sections/Contact';

// Importación de Componentes Globales
import WhatsAppBtn from './components/WhatsAppBtn';

// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/**
 * App Component
 * Orquestador principal del portafolio de Federico Zamora.
 * Estructurado para resaltar la experiencia Full-Stack y Freelance.
 */
function App() {
  return (
    <div className="main-wrapper">
      {/* Barra de navegación superior (Sticky) */}
      <Navigation />

      <main>
        {/* Presentación principal (Hero) */}
        <Hero />

        {/* Muestrario de Proyectos (Cards) */}
        <Projects />

        {/* Listado de Habilidades Técnicas */}
        <Skills />

        {/* Explicación del proceso de trabajo */}
        <Methodology />

        {/* Trayectoria: Astral Analytic y Freelance */}
        <Timeline />

        {/* Formulario y enlaces de contacto */}
        <Contact />
      </main>
    </div>
  );
}

export default App;