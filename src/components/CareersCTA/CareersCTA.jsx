import React from 'react';
import './CareersCTA.css';

const CareersCTA = () => {
  return (
    <section className="careers-cta">
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <div className="cta-title">
              <h2>Ready to Innovate Your Career?</h2>
            </div>
            
            <p className="cta-description">
              Join Vriba's team of trailblazers and help shape the future of cloud, AI, and digital transformation.
            </p>
            
            <button className="cta-button">
              Apply Now
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="cta-decoration">
            <div className="decoration-left"></div>
            <div className="decoration-right"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersCTA;
