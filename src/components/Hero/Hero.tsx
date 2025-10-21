import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <div className="profile-circle">
              <img 
                src="/assets/profile/profile.jpeg" 
                alt="Jared Paul" 
                className="profile-img"
              />
            </div>
          </div>
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">Jared Paul</h1>
            <h2 className="hero-title">Data Scientist</h2>
            <div className="hero-contact-buttons">
              <a href="https://www.linkedin.com/in/paulj08" target="_blank" rel="noopener noreferrer" className="hero-contact-btn">
                <img src="/assets/profile/linkedIn.png" alt="LinkedIn" className="contact-icon" />
              </a>
              <a href="https://github.com/jrpaul08" target="_blank" rel="noopener noreferrer" className="hero-contact-btn">
                <img src="/assets/profile/github.png" alt="GitHub" className="contact-icon" />
              </a>
              <a href="/assets/profile/JP_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-contact-btn">
                <img src="/assets/profile/resume.png" alt="Resume" className="contact-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
