import Col from 'react-bootstrap/Col';

const Project = ({ project }) => {
  return (
    <Col xs={12} md={6}>
      <div className="project-entry" id={project.id} style={{backgroundImage: `url(${project.imgLink})`}}>
        <div>
          <a href={project.link}>
            <h5>{project.title}</h5>
            <h6>{project.subtitle}</h6>
          </a>
          <a href={project.github}>Link to Github</a>
        </div>
      </div>
    </Col>
  );
}
export default Project;