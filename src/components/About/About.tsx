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
              I studied software engineering, and along the way, I stumbled into data science. It wasn't a field I initially set out to pursue, but the more I worked in it, the more I fell in love and had a desire to learn.
            </p>
            <p>
              What I enjoy most is the process of working through a problem, making sense of the data, and figuring out what it can actually tell us. The perfect mix of problem-solving, discovery, and storytelling. Machine learning takes that a step further, giving me the opportunity to turn these insights into models that can solve problems and make predictions.
            </p>
            <p>
              Away from the screen, I like to stay active whether it's playing basketball or just out for a walk. And when I do sit down, I love to read books and right now I'm hooked on the Dune series!
            </p>
            <p>
              So here I am, a Software Engineering graduate turned data science enthusiast, chasing problems worth solving and insights worth sharing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
