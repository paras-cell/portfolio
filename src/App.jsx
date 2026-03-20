import "./App.css";
import { useState } from "react";
import Nav from "./nav/nav.jsx";
import Home from "./sections/start.jsx";
import Welcome from "./welcome.jsx";
import About from "./sections/About.jsx";
import Experience from "./sections/Experience.jsx";
import Project from "./sections/Project.jsx";
import Services from "./sections/Services.jsx";
import Tech from "./sections/Tech.jsx";
import Contact from "./sections/Contact.jsx";
import CustomCursor from "./CustomCursor.jsx";


function App() {

  const [showWelcome, setShowWelcome] = useState(true);

  return (

    <>
      <CustomCursor />
      {showWelcome ? <Welcome onFinish={() => setShowWelcome(false)} />
        : (
          <div className="background">
            <Nav />
            <video
              className="back-vid" autoPlay loop muted playsInline src="/galaxy.mp4">
            </video>
            {/* <video 
        className="back-vid-2" autoPlay loop muted playsInline src="/galaxy.mp4">
      </video> */}
            <section id="home" className="section"><Home></Home></section>
            <section id="about" className="section"><About /></section>
            <section id="experience" className="section"><Experience /></section>
            <section id="project" className="section"><Project /></section>
            <section id="services" className="section"><Services /></section>
            <section id="tech" className="section"><Tech /></section>
            <section id="contact" className="section"><Contact /></section>
          </div>
        )}
    </>

  );
}

export default App;