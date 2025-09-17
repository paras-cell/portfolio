import React, { useState, useEffect } from "react";
import "./nav.css";

function Nav() {
  const [activeSection, setActiveSection] = useState("home");

  const handleClick = (section) => {
    setActiveSection(section);
    document.getElementById(section.toLowerCase()).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = ["home", "about", "project", "tech", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
          }
        });
      },
      { threshold: 0.3 }
    );

    setTimeout(() => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
        }
      });
    }, 100);

    return () => observer.disconnect();
}, []);


  return (
    <nav className="cont-nav">
      <h2>Portfolio</h2>
      <ul className="nav-list">
        {["Home", "About", "Project", "Tech", "Contact"].map((section) => (
          <li
            key={section}
            className={`nav-item ${activeSection === section ? "active" : ""}`}
            onClick={() => handleClick(section)}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;