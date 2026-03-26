import "./css/certificate.css";
import React, { useState, useRef } from "react";

function CertificateCard({ title, issuer, date, imgPath }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    glowRef.current.style.transform = `translate(${x - 150}px, ${y - 150}px)`;

    // 3D Tilt effect
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div
      className="cert-card-container"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cert-card-glow" ref={glowRef}></div>
      <div className="cert-card-content">
        <div className="cert-image-wrapper">
          {/* We use a glowing placeholder if imgPath is not provided, or an icon */}
          <div className="cert-image-placeholder">
            <i className="bx bxs-certification cert-icon"></i>
          </div>
        </div>
        <div className="cert-text-content">
          <span className="cert-date">{date}</span>
          <h2>{title}</h2>
          <p>{issuer}</p>
        </div>
      </div>
    </div>
  );
}

function Certificate() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section className="certificate-section">
      <h1 className="auto-show-d cert-main-title">AWARDS & CERTIFICATES</h1>

      <div className="cert-container-wrapper">
        <button className="cert-nav-btn left" onClick={scrollLeft}>
          <i className="bx bx-chevron-left">&lt;</i>
        </button>

        <div className="cert-grid" ref={scrollRef}>
          <div className="auto-show-up cert-wrapper">
            <CertificateCard
              title="MongoDB Node.js Developer Path"
              issuer="MongoDB University"
              date="2023"
            />
          </div>

          <div className="auto-show-up cert-wrapper" style={{ animationDelay: "0.2s" }}>
            <CertificateCard
              title="Frontend Web Development"
              issuer="Meta Coursera"
              date="2023"
            />
          </div>

          <div className="auto-show-up cert-wrapper" style={{ animationDelay: "0.4s" }}>
            <CertificateCard
              title="Java & Data Structures Mastery"
              issuer="Coding Ninjas"
              date="2022"
            />
          </div>

          <div className="auto-show-up cert-wrapper" style={{ animationDelay: "0.6s" }}>
            <CertificateCard
              title="Advanced React Patterns"
              issuer="Frontend Masters"
              date="2024"
            />
          </div>
        </div>

        <button className="cert-nav-btn right" onClick={scrollRight}>
          <i className="bx bx-chevron-right">&gt;</i>
        </button>
      </div>
    </section>
  );
}

export default Certificate;
