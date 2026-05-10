import { Container, Button } from 'react-bootstrap';
import { personalInfo } from '../data/data';

const Hero = () => (
  <header id="home" className="hero-full text-center">
    <Container>
      <div className="mb-4">
        <div className="bg-primary rounded-circle d-inline-block p-3 mb-3 shadow">
          <span className="h3 text-white">FZ</span>
        </div>
      </div>
      <h1 className="display-1 fw-bold mb-3 ls-tight">{personalInfo.nombre}</h1>
      <p className="h3 fw-light text-secondary mb-4">{personalInfo.rol}</p>
      <p className="lead mx-auto" style={{ maxWidth: '700px' }}>{personalInfo.frase}</p>
      <div className="mt-5 d-flex justify-content-center gap-3">
        <Button variant="primary" size="lg" href="#proyectos" className="px-5 py-3 rounded-pill">
          Ver Proyectos
        </Button>
        <Button variant="outline-light" size="lg" href="#contacto" className="px-5 py-3 rounded-pill">
          Hablemos
        </Button>
      </div>
    </Container>
  </header>
);

export default Hero;