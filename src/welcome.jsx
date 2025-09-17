import { useEffect } from "react";
import "./welcome.css";
import "./sections/css/anime.css";


function Welcome({ onFinish }) {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="welcome-screen">
      <div className="cont-wel">
        <div className="">
          <img style={{animation:"comedown 2.3s forwards ease"}} className="icon_"  src="/linkedin.png" alt="" />
          <img style={{animation:"comedown 3s forwards ease"}} className="icon_"  src="/insta.png" alt="" />
          <img style={{animation:"comedown 4s forwards ease"}} className="icon_" src="/githublogo.png" alt="" />
        </div>
      <h1 className="wel-text">Welcome to</h1>
      <h1 className="animated-text">My Portfolio Website</h1>
      <p className="wel-p" style={{margin:"0%",textAlignLast:"end"}}>~ Paras</p>
      </div>
    </div>
  );
}

export default Welcome;