import ProjectCard from "../project-card";
import "./css/project.css";

function Projects() {
  return (
    <section className="projects-wrapper" id="projects">
      <h1 className="auto-show-d projects-main-title">SELECTED PROJECTS</h1>
      
      <div className="projects-container">
        <ProjectCard
          imgSrc="/project1.png"
          site="https://ecommerce-fullstack-frontend-tua5.onrender.com"
          git="https://github.com/paras-cell/ecommerce-fullstack"
          projectName="E-COMMERCE Platform"
          description="A sophisticated MERN stack application featuring real-time inventory, secure payments (Stripe), and a high-performance administrative dashboard."
        />

        <ProjectCard
          imgSrc="/portfolio.png"
          site="https://portfolio-paras-web.onrender.com"
          git="https://github.com/paras-cell/portfolio.git"
          projectName="Modern Portfolio"
          description="A high-end personal showcase built with React and Spline 3D, focused on smooth navigation and premium digital storytelling."
        />

        <ProjectCard
          imgSrc="/project3.png"
          site="https://ai-assistant-frontend-1uuh.onrender.com"
          git="https://github.com/paras-cell/AI-assistant-.git"
          projectName="AI Assistant Hub"
          description="An intelligent workflow optimizer leveraging NLP models to automate routine tasks and provide data-driven insights in real-time."
        />
      </div>
    </section>
  );
}

export default Projects;
