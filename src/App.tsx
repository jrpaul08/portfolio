import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Proficiencies from './components/Proficiencies/Proficiencies';
import Projects from './components/Projects/Projects';
import Tools from './components/Tools/Tools';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';
import { useZoomLevel } from './hooks/useZoomLevel';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const { isZoomedOut, isZoomedIn } = useZoomLevel();

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

  const zoomClass = isZoomedOut ? 'zoomed-out' : isZoomedIn ? 'zoomed-in' : '';

  return (
    <div className={['App', zoomClass].filter(Boolean).join(' ')}>
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