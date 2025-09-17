import "./css/tech.css";
import "./css/anime.css";
import "./css/base.css";

function Tech() {
  return (
    <div className="auto-show-d banner">
      <div className="slider" style={{ '--quantity': 11 }}>
        <div className="item" style={{ '--position': 1 }}><img src="/css.png" alt=""/></div>
        <div className="item" style={{ '--position': 2 }}><img src="/html.png" alt=""/></div>
        <div className="item" style={{ '--position': 3 }}><img src="/js.png" alt=""/></div>
        <div className="item" style={{ '--position': 4 }}><img src="/react.png" alt=""/></div>
        <div className="item" style={{ '--position': 5 }}><img src="/tailwind.png" alt=""/></div>
        <div className="item" style={{ '--position': 6 }}><img src="/express.png" alt=""/></div>
        <div className="item" style={{ '--position': 7 }}><img src="/spline.png" alt=""/></div>
        <div className="item" style={{ '--position': 8 }}><img src="/nodejs.png" alt=""/></div>
        <div className="item" style={{ '--position': 9 }}><img src="/mongodb.png" alt=""/></div>
        <div className="item" style={{ '--position': 10 }}><img src="/github.png" alt=""/></div>
        <div className="item" style={{ '--position': 11 }}><img src="/java.png" alt=""/></div>
      </div>
      <div className="contentes">
        <h1>TECH STACK</h1>
        <div className="author">
           <h2>Core Skills</h2>
           <p><b>Technologies I excel in and actively use</b></p>
        </div>
        <div className=" author2">
          <h2>Tech Stack</h2>
          <p><b>Tools and frameworks I leverage daily</b></p>
          <p>From front-end to back-end, </p>
          <p>these are my go-to technologies</p>
          <p>for building efficient and scalable applications.</p>
      </div>
        
        <div className="model"></div>
        <div className="blur-div"></div>
      </div>
    </div>
  );
}

export default Tech;
