import React from 'react';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="breadcrumb">
            <span>Home</span>
            <span>/</span>
            <span>About Us</span>
          </div>
          
          <h1>About Us</h1>
          
          <p className="hero-description">
            Delivering innovative cloud, AI, analytics, and digital solutions that drive growth and efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
