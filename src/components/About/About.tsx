import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <p className="about-subtitle">Get To Know More</p>
          <h2 className="about-title">About Jared Paul</h2>
          <hr className="gradient-line" />
          <div className="about-text">
            <p>
              Driven by curiosity and a love for problem-solving, I'm a Software Engineering graduate passionate about uncovering insights and creating impact through data. My journey into data science and machine learning began with a fascination for how data can reveal patterns, tell stories, and guide meaningful decisions.
            </p>
            <p>
              What draws me to this field is its constant evolution, combining analytical thinking, creativity, and continuous learning. I'm excited by the challenge of transforming data into solutions that push boundaries and drive innovation.
            </p>
            <p>
              Outside of my work, I enjoy staying active through sports, workouts, and outdoor activities. I also love reading and exploring new ideas as I strive to maintain a healthy and well-rounded lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
