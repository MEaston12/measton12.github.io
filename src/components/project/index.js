import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Project = ({ project }) => {
  console.log(project);
  return (
    <Col xs={12} md={6}>
      <div className="project-entry nav-target mb-4" id={project.id} style={{backgroundImage: `url(${project.imgLink})`}}>
        <div className="project-textbox">
          <a href={project.link}>
            <h3>{project.title}</h3>
            <h4>{project.subtitle}</h4>
          </a>
          <a href={project.github}>Link to Github</a>
        </div>
      </div>
    </Col>
  );
}
export default Project;