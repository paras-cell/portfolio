import "./css/about.css";
import "./css/base.css";

function About() {
  return (
    <div className="info-section">
      <h1 className="auto-show-d section-title">ABOUT ME</h1>
      <div className="info-cards">

        <div className="auto-comeleft card">
          <h1>Hi there, I'm Paras</h1>
          <p>
            I have a strong foundation in Java and Data Structures & Algorithms, along with hands-on experience in MERN stack development. I’ve built and deployed multiple real-world projects and actively contributed to feature development, bug fixes, and code improvements during my internship. As a fresher, I focus on writing clean, scalable code and continuously improving my problem-solving skills.
          </p>
          <img src="profile.jpeg" alt="Grid 1" />
        </div>

        <div className="auto-comeright card">
          <h1>I’m very flexible with time zone communications & locations</h1>
          <p>
            I'm open to remote work worldwide and can easily adjust across different time zones to collaborating with diverse teams.
          </p>
          <video className="globe" autoPlay loop muted playsInline src="/globe.mp4"></video>
        </div>

        <div className="auto-comeright card">
          <h1>My Passion for Coding</h1>
          <p>
            Coding excites me because it lets me solve problems and build things from scratch. I love exploring new technologies and continuously improving my skills to create impactful solutions.
          </p>
          <video className="globe cube" autoPlay loop muted playsInline src="/hero-video.mp4"></video>
        </div>

      </div>
    </div>
  );
}

export default About;
