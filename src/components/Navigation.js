import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => (
  <Navbar className='navbar-back' fixed="top" expand='md' variant="dark">
    <Container>
      <div>
        <Link to="/" className="navbar-brand navbar-logo"></Link>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/sobre" className="nav-link">Sobre</Link>
          <Link to="/servicos" className="nav-link">Serviços</Link>
          <Link to="/preco" className="nav-link">Preços</Link>
          <Link to="/contato" className="nav-link">Contato</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
