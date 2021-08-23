import Bav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
  const [activePath, changeActivePath] = useState('/');

  const updateActivePath = event => {
    changeActivePath(event.target.id);
  }

  return (
    <Navbar sticky="top" bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand>Malcolm Easton</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Bav className="me-auto">
            <Bav.Link as={Link} to="/about" id='about' onClick={updateActivePath} className={(activePath === 'about' || activePath === '/') && 'active'}>About</Bav.Link>
            <Bav.Link as={Link} to="/contact" id='contact' onClick={updateActivePath} className={activePath === 'contact' && 'active'}>Contact</Bav.Link>
            <Bav.Link as={Link} to="/portfolio" id='portfolio' onClick={updateActivePath} className={activePath === 'portfolio' && 'active'}>Portfolio</Bav.Link>
            <Bav.Link as={Link} to="/resume" id='resume' onClick={updateActivePath} className={activePath === 'resume' && 'active'}>Resume</Bav.Link>
          </Bav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;