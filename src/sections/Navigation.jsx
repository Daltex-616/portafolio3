import { Navbar, Nav, Container } from 'react-bootstrap';
import { personalInfo } from '../data/data';

const Navigation = () => (
  <Navbar variant="dark" expand="lg" sticky="top" className="custom-nav px-4">
    <Container>
      <Navbar.Brand href="#home" className="fw-bold tracking-widest">
        {personalInfo.nombre}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="nav-menu" />
      <Navbar.Collapse id="nav-menu">
        <Nav className="ms-auto text-uppercase small fw-bold">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#proyectos">Proyectos</Nav.Link>
          <Nav.Link href="#habilidades">Habilidades</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;