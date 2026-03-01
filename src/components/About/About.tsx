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
              I started out in software engineering, writing code and watching it come to life in the hands of real users. But I kept finding myself more drawn to the numbers behind the product than the product itself, and that curiosity pulled me toward data science!
            </p>
            <p>
              That said, data can be very messy, and often you find yourself knee deep in uncertainty before any of it starts to make sense. But underneath all the noise, the data has a story worth telling, and that makes every bit of the mess worth it. And machine learning is where it all comes full circle for me, building systems that are powered by data, trained on patterns, and built to uncover something meaningful.
            </p>
            <p>
              Away from the screen, I like to stay active whether it's playing sports or just out for a walk. And when I do sit down, it's usually with a book, and right now I'm hooked on the Dune series!
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
