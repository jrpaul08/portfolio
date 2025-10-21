import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Proficiencies from './components/Proficiencies/Proficiencies';
import Projects from './components/Projects/Projects';
import Tools from './components/Tools/Tools';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const showProjectDetail = () => {
    setCurrentPage('project');
    // Load project page at the top
    window.scrollTo(0, 0);
  };

  const showHome = () => {
    setCurrentPage('home');
    // Scroll to projects section with smooth animation
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (currentPage === 'project') {
    return <ProjectDetail onBack={showHome} />;
  }

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Proficiencies />
      <Projects onProjectClick={showProjectDetail} />
      <Tools />
    </div>
  );
}

export default App;