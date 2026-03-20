import "./css/about.css";
import "./css/base.css";

function Services() {
  return (
    <div className="info-section">
      <h1 className="auto-show-d section-title">MY SERVICES</h1>
      <div className="info-cards">
        <div className="auto-comeleft card">
          <img src="/insta.png" alt="Service 1" style={{width: "40px", height: "40px", marginBottom: "15px", filter: "invert(1)"}} />
          <h1>Web Development</h1>
          <p>
            Building responsive, fast, and scalable web applications from scratch, bringing complex ideas to life with efficient code.
          </p>
        </div>

        <div className="auto-show-d card">
          <img src="/linkedin.png" alt="Service 2" style={{width: "40px", height: "40px", marginBottom: "15px", filter: "invert(1)"}} />
          <h1>UI/UX Animation</h1>
          <p>
            Implementing smooth, modern animations, custom cursors, and 3D scenes (like Spline) to make your website visually stunning.
          </p>
        </div>

        <div className="auto-comeright card">
          <img src="/githublogo.png" alt="Service 3" style={{width: "40px", height: "40px", marginBottom: "15px", filter: "invert(1)"}} />
          <h1>Optimization & Maintenance</h1>
          <p>
            Debugging, significantly improving web performance, fixing lag issues, and maintaining existing codebases to run efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
