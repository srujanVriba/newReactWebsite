import React from 'react';
import './CareersHero.css';

const CareersHero = () => {
  return (
    <section className="careers-hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="breadcrumb">
            <span>Home</span>
            <span>/</span>
            <span>Insights</span>
            <span>/</span>
            <span>Article</span>
          </div>
          
          <h1>Careers</h1>
          
          <p className="hero-description">
            The quality of speech synthesis in GPT-4o is outstanding, reminiscent of Google Duplex, albeit with a more successful execution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
