import { Container, Row, Col } from 'react-bootstrap';
import { metodologia } from '../data/data';

const Methodology = () => (
  <section className="full-section bg-light border-top">
    <Container>
      <h2 className="display-4 fw-bold text-center mb-5 text-uppercase">Cómo Trabajo</h2>
      <Row>
        {metodologia.map((m, i) => (
          <Col md={4} key={i} className="mb-4">
            <div className="p-4 bg-white rounded-4 shadow-sm border-start border-primary border-4 h-100">
              <span className="display-6 fw-bold text-primary opacity-50">{m.paso}</span>
              <h3 className="fw-bold mt-2">{m.titulo}</h3>
              <p className="text-muted">{m.desc}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Methodology;