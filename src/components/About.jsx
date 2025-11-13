import { useState, useEffect } from "react";
import "./About.css";

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className={`about-content ${isVisible ? "visible" : ""}`}>
          {/* Header */}
          <div className="about-header">
            <h2 className="about-title">À propos de moi</h2>
            <div className="title-underline"></div>
          </div>

          {/* Main Content Grid */}
          <div className="about-grid">
            {/* Left Column - Profile Image */}
            <div className="image-container">
              <div className="image-border">
                <div className="image-wrapper">
                  <img
                    src="/assets/me.jpg"
                    alt="OUAHAB Achraf"
                    className="profile-image"
                  />
                </div>
              </div>
              <div className="decor-circle-1"></div>
              <div className="decor-circle-2"></div>
            </div>

            {/* Right Column - Text Content */}
            <div className="text-content">
              <p className="intro">
                Bonjour ! Je suis{" "}
                <span className="highlight">OUAHAB Achraf</span>, un développeur
                web passionné par la création d'expériences numériques
                innovantes et performantes.
              </p>

              <p className="description">
                Spécialisé dans le développement full-stack, je combine
                créativité et compétences techniques pour transformer des idées
                en solutions digitales concrètes. Mon approche se concentre sur
                la qualité du code, l'expérience utilisateur et les performances
                optimales.
              </p>

              {/* Stats Cards */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Années d'expérience</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Projets réalisés</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">8+</div>
                  <div className="stat-label">Technologies</div>
                </div>
              </div>

              {/* Key Points */}
              <div className="key-points">
                <div className="key-point">
                  <div className="icon-circle">
                    <svg className="icon" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 12L11 14L15 10M21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12Z"
                        stroke="#00adb5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="key-point-text">
                    Code propre et maintenable
                  </span>
                </div>
                <div className="key-point">
                  <div className="icon-circle">
                    <svg className="icon" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M13 10V3L4 14H11V21L20 10H13Z"
                        stroke="#00adb5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="key-point-text">Solutions performantes</span>
                </div>
                <div className="key-point">
                  <div className="icon-circle">
                    <svg className="icon" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
                        stroke="#00adb5"
                        strokeWidth="2"
                      />
                      <path
                        d="M2 12H22M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                        stroke="#00adb5"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span className="key-point-text">Design responsive</span>
                </div>
              </div>

              <a href="#contact" className="about-btn">
                Travaillons ensemble
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
