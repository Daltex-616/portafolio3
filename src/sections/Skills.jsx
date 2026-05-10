import { Container, Row, Col } from 'react-bootstrap';
import { skills } from '../data/data';

const Skills = () => (
  <section id="habilidades" className="full-section bg-white">
    <Container>
      <h2 className="display-4 fw-bold text-center mb-5">Habilidades Técnicas</h2>
      <Row className="g-4">
        {skills.map((s, idx) => (
          <Col key={idx} md={4}>
            <div className="skill-box text-center shadow-sm">
              <div className="display-4 mb-3">{s.icon}</div>
              <h3 className="fw-bold">{s.categoria}</h3>
              <hr className="w-25 mx-auto text-primary" />
              <ul className="list-unstyled mt-3 h5 text-muted">
                {s.items.map((item, i) => (
                  <li key={i} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Skills;