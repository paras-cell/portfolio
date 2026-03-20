import { useEffect, useState } from "react";
import "./welcome.css";
import "./sections/css/anime.css";


function Welcome({ onFinish }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exit animation at 4.5 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 4500); 

    // Completely unmount at 5.5 seconds (giving 1s for exit animation)
    const unmountTimer = setTimeout(() => {
      onFinish();
    }, 5500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
    };
  }, [onFinish]);

  return (
    <div className={`welcome-screen ${isExiting ? 'fade-out' : ''}`}>
      <div className="cont-wel">
        <div className="icons-container">
          <img className="icon_ icon-1" src="/linkedin.png" alt="LinkedIn" />
          <img className="icon_ icon-2" src="/insta.png" alt="Instagram" />
          <img className="icon_ icon-3" src="/githublogo.png" alt="GitHub" />
        </div>
      <h1 className="wel-text">Welcome to</h1>
      <h1 className="animated-text">My Portfolio Website</h1>
      <p className="wel-p" style={{margin:"0%",textAlignLast:"end"}}>~ Paras</p>
      </div>
    </div>
  );
}

export default Welcome;