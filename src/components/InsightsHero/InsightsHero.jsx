import React from 'react';
import './InsightsHero.css';

const InsightsHero = () => {
  return (
    <section className="insights-hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <span>Home</span>
            <span>/</span>
            <span>Insights</span>
          </div>
          
          {/* Main Title */}
          <h1 className="hero-title">Insights & Updates</h1>
          
          {/* Description */}
          <p className="hero-description">
            Your go-to source for cutting-edge AI, cloud, and digital innovation insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsightsHero;
