import { useEffect, useState } from "react";
import "./welcome.css";
import "./sections/css/anime.css";

function Welcome({ onFinish }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 4500);

    const unmountTimer = setTimeout(() => {
      onFinish();
    }, 5500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
    };
  }, [onFinish]);

  return (
    <div className={`welcome-screen ${isExiting ? "fade-out" : ""}`}>
      <div className="cont-wel">

        {/* 🔥 FLOATING ICONS */}
        <div className="icons-container">
          <img className="icon_ icon-1" src="/linkedin.png" />
          <img className="icon_ icon-2" src="/insta.png" />
          <img className="icon_ icon-3" src="/githublogo.png" />
        </div>

        {/* 💎 TEXT */}
        <h1 className="wel-text">Welcome to</h1>
        <h1 className="animated-text">My Portfolio</h1>

        {/* ✨ GLOW LINE */}
        <div className="glow-line"></div>

        <p className="wel-p">~ Paras</p>
      </div>
    </div>
  );
}

export default Welcome;