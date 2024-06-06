import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  const [activeLink, setActiveLink] = useState('home');
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src='' alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <span className="navbar-toggler-icon"></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>

          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img /></a>
              <a href="#"><img /></a>
              <a href="#"><img /></a>
            </div>
            <button className="sample" onClick={() => console.log("button clicked!")}>Contact Me</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;