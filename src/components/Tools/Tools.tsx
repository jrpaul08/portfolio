import React from 'react';
import './Tools.css';

const Tools: React.FC = () => {
  const tools = [
    { name: 'Python', image: '/assets/tools/python.png' },
    { name: 'Pandas', image: '/assets/tools/pandas.png' },
    { name: 'NumPy', image: '/assets/tools/numpy.png' },
    { name: 'Scikit-learn', image: '/assets/tools/scikit-learn.png' },
    { name: 'Seaborn', image: '/assets/tools/seaborn.png' },
    { name: 'Matplotlib', image: '/assets/tools/matplotlib.png' },
    { name: 'PyTorch', image: '/assets/tools/pytorch.png' },
    { name: 'PostgreSQL', image: '/assets/tools/postgres-sql.png' }
  ];

  return (
    <section id="tools" className="tools section">
      <div className="container">
        <div className="tools-header">
          <h2 className="tools-title">My Data Science Stack</h2>
        </div>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="tool-logo">
                <img 
                  src={tool.image} 
                  alt={tool.name}
                  className="tool-image"
                />
              </div>
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
