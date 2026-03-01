import React from 'react';
import './Proficiencies.css';

const Proficiencies: React.FC = () => {
  const skills = [
    {
      image: '/assets/proficiencies_icon/data-analytics.png',
      title: 'Data Analytics',
      description: 'I dig into data to find what\'s actually going on beneath the surface, the patterns, the outliers, and the valuable insights.',
      color: '#3B82F6'
    },
    {
      image: '/assets/proficiencies_icon/data-visualization.png',
      title: 'Data Visualization',
      description: 'I turn raw numbers into visuals that are easy to read and hard to ignore, making complex data accessible to anyone in the room.',
      color: '#10B981'
    },
    {
      image: '/assets/proficiencies_icon/data-storytelling.png',
      title: 'Data Storytelling',
      description: 'I take analytical findings and craft them into narratives that give data meaning and context, in a way that resonates with the reader.',
      color: '#F59E0B'
    },
    {
      image: '/assets/proficiencies_icon/machine-learning.png',
      title: 'Machine Learning',
      description: 'I build and train models using algorithms and statistical techniques that learn from data, uncover hidden patterns, and generate predictions that drive smarter decisions.',
      color: '#8B5CF6'
    },
    {
      image: '/assets/proficiencies_icon/programming.png',
      title: 'Programming',
      description: 'I write clean, efficient code in Python and SQL to wrangle data, build pipelines, and automate the stuff that nobody wants to do manually.',
      color: '#EF4444'
    }
  ];

  return (
    <section id="proficiencies" className="proficiencies section">
      <div className="container">
        <div className="proficiencies-header">
          <p className="proficiencies-subtitle">Here Are My</p>
          <h2 className="proficiencies-title">Skills</h2>
          <hr className="gradient-line" />
        </div>
        <div className="proficiencies-container">
          {skills.map((skill, index) => (
            <div key={index} className="proficiency-card" style={{'--accent-color': skill.color} as React.CSSProperties}>
              <div className="proficiency-header">
                <div className="proficiency-icon">
                  <img 
                    src={skill.image} 
                    alt={skill.title}
                    className="proficiency-image"
                  />
                </div>
                <h3 className="proficiency-title">{skill.title}</h3>
              </div>
              <p className="proficiency-description">{skill.description}</p>
              <div className="proficiency-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proficiencies;