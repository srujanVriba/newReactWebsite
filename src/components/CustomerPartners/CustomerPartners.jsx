import React from 'react';
import './CustomerPartners.css';

const CustomerPartners = () => {
  return (
    <section className="customer-partners">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="title-line"></div>
            <h2>Our Customer Partners</h2>
            <div className="title-line"></div>
          </div>
          <p className="section-description">
            As the digital marketplace has expanded considerably, here are a handful of our valued customer partners
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">Global clients</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">Business growth</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">100+</div>
            <div className="stat-label">Project delivered</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">05</div>
            <div className="stat-label">Worldwide offices</div>
          </div>
        </div>

        {/* Partner logos would go here */}
        <div className="partner-logos">
          {/* Placeholder for partner logos */}
        </div>

        <div className="section-actions">
          <button className="btn-primary">Explore our work</button>
          <button className="btn-outline">Get a free quote</button>
        </div>
      </div>
    </section>
  );
};

export default CustomerPartners;
