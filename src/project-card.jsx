import "./sections/css/project.css"
function ProjectCard({site, git,imgSrc, projectName, highlightText, description}) {
  return (
    <div className="project-card">
      <div className="project-vidbox">
        <img src={imgSrc} />
      </div>
      <div className="auto-comeleft project-info">
        <h1>
          {projectName.split(highlightText)[0]}
          {projectName.split(highlightText)[1]}
        </h1>
        <p>{description}</p>
        <div style={{display:"flex",gap:"25px"}}>
        <a href={git} target="_blank">
          <button>
            <i className="bx bx-link-external"></i> Deploy
          </button>
        </a>
        <a href={site} target="_blank">
          <button>
            <i className="bx bx-link-external"></i> GitHub
          </button>
        </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
