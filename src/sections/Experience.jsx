import "./css/about.css";
import "./css/base.css";

function Experience() {
  return (
    <div className="info-section">
      <h1 className="auto-show-d section-title">EXPERIENCE & EDUCATION</h1>
      <div className="info-cards">
        <div className="auto-comeleft card">
          <h1>Frontend Developer</h1>
          <h3>Self-Taught & Projects</h3>
          <p>
            Developed numerous modern, responsive web applications utilizing React, HTML, CSS, JavaScript, and various modern libraries. Focused on building high-performance, accessible, and interactive user interfaces.
          </p>
        </div>

        <div className="auto-show-d card">
          <h1>Java & DSA Training</h1>
          <h3>Completed Coursework</h3>
          <p>
            Mastered core programming concepts through comprehensive coursework in Java and Data Structures & Algorithms. Applied these concepts to build logical foundations for complex problem solving.
          </p>
        </div>

        <div className="auto-comeright card">
          <h1>Freelance Web Designer</h1>
          <h3>Ongoing</h3>
          <p>
            Designing and developing portfolio sites and landing pages. Specialized in creating beautiful, smooth animations and integrating interactive 3D elements like Spline to deliver premium user experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
