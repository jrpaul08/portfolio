import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img 
              src="/assets/profile/signature.jpg" 
              alt="Jared Paul Signature" 
              className="logo-signature"
            />
          </div>
          <nav className="nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#proficiencies" className="nav-link">Proficiencies</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#tools" className="nav-link">Stack</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
