import "./sections/css/project.css";

function ProjectCard({ imgSrc, site, git, projectName, description }) {
  return (
    <div className="project-display-card">
      <div className="project-visual-box">
        <img src={imgSrc} alt={projectName} />
      </div>
      <div className="auto-comeleft project-details">
        <h1>{projectName}</h1>
        <p>{description}</p>
        <div className="project-actions">
          <a href={site} target="_blank" rel="noopener noreferrer" className="project-link-btn">
            <i className="bx bx-link-external"></i> Deploy
          </a>
          <a href={git} target="_blank" rel="noopener noreferrer" className="project-link-btn outline">
             <i className="bx bxl-github"></i> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
