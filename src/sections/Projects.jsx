import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { proyectos } from '../data/data';

const ProjectCard = ({ p }) => (
  <Col xs={12} md={6} lg={4}>
    <Card className="h-100 project-card border-0 shadow-lg overflow-hidden">
      {/* Imagen del Proyecto */}
      <div className="card-img-container">
        <Card.Img 
          variant="top" 
          src={p.imagen} 
          alt={p.titulo}
          className="project-image"
        />
      </div>
      
      <Card.Body className="p-4 d-flex flex-column">
        <Card.Title className="h4 fw-bold mb-2 text-dark">{p.titulo}</Card.Title>
        <Card.Text className="text-muted mb-4 small">
          {p.descripcion}
        </Card.Text>
        
        <div className="mt-auto">
          
          <hr className="opacity-10" />
          <div className="d-flex gap-2 mt-3">
            <Button variant="outline-primary" href={p.demo} target="_blank" className="flex-grow-1 rounded-pill">
              Vista previa
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  </Col>
);

const Projects = () => (
  <section id="proyectos" className="full-section bg-light py-5">
    <Container fluid className="px-5">
      <div className="text-center mb-5">
        <h2 className="display-3 fw-bold mb-3">MUESTRARIO</h2>
        <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
          Selección de aplicaciones y sistemas desarrollados de forma freelance y corporativa.
        </p>
      </div>
      <Row className="g-4">
        {proyectos.map((p) => <ProjectCard key={p.id} p={p} />)}
      </Row>
    </Container>
  </section>
);

export default Projects;