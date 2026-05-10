import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { proyectos } from '../data/data';

const Muestrario = () => {
  return (
    <Container className="py-5" id="proyectos">
      <h2 className="text-center mb-5">Mis Proyectos</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {proyectos.map((proyecto) => (
          <Col key={proyecto.id}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{proyecto.nombre}</Card.Title>
                <Card.Text>{proyecto.descripcion}</Card.Text>
                <div className="mb-3">
                  {proyecto.tecnologias.map((tech, index) => (
                    <Badge bg="dark" className="me-1" key={index}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button variant="primary" href={proyecto.github} target="_blank" className="me-2">
                    GitHub
                  </Button>
                  {proyecto.demo !== "#" && (
                    <Button variant="outline-secondary" href={proyecto.demo} target="_blank">
                      Demo
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Muestrario;