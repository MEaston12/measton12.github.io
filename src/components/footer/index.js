import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => (<>
  <div style={{'height':'41px'}}></div>
  <Navbar fixed='bottom' bg='light'>
    <Container>
      <h4>Github <a target="_blank" href='https://github.com/MEaston12'>MEaston12</a></h4>
      <h4><a target="_blank" href='https://www.linkedin.com/in/malcolm-easton-67377896/'>My LinkedIn</a></h4>
      <h4><a target="_blank" href='https://stackoverflow.com/users/15311882/malcolm-easton'>My StackOverflow</a></h4>
    </Container>
  </Navbar>
</>);
export default Footer;