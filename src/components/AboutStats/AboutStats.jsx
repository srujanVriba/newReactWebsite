import React from 'react';
import './AboutStats.css';

const AboutStats = () => {
  return (
    <section className="about-stats">
      <div className="container">
        <div className="stats-header">
          <div className="section-title">
            <div className="title-line"></div>
            <span>Why Choose Vriba?</span>
            <div className="title-line"></div>
          </div>
          
          <h2>
            As the digital marketplace has expanded considerably, here are a handful of our valued customer partners
          </h2>
        </div>
        
        <div className="stats-content">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>20+</h3>
              <p>Global clients</p>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item">
              <h3>95%</h3>
              <p>Business growth</p>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item">
              <h3>100+</h3>
              <p>Project delivered</p>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item">
              <h3>05</h3>
              <p>Worldwide offices</p>
            </div>
          </div>
          
          <div className="cta-buttons">
            <button className="btn-primary">Explore our work</button>
            <button className="btn-outline">Get a free quote</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
