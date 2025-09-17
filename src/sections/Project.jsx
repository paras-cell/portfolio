import ProjectCard from "../project-card";
import "./css/project.css"

function Projects() {
  return (
    <section className="my-project">
      <h1 className="auto-show-d section-title">My PROJECT</h1>

      <ProjectCard
        imgSrc="/project1.png"
        git ="https://github.com/paras-cell/ecommerce-fullstack"
        projectName="E-COMMERCE Website"
        description="A fully responsive and user-friendly e-commerce platform that allows users to browse products, add items to the cart, and securely checkout."
      />

      <ProjectCard
        imgSrc="/portfolio.png"
        git ="https://github.com/paras-cell/ecommerce-fullstack"
        projectName="Modern Portfolio Website"
        description="A sleek and modern portfolio designed to showcase personal projects, skills, and experience with interactive elements and smooth navigation."
      />

      <ProjectCard
        imgSrc="/project3.png"
        git ="https://github.com/paras-cell/ecommerce-fullstack"
        projectName="AI Assistant"
        description="An AI-powered assistant that helps users manage tasks, answer queries, and automate routine actions using natural language processing."
      />
    </section>
  );
}

export default Projects;
