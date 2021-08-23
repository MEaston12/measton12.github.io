import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Footer = () => (<>
  <div style={{'height':'41px'}}></div>
  <Navbar fixed='bottom' bg='light'>
    <Container>
      <h3>Media</h3>
    </Container>
  </Navbar>
</>);
export default Footer;