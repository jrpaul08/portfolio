import React from 'react';
import './Projects.css';

interface ProjectsProps {
  onProjectClick: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
        </div>
        <hr className="projects-divider" />
        
        {/* Chest X-Ray Classification Project */}
        <div className="project-content">
          <div className="project-info">
            <h3 className="project-title">
              <span className="project-tools">PYTHON | PYTORCH | DEEP LEARNING</span>
              <span className="project-name">MULTI-LABEL CHEST X-RAY</span>
              <span className="project-name">CLASSIFICATION</span>
            </h3>
            <p className="project-description">
              Developed a deep learning model for multi-label chest X-ray classification to detect 13 thoracic diseases from medical images. Built with a MobileNetV2 architecture and enhanced through data augmentation, class rebalancing, and dynamic thresholding, the model achieved 62% accuracy and 58% recall despite limited resources, demonstrating a strong starting point for real-world diagnostic support. The system includes bounding box visualizations to highlight abnormalities and a diagnostic report generator summarizing predicted conditions with related symptoms and treatments.
            </p>
            <p className="project-description" style={{ fontSize: '15px', marginTop: '10px', fontStyle: 'italic' }}>
              Future improvements include exploring more advanced CNN architectures, expanding the dataset with higher-quality medical images, and incorporating expert feedback from radiologists to enhance clinical reliability.
            </p>
            <div className="project-teaser">
              <p className="teaser-text">Explore the full study detailing model design, training process, and diagnostic evaluation.</p>
              <a href="/assets/projects/cxdd/multi-label-chest-xray-classification.pdf" target="_blank" rel="noopener noreferrer">
                <button className="btn-outline project-cta">Read the Research Paper</button>
              </a>
            </div>
          </div>
          <div className="project-dashboard">
            <img 
              src="/assets/projects/cxdd/scanalyze_homepage.png" 
              alt="Chest X-Ray Classification System" 
              className="project-dashboard-image"
            />
          </div>
        </div>

        <hr className="projects-divider" style={{ marginTop: '80px', marginBottom: '40px' }} />

        {/* RFM Analysis Project */}
        <div className="project-content">
          <div className="project-info">
            <h3 className="project-title">
              <span className="project-tools">PYTHON | PANDAS | MATPLOTLIB</span>
              <span className="project-name">RETAIL CUSTOMER</span>
              <span className="project-name">SEGMENTATION USING RFM ANALYSIS</span>
            </h3>
            <p className="project-description">
              Performed an RFM (Recency, Frequency, Monetary) analysis of retail customer data to uncover actionable customer segments. Through segmentation based on purchasing behavior, RFM analysis enables data-driven marketing decisions; supporting personalized outreach, improved retention of valuable customers, early identification of churn risks, and optimized allocation of marketing efforts to increase profitability. Built an interactive dashboard to present findings and cluster-level KPIs for business stakeholders.
            </p>
            <div className="project-teaser">
              <p className="teaser-text">Dive deeper into the insights.</p>
              <button className="btn-outline project-cta" onClick={onProjectClick}>View Full Analysis</button>
            </div>
          </div>
          <div className="project-dashboard">
            <img 
              src="/assets/projects/rfm_analysis_dashboard/dashboard.png" 
              alt="RFM Analysis Dashboard" 
              className="project-dashboard-image"
            />
          </div>
        </div>

        <hr className="projects-divider" style={{ marginTop: '80px', marginBottom: '40px' }} />

        {/* NBA Oracle Project */}
        <div className="project-content">
          <div className="project-info">
            <h3 className="project-title">
              <span className="project-tools">PYTHON | MACHINE LEARNING | WEB SCRAPING</span>
              <span className="project-name">NBA ORACLE</span>
            </h3>
            <p className="project-description">
              Developed an end-to-end machine learning pipeline to predict NBA game outcomes using historical data from Basketball Reference. Implemented asynchronous web scraping, feature engineering, and time-series modeling on over 3,400 games across three seasons. Trained a Ridge Classifier optimized with sequential feature selection and cross-validation, achieving 71% prediction accuracy. This project demonstrates expertise in data engineering, sports analytics, and time-series machine learning, providing a scalable foundation for real-time game forecasting.
            </p>
          </div>
          <div className="project-dashboard">
            <img 
              src="/assets/projects/nba_oracle/nbaOracle-homepage.png" 
              alt="NBA Oracle Prediction System" 
              className="project-dashboard-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
