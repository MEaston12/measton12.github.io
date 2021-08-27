import Row from 'react-bootstrap/Row';

import Project from '../components/project';
import myProjects from '../data/myProjects';

const Portfolio = () => {
  let i = 0; //Unique Indices
  return(<>
    <Row>
      <h1>Portfolio</h1>
    </Row>
    <Row>
      {myProjects.map(project => <Project key={i++} project={project}/>)}
    </Row> 
  </>);
}

export default Portfolio;