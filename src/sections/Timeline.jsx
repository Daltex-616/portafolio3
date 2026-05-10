import { Container } from 'react-bootstrap';
import { experiencia } from '../data/data';

const Timeline = () => (
  <section className="full-section bg-white">
    <Container>
      <h2 className="display-4 fw-bold text-center mb-5">Trayectoria Profesional</h2>
      <div className="timeline-container mx-auto" style={{maxWidth: '800px'}}>
        {experiencia.map((e, i) => (
          <div key={i} className="mb-5 border-start border-primary ps-4 position-relative">
            <div className="timeline-dot"></div>
            <h4 className="fw-bold text-primary">{e.periodo}</h4>
            <h3 className="fw-bold">{e.cargo}</h3>
            <p className="text-muted fs-5">{e.descripcion}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Timeline;