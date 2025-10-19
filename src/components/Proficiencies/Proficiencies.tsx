import React from 'react';
import './Proficiencies.css';

const Proficiencies: React.FC = () => {
  const proficiencies = [
    {
      image: '/assets/proficiencies_icon/data-analytics.png',
      title: 'Data Analytics',
      description: 'Analyze and interpret data using statistical methods to uncover trends, measure performance, and generate actionable insights that inform strategic decisions.',
      color: '#3B82F6'
    },
    {
      image: '/assets/proficiencies_icon/data-visualization.png',
      title: 'Data Visualization',
      description: 'Design clear, effective visualizations and dashboards that make complex data easy to interpret and act upon.',
      color: '#10B981'
    },
    {
      image: '/assets/proficiencies_icon/data-storytelling.png',
      title: 'Data Storytelling',
      description: 'Communicate analytical findings through meaningful narratives that connect data insights to real-world impact.',
      color: '#F59E0B'
    },
    {
      image: '/assets/proficiencies_icon/machine-learning.png',
      title: 'Machine Learning',
      description: 'Build, train, and evaluate models to uncover patterns, make predictions, and solve business or research problems.',
      color: '#8B5CF6'
    },
    {
      image: '/assets/proficiencies_icon/programming.png',
      title: 'Programming',
      description: 'Develop efficient, well-structured code in Python and SQL for data processing, automation, and application development.',
      color: '#EF4444'
    }
  ];

  return (
    <section id="proficiencies" className="proficiencies section">
      <div className="container">
        <div className="proficiencies-header">
          <p className="proficiencies-subtitle">Here Are My</p>
          <h2 className="proficiencies-title">Proficiencies</h2>
          <hr className="gradient-line" />
        </div>
        <div className="proficiencies-container">
          {proficiencies.map((proficiency, index) => (
            <div key={index} className="proficiency-card" style={{'--accent-color': proficiency.color} as React.CSSProperties}>
              <div className="proficiency-header">
                <div className="proficiency-icon">
                  <img 
                    src={proficiency.image} 
                    alt={proficiency.title}
                    className="proficiency-image"
                  />
                </div>
                <h3 className="proficiency-title">{proficiency.title}</h3>
              </div>
              <p className="proficiency-description">{proficiency.description}</p>
              <div className="proficiency-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proficiencies;