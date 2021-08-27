import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => (<>
  <div style={{'height':'41px'}}></div>
  <Navbar fixed='bottom' bg='dark'>
    <Container>
      <h4><a target="_blank" href='https://github.com/MEaston12'>Github</a></h4>
      <h4><a target="_blank" href='https://www.linkedin.com/in/malcolm-easton-67377896/'>LinkedIn</a></h4>
      <h4><a target="_blank" href='https://stackoverflow.com/users/15311882/malcolm-easton'>StackOverflow</a></h4>
    </Container>
  </Navbar>
</>);
export default Footer;