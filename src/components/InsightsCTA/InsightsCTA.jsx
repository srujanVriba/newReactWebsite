import React from 'react';
import './InsightsCTA.css';

const InsightsCTA = () => {
  return (
    <section className="insights-cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Stay Ahead of the Curve</h2>
          
          <p className="cta-description">
            Let's chart your course to higher efficiency, revenue, and reliability.
          </p>
          
          <button className="cta-button">
            Subscribe Now
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Background Elements */}
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
      </div>
    </section>
  );
};

export default InsightsCTA;
