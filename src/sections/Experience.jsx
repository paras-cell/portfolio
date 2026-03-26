import "./css/experience.css";

function Experience() {
  return (
    <section className="experience-section">
      <h1 className="auto-show-d experience-title">
        EXPERIENCE & EDUCATION
      </h1>

      <div className="experience-grid">

        {/* 🔥 CARD 1 */}
        <div className="auto-comeleft experience-card">
          <div
            className="experience-card-bg"
            style={{ backgroundImage: "url('./backoff.png')" }}
          ></div>

          <div className="experience-card-content">
            <span className="tag">Internship</span>
            <h3>Aug 2023 - Present</h3>
            <h2>MERN Stack Developer</h2>
            <p>
              Working on scalable enterprise applications at SoftSensor.ai.
              Implemented features, fixed bugs, and optimized performance.
            </p>
            <div className="tech-tags">
              <span>React</span>
              <span>Node</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>

        {/* 🔥 CARD 2 */}
        <div className="auto-show-d experience-card">
          <div
            className="experience-card-bg"
            style={{ backgroundImage: "url('./uiuxl.png')" }}
          ></div>

          <div className="experience-card-content">
            <span className="tag">Frontend</span>
            <h3>2022 - Present</h3>
            <h2>UI / UX Specialist</h2>
            <p>
              Building modern UI with animations and interactive 3D experiences.
            </p>
            <div className="tech-tags">
              <span>React</span>
              <span>CSS</span>
              <span>Tailwind</span>
            </div>
          </div>
        </div>

        {/* 🔥 CARD 3 */}
        <div className="autoright experience-card">
          <div
            className="experience-card-bg"
            style={{ backgroundImage: "url('./javadsa.png')" }}
          ></div>

          <div className="experience-card-content">
            <span className="tag">Core Skills</span>
            <h3>Certification</h3>
            <h2>Java & DSA</h2>
            <p>
              Strong foundation in data structures and algorithms.
            </p>
            <div className="tech-tags">
              <span>Java</span>
              <span>DSA</span>
            </div>
          </div>
        </div>

        {/* 🔥 CARD 4 */}
        <div className="auto-comeright experience-card">
          <div
            className="experience-card-bg"
            style={{ backgroundImage: "url('./backuni.png')" }}
          ></div>

          <div className="experience-card-content">
            <span className="tag">Education</span>
            <h3>2021 - 2025</h3>
            <h2>B.Tech CSE</h2>
            <p>
              Focused on full-stack development and real-world projects.
            </p>
            <div className="tech-tags">
              <span>OOP</span>
              <span>DBMS</span>
              <span>OS</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;