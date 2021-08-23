import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Project from '../components/project';
import myProjects from '../data/myProjects';

const Portfolio = () => (<>
  <Row>
    <h1>Portfolio</h1>
  </Row>
  <Row>
    {myProjects.map(project => <Project project={project}/>)}
  </Row> 
</>);

export default Portfolio;