import "./css/tech.css";
import "./css/anime.css";
import "./css/base.css";

function Tech() {
  return (
    <div className="auto-show-up banner">

      {/* 🔥 HEADING */}
      <h1 className="section-title tech-title">TECH STACK</h1>

      {/* 🔝 TOP RING */}
      <div className="slider slider-top" style={{ '--quantity': 6 }}>
        <div className="item" style={{ '--position': 1 }}><img src="/css.png" /></div>
        <div className="item" style={{ '--position': 2 }}><img src="/html.png" /></div>
        <div className="item" style={{ '--position': 3 }}><img src="/js.png" /></div>
        <div className="item" style={{ '--position': 4 }}><img src="/react.png" /></div>
        <div className="item" style={{ '--position': 5 }}><img src="/tailwind.png" /></div>
        <div className="item" style={{ '--position': 6 }}><img src="/express.png" /></div>
      </div>

      {/* 🔽 BOTTOM RING */}
      <div className="slider slider-bottom" style={{ '--quantity': 5 }}>
        <div className="item" style={{ '--position': 1 }}><img src="/nodejs.png" /></div>
        <div className="item" style={{ '--position': 2 }}><img src="/mongodb.png" /></div>
        <div className="item" style={{ '--position': 3 }}><img src="/github.png" /></div>
        <div className="item" style={{ '--position': 4 }}><img src="/java.png" /></div>
        <div className="item" style={{ '--position': 5 }}><img src="/spline.png" /></div>
      </div>

      {/* 💎 CENTER ELEMENT */}
      <div className="center-glow">
        <div className="glass-core">
          <h2>Full Stack</h2>
          <p>MERN + Java + DSA</p>
        </div>
      </div>

    </div>
  );
}

export default Tech;