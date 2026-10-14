import React from 'react';
import './Projects.css';

interface ProjectsProps {
  onProjectClick: () => void;
}

// Preview card on the visual side of a project:
// 'link' opens an external URL, 'detail' opens the in-app project page, 'static' is image only.
type ProjectPreview = {
  type: 'link' | 'detail' | 'static';
  image: string;
  alt: string;
  hint: string;
  href?: string;
  ariaLabel?: string;
  // Renders the image as a centered logo on a solid navy panel
  logo?: boolean;
};

type ProjectCta = {
  teaser: string;
  label: string;
  // External URL; when omitted the button opens the in-app project page
  href?: string;
};

interface Project {
  id: string;
  nameLines: string[];
  tools: string;
  description: string;
  note?: string;
  cta?: ProjectCta;
  preview: ProjectPreview;
}

// To add a project, append an entry here. Image sides alternate automatically.
const projects: Project[] = [
  {
    id: 'chest-xray',
    nameLines: ['MULTI-LABEL CHEST X-RAY', 'CLASSIFICATION'],
    tools: 'CNN | Multi-class Classification | Capstone Project',
    description:
      'Built a deep learning model that detects 13 thoracic diseases from chest X-rays. Using a MobileNetV2 architecture with data augmentation, class rebalancing, and dynamic thresholding, it reached 62% accuracy and 58% recall on limited resources. The system highlights abnormalities with bounding boxes and generates a diagnostic report summarizing predicted conditions, related symptoms, and treatments.',
    note:
      'Next steps: more advanced CNN architectures, higher-quality medical images, and feedback from radiologists to improve clinical reliability.',
    cta: {
      teaser: 'Explore the full study detailing model design, training process, and diagnostic evaluation.',
      label: 'Read the Research Paper',
      href: '/assets/projects/cxdd/multi-label-chest-xray-classification.pdf',
    },
    preview: {
      type: 'link',
      href: 'https://chest-scanalyze-ai-frontend.onrender.com/',
      image: '/assets/projects/cxdd/chest-scanalyze-ai-logo.png',
      alt: 'Chest Scanalyze AI — multi-label chest X-ray classification',
      hint: 'Open live demo',
      ariaLabel: 'Open Chest Scanalyze AI live demo',
      logo: true,
    },
  },
  {
    id: 'rfm-analysis',
    nameLines: ['RETAIL CUSTOMER', 'SEGMENTATION USING RFM ANALYSIS'],
    tools: 'K-means Clustering | Business Intelligence',
    description:
      'Segmented retail customers by Recency, Frequency, and Monetary value to uncover actionable groups. The segments support personalized outreach, retention of high-value customers, early identification of churn risks, and better allocation of marketing spend. Findings and cluster-level KPIs are presented in an interactive dashboard for business stakeholders.',
    cta: {
      teaser: 'Dive deeper into the insights.',
      label: 'View Full Analysis',
    },
    preview: {
      type: 'detail',
      image: '/assets/projects/rfm_analysis_dashboard/dashboard.png',
      alt: 'RFM customer segmentation dashboard preview',
      hint: 'View full analysis',
      ariaLabel: 'View full RFM analysis',
    },
  },
  {
    id: 'nba-oracle',
    nameLines: ['NBA ORACLE'],
    tools: 'Webscraping | Time-series Modelling | Personal Interest',
    description:
      'Built an end-to-end machine learning pipeline that predicts NBA game outcomes from Basketball Reference data. Asynchronously scraped over 3,400 games across three seasons, engineered time-series features, and trained a Ridge Classifier optimized with sequential feature selection and cross-validation, achieving 71% prediction accuracy.',
    preview: {
      type: 'static',
      image: '/assets/projects/nba_oracle/nbaOracle-homepage.png',
      alt: 'NBA Oracle prediction app preview',
      hint: 'Application Preview',
    },
  },
];

const PreviewCard: React.FC<{ preview: ProjectPreview; onProjectClick: () => void }> = ({
  preview,
  onProjectClick,
}) => {
  const image = (
    <img
      src={preview.image}
      alt={preview.alt}
      className={`project-preview-card-image${preview.logo ? ' project-preview-card-image--logo' : ''}`}
    />
  );
  const content = (
    <>
      {preview.logo ? <div className="project-preview-card-logo-surface">{image}</div> : image}
      <span
        className={`project-preview-card-hint${preview.type === 'static' ? ' project-preview-card-hint--subtle' : ''}`}
      >
        {preview.hint}
      </span>
    </>
  );
  const logoClass = preview.logo ? ' project-preview-card--logo' : '';

  if (preview.type === 'link') {
    return (
      <a
        href={preview.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`project-preview-card project-preview-card--link${logoClass}`}
        aria-label={preview.ariaLabel}
      >
        {content}
      </a>
    );
  }

  if (preview.type === 'detail') {
    return (
      <button
        type="button"
        className={`project-preview-card project-preview-card--action${logoClass}`}
        onClick={onProjectClick}
        aria-label={preview.ariaLabel}
      >
        {content}
      </button>
    );
  }

  return <div className={`project-preview-card project-preview-card--static${logoClass}`}>{content}</div>;
};

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="projects-header">
          <h2 className="projects-title">Featured Projects</h2>
        </div>
        <hr className="projects-divider" />

        {projects.map((project, index) => (
          <React.Fragment key={project.id}>
            {index > 0 && <hr className="projects-divider projects-divider--spaced" />}

            <article
              className={`project-content project-content--balanced${index % 2 === 1 ? ' project-content--reversed' : ''}`}
            >
              <div className="project-info">
                <h3 className="project-title">
                  {project.nameLines.map((line) => (
                    <span key={line} className="project-name">{line}</span>
                  ))}
                  <span className="project-tools">{project.tools}</span>
                </h3>
                <p className="project-description">{project.description}</p>
                {project.note && (
                  <p className="project-description project-description--note">{project.note}</p>
                )}
                {project.cta && (
                  <div className="project-teaser">
                    <p className="teaser-text">{project.cta.teaser}</p>
                    {project.cta.href ? (
                      <a
                        href={project.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline project-cta"
                      >
                        {project.cta.label}
                      </a>
                    ) : (
                      <button type="button" className="btn-outline project-cta" onClick={onProjectClick}>
                        {project.cta.label}
                      </button>
                    )}
                  </div>
                )}
              </div>
              <div className="project-dashboard project-dashboard--preview">
                <PreviewCard preview={project.preview} onProjectClick={onProjectClick} />
              </div>
            </article>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
