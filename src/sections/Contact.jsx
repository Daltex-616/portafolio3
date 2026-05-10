import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/data';

const Contact = () => {
  return (
    <footer id="contacto" className="contact-footer py-5">
      <Container className="py-5">
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h2 className="display-1 fw-bold text-white mb-4 ls-tight">
              ¿LISTO PARA <span className="text-primary">INNOVAR?</span>
            </h2>
            <p className="h3 fw-light text-secondary mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              Disponible para proyectos freelance y soluciones de automatización de alto impacto.
            </p>
            
            {/* Contenedor de Redes con estilo de botones minimalistas */}
            <div className="d-flex flex-wrap justify-content-center gap-4 mt-2">
              <a href="https://www.linkedin.com/in/federiconzamora-/" 
                 target="_blank" rel="noreferrer"
                 className="contact-link linkedin shadow-sm">
                <FaLinkedin className="me-2" /> LinkedIn
              </a>
              
              <a href={`mailto:${personalInfo.email || 'federicozamora616@gmail.com'}`}
                 className="contact-link email shadow-sm">
                <FaEnvelope className="me-2" /> Email
              </a>
            </div>
          </Col>
        </Row>

        {/* Footer Inferior */}
        <div className="text-center mt-5 pt-5 border-top border-secondary opacity-50">
          <p className="small text-muted text-uppercase tracking-widest">
            &copy; {new Date().getFullYear()} {personalInfo.nombre} — Full-Stack Developer
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Contact;