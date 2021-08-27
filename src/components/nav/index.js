import Bav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
  const location = useLocation().pathname.substr(1);
  return (
    <Navbar sticky="top" bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand>Malcolm Easton</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Bav className="me-auto">
            <Bav.Link as={Link} to="/about" className={(location === 'about' || location === '') && 'active'}>About</Bav.Link>
            <Bav.Link as={Link} to="/contact" className={location === 'contact' && 'active'}>Contact</Bav.Link>
            <Bav.Link as={Link} to="/portfolio" className={location === 'portfolio' && 'active'}>Portfolio</Bav.Link>
            <Bav.Link as={Link} to="/resume" className={location === 'resume' && 'active'}>Resume</Bav.Link>
          </Bav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;