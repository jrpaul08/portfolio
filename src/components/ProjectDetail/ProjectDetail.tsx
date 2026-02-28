import React, { useEffect } from 'react';
import './ProjectDetail.css';
import { useZoomLevel } from '../../hooks/useZoomLevel';

interface ProjectDetailProps {
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ onBack }) => {
  const { isZoomedOut } = useZoomLevel();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const zoomClass = isZoomedOut ? 'zoomed-out' : '';

  return (
    <div className={['project-detail', zoomClass].filter(Boolean).join(' ')}>
      <div className="project-detail-container">
        <button className="back-button" onClick={onBack}>
          ← Back to Portfolio
        </button>
        
        <div className="project-detail-header">
          <h1 className="project-detail-title">Retail Customer Segmentation using RFM Analysis</h1>
          <div className="project-detail-tools">
            <span className="tool-tag">PYTHON</span>
            <span className="tool-tag">PANDAS</span>
            <span className="tool-tag">MATPLOTLIB</span>
          </div>
        </div>

        <div className="project-dashboard-preview">
          <img 
            src="/assets/projects/rfm_analysis_dashboard/dashboard.png" 
            alt="RFM Analysis Dashboard" 
            className="dashboard-image"
          />
        </div>

        <div className="project-detail-content">
          <div className="project-detail-overview">
            <h2 className="section-title">Overview</h2>
            <p className="project-detail-description">
              Performed an RFM (Recency, Frequency, Monetary) analysis of retail customer data to uncover actionable customer segments. Through segmentation based on purchasing behavior, RFM analysis enables data-driven marketing decisions; supporting personalized outreach, improved retention of valuable customers, early identification of churn risks, and optimized allocation of marketing efforts to increase profitability. Built an interactive dashboard to present findings and cluster-level KPIs for business stakeholders.
            </p>
          </div>

          <div className="project-detail-section">
            <h2 className="section-title">Data Preparation</h2>
            <ul className="section-list">
              <li>Removed rows with missing Customer IDs, since they couldn't be tied to specific customer activity.</li>
              <li>Removed records with negative prices, abnormal stock codes, or invalid invoice numbers, as they did not represent real customer purchases.</li>
              <li>After cleaning, about 23% of the data was removed, leaving enough valid entries to continue the analysis.</li>
              <li>Calculated Total Sales for each purchase (Quantity × Price) and aggregated these values to compute Recency, Frequency, and Monetary Value for each customer.</li>
              <li>Identified outliers in Monetary and Frequency values using the IQR method (1.5×IQR threshold). These data points were separated from the main dataset to maintain clustering quality, while still being preserved and analyzed independently as high-value customer segments.</li>
              <li>Applied standard scaling so that each feature contributed equally during the K-Means clustering process.</li>
            </ul>
            
            <div className="image-gallery">
              <div className="image-item">
                <img 
                  src="/assets/projects/rfm_analysis_dashboard/box-plot-with-outliers.png" 
                  alt="Box Plot with Outliers" 
                  className="gallery-image"
                />
                <p className="image-caption">
                  <strong>Box Plot with Outliers:</strong> Initial analysis showing the distribution of Monetary, Frequency and Recency values including outliers. The extreme values (shown as dots beyond the whiskers) represent high-value customers with unusual purchasing patterns that could skew the clustering algorithm.
                </p>
              </div>
              
              <div className="image-item">
                <img 
                  src="/assets/projects/rfm_analysis_dashboard/box-plot-without-outliers.png" 
                  alt="Box Plot without Outliers" 
                  className="gallery-image"
                />
                <p className="image-caption">
                  <strong>Box Plot without Outliers:</strong> Cleaned dataset after outlier removal using the IQR method. This distribution provides a more balanced view of typical customer behavior patterns, enabling more accurate clustering while preserving the high-value outliers for separate analysis.
                </p>
              </div>
            </div>
          </div>

          <div className="project-detail-section">
            <h2 className="section-title">Applying K-means Clustering</h2>
            <ul className="section-list">
              <li>Determined the optimal number of clusters using the Elbow Method, which analyzed the rate of change in inertia (within-cluster sum of squares) to identify the point where adding more clusters no longer significantly improved model performance.</li>
              <li>To validate the clustering quality, computed the Silhouette Score for different cluster counts, ensuring that the chosen number of clusters achieved both high cohesion within clusters and clear separation between them.</li>
              <li>Trained the K-Means model using the chosen cluster count, segmenting customers into 4 meaningful clusters based on purchasing behavior.</li>
            </ul>
            
            <div className="image-gallery">
              <div className="image-item">
                <img 
                  src="/assets/projects/rfm_analysis_dashboard/num-cluster-evaluators.png" 
                  alt="Cluster Evaluation Metrics" 
                  className="gallery-image"
                />
                <p className="image-caption">
                  <strong>Cluster Evaluation Metrics:</strong> The left plot shows the Elbow Method analysis, where the "elbow" point at 4 clusters indicates the optimal balance between model complexity and performance. The right plot displays Silhouette Scores across different cluster counts, with 4 clusters still achieving a relatively high score, confirming that customers within each cluster are similar to each other while being distinct from customers in other clusters.
                </p>
              </div>
              
              <div className="image-item">
                <img 
                  src="/assets/projects/rfm_analysis_dashboard/cluster-plot.png" 
                  alt="Customer Clusters Visualization" 
                  className="gallery-image"
                />
                <p className="image-caption">
                  <strong>Customer Clusters Visualization:</strong> The final clustering results showing how customers are grouped into 4 distinct segments based on their RFM values. Each cluster represents a different customer behavior pattern, from high-value frequent buyers to low-engagement customers, enabling targeted marketing strategies for each segment.
                </p>
              </div>
            </div>
          </div>

          <div className="project-detail-section">
            <h2 className="section-title">Cluster Labeling & Interpretation</h2>
            <ul className="section-list">
              <li>Created violin plots for Monetary Value, Recency, and Frequency, with cluster labels (0–3) on the x-axis and a reference violin (grey) representing the overall dataset averages.</li>
              <li>Analyzed RFM distributions across clusters to define and interpret distinct customer segments:</li>
            </ul>
            
            <div className="cluster-interpretation">
              <div className="cluster-item">
                <div className="cluster-header">
                  <span className="cluster-label cluster-0">Cluster 0 – "Retain"</span>
                </div>
                <p className="cluster-description">High-value, frequent, and recent buyers.</p>
                <p className="cluster-strategy"><strong>Strategy:</strong> Maintain loyalty through personalized offers and consistent engagement.</p>
              </div>

              <div className="cluster-item">
                <div className="cluster-header">
                  <span className="cluster-label cluster-1">Cluster 1 – "Re-Engage"</span>
                </div>
                <p className="cluster-description">Infrequent, low-value, and inactive customers.</p>
                <p className="cluster-strategy"><strong>Strategy:</strong> Use targeted campaigns or time-limited discounts to encourage repeat purchases.</p>
              </div>

              <div className="cluster-item">
                <div className="cluster-header">
                  <span className="cluster-label cluster-2">Cluster 2 – "Nurture"</span>
                </div>
                <p className="cluster-description">Low-value but recent buyers.</p>
                <p className="cluster-strategy"><strong>Strategy:</strong> Offer tailored recommendations and onboarding incentives to increase purchase frequency.</p>
              </div>

              <div className="cluster-item">
                <div className="cluster-header">
                  <span className="cluster-label cluster-3">Cluster 3 – "Reward"</span>
                </div>
                <p className="cluster-description">Highly loyal, high-value customers.</p>
                <p className="cluster-strategy"><strong>Strategy:</strong> Strengthen loyalty with exclusive perks and recognition-based rewards.</p>
              </div>
            </div>

            <ul className="section-list" style={{ marginTop: '30px' }}>
              <li>Performed a separate clustering analysis on outlier data, identifying specialized customer segments with distinct strategic value:</li>
            </ul>

            <div className="cluster-interpretation">
              <div className="cluster-item">
                <div className="cluster-header">
                  <span className="cluster-label cluster-outlier-1">Cluster –1 – "Pamper" (Monetary only Outliers)</span>
                </div>
                <p className="cluster-description">High spenders with infrequent purchases.</p>
                <p className="cluster-strategy"><strong>Strategy:</strong> Retain their loyalty through luxury offers and personalized experiences.</p>
              </div>

              <div className="cluster-item">
                <div className="cluster-header">
                  <span className="cluster-label cluster-outlier-2">Cluster –2 – "Upsell" (Frequency only Outliers)</span>
                </div>
                <p className="cluster-description">Frequent buyers with smaller purchase amounts.</p>
                <p className="cluster-strategy"><strong>Strategy:</strong> Encourage higher spending via bundle deals or loyalty-based upselling.</p>
              </div>

              <div className="cluster-item">
                <div className="cluster-header">
                  <span className="cluster-label cluster-outlier-3">Cluster –3 – "Delight" (Monetary & Frequency Outliers)</span>
                </div>
                <p className="cluster-description">Extremely high-value, frequent buyers.</p>
                <p className="cluster-strategy"><strong>Strategy:</strong> Maintain engagement through VIP programs and exclusive benefits.</p>
              </div>
            </div>
            
            <div className="image-gallery horizontal">
              <div className="image-item">
                <img 
                  src="/assets/projects/rfm_analysis_dashboard/violin-plot-nonoutlier-data.png" 
                  alt="Violin Plot - Non-Outlier Data" 
                  className="gallery-image"
                />
                <p className="image-caption">
                  <strong>Violin Plot - Main Dataset:</strong> Distribution of RFM values across the four main customer clusters (0-3). Each violin shows the density distribution of Monetary Value, Recency, and Frequency for each cluster, with the grey reference violin representing overall dataset averages. This visualization helps identify the distinct behavioral patterns that define each customer segment.
                </p>
              </div>
              
              <div className="image-item">
                <img 
                  src="/assets/projects/rfm_analysis_dashboard/violin-plot-outlier-data.png" 
                  alt="Violin Plot - Outlier Data" 
                  className="gallery-image"
                />
                <p className="image-caption">
                  <strong>Violin Plot - Outlier Data:</strong> Distribution analysis of the specialized outlier clusters (-1 to -3) that were separated from the main dataset. These high-value customers exhibit extreme purchasing behaviors that would have skewed the main clustering analysis. The plots reveal the unique characteristics of these premium customer segments requiring specialized marketing strategies.
                </p>
              </div>
            </div>
          </div>

          <div className="project-detail-section">
            <h2 className="section-title">Results & Insights</h2>
            <ul className="section-list">
              <li>The RFM clustering analysis identified 7 distinct customer segments, revealing a Pareto pattern where roughly 25% of customers drive most of the revenue. High-value segments (Delight, Pamper, Upsell) represent this top tier, while the remaining 75% fall into lower-value groups (Nurture, Retain, Re-Engage) requiring targeted engagement.</li>
              <li>Notably, the Nurture segment accounts for around 35% of the total customer base, consisting largely of new or inactive customers. This presents a major growth opportunity by investing in onboarding campaigns, personalized recommendations, and targeted offers, businesses can convert these customers into loyal, higher-value buyers.</li>
              <li>Meanwhile, Delight and Pamper customers (high-spend and loyal segments) should be prioritized for retention programs and exclusive loyalty rewards, while Upsell customers benefit most from cross-sell and bundle promotions to increase purchase value.</li>
              <li>These insights enable data-driven marketing, ensuring resources are focused on both protecting high-value relationships and activating untapped potential within the broader customer base.</li>
            </ul>
            
            <div className="image-gallery">
              <div className="image-item">
                <img 
                  src="/assets/projects/rfm_analysis_dashboard/final-cluster-distribution.png" 
                  alt="Final Cluster Distribution" 
                  className="gallery-image"
                />
                <p className="image-caption">
                  <strong>Final Cluster Distribution:</strong> Complete customer segmentation results showing the distribution of customers across all 7 clusters along with the average RFM values for each cluster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
