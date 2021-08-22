import Bav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

const Nav = () => {
  const path = window.location.pathname;
  return (
    <Navbar sticky="top" bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand>Malcolm Easton</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Bav className="me-auto">
            <Bav.Link as={Link} to="/about" className={(path === '/about' || path === '/') && 'active'}>About</Bav.Link>
            <Bav.Link as={Link} to="/contact" className={path === '/contact' && 'active'}>Contact</Bav.Link>
            <Bav.Link as={Link} to="/portfolio" className={path === '/portfolio' && 'active'}>Portfolio</Bav.Link>
            <Bav.Link as={Link} to="/resume" className={path === '/resume' && 'active'}>Resume</Bav.Link>
          </Bav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;