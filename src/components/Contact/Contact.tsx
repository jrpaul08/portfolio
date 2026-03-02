import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="contact-footer">
      <div className="contact-banner">
        <div className="contact-container">
          <div className="contact-intro">
            <h2 className="contact-headline">
              Open to new ideas, collaborating or just to chat!
            </h2>
            <p className="contact-subtext">
              Feel free to reach out:
            </p>
          </div>

          <div className="contact-buttons">
            <a href="mailto:pauljared48@gmail.com" className="contact-btn">
              <img 
                src="/assets/profile/contact.png" 
                alt="Email" 
                className="contact-btn-icon" 
              />
              <span>Email</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/paulj08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <img 
                src="/assets/profile/linkedIn.png" 
                alt="LinkedIn" 
                className="contact-btn-icon" 
              />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
