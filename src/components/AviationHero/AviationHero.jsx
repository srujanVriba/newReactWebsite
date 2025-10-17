import React from 'react';
import './AviationHero.css';

const AviationHero = () => {
  return (
    <section className="aviation-hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <span>Home</span>
            <span>/</span>
            <span>Aviation Industry</span>
          </div>
          
          {/* Main Title */}
          <h1 className="hero-title">Aviation</h1>
          
          {/* Description */}
          <p className="hero-description">
            From take-off to landing, Vriba's industry-tailored cloud, data, and digital services streamline every facet of your aviation enterprise.
          </p>
          
          {/* CTA Button */}
          <button className="hero-cta">
            Talk to an expert
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Hero Illustration */}
        <div className="hero-illustration">
          <img src="/src/assets/images/aviation-hero-illustration.png" alt="Aviation Industry Illustration" />
        </div>
      </div>
    </section>
  );
};

export default AviationHero;
