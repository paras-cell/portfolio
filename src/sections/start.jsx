import { useEffect, useState } from "react";
import "./css/start.css";
import "./css/anime.css";
import "./css/base.css"

import Spline from "@splinetool/react-spline";

function Start() {
  return (
    <>
      <div className="img-cont">
        <div className="my-div"></div>
        <Spline 
        className="anime"
          scene="https://prod.spline.design/Cd65dnOaZQy-KUba/scene.splinecode"
        />
      </div>

      <div className="blackback"></div>

      <div>
        <div className="content-start ">
          <div
            style={{
              display: "flex",
              gap: "14px",
              margin: "0%",
              alignItems: "flex-end",
            }}
          >
            <h2>Hi, I am</h2>
            <h1>Paras Kumar</h1>
          </div>
          <div
            style={{
              display: "flex",
              gap: "14px",
              margin: "0%",
              alignItems: "flex-end",
            }}
          >
            <h2>I am a</h2>
            <div className="type-eff">
              <h2 className="type-ef">Web Developer.</h2>
            </div>
          </div>
          <p style={{ width: "100%", wordBreak: "break-word" }}>
            Building responsive and high-performance web applications with clean
            code and thoughtful design. Passionate about creating seamless user
            experiences and integrating AI-driven solutions.
          </p>
        </div>

        <div className="start-but">
          <div style={{ display: "flex", gap: "12px" }}>
            <span className="connect">
              <a href="https://www.instagram.com/paras_31__/" target="_blank">
                <img
                  className="connect-icon"
                  src="insta.png"
                  alt="insta"
                />
              </a>
            </span>
            <span className="connect">
              <a
                href="https://www.linkedin.com/in/paras-kumar-26410426b"
                target="_blank"
              >
                <img
                  className="connect-icon"
                  src="linkedin.png"
                  alt="linkedin"
                />
              </a>
            </span>
            <span className="connect">
              <a href="https://github.com/paras-cell" target="_blank">
                <img
                  style={{ borderRadius: "10px", background: "white" }}
                  className="connect-icon"
                  src="githublogo.png"
                  alt="github"
                />
              </a>
            </span>
          </div>
            <div style={{ display: "flex", gap: "12px" }}>
          <button
            className="hire-but"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Hire Me
          </button>
          <a href="/resume.pdf" download>
            <button className="hire-but know-me">⇩ Resume</button>
          </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Start;
