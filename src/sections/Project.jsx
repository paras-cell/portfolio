import ProjectCard from "../project-card";
import "./css/project.css"

function Projects() {
  return (
    <section className="my-project">
      <h1 className="auto-show-d section-title">My PROJECT</h1>

      <ProjectCard
        imgSrc="/project1.png"
        site="https://ecommerce-fullstack-frontend-tua5.onrender.com"
        git ="https://github.com/paras-cell/ecommerce-fullstack"
        projectName="E-COMMERCE Website"
        description="A fully responsive and user-friendly e-commerce platform that allows users to browse products, add items to the cart, and securely checkout."
      />

      <ProjectCard
        imgSrc="/portfolio.png"
        site="https://portfolio-paras-web.onrender.com"
        git ="https://github.com/paras-cell/portfolio.git"
        projectName="Modern Portfolio Website"
        description="A sleek and modern portfolio designed to showcase personal projects, skills, and experience with interactive elements and smooth navigation."
      />

      <ProjectCard
        imgSrc="/project3.png"
        site="https://ai-assistant-frontend-1uuh.onrender.com"
        git ="https://github.com/paras-cell/AI-assistant-.git"
        projectName="AI Assistant"
        description="An AI-powered assistant that helps users manage tasks, answer queries, and automate routine actions using natural language processing."
      />
    </section>
  );
}

export default Projects;
