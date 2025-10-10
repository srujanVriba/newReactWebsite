import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Images */}
      <div className="hero-bg-overlay"></div>
      <div className="hero-bg-image"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-subtitle">
              We continuously strive to stay ahead of the curve and deliver cutting-edge solutions.
            </p>
            <h1 className="hero-title">
              Empowering businesses with Agentic AI solutions that act, learn, and adapt
              autonomously to drive real outcomes
            </h1>
            <div className="hero-actions">
              <button className="btn-primary">What we can offer</button>
              <button className="btn-outline">Get a free quote</button>
            </div>
          </div>
          
          <div className="servicenow-announcement">
            <div className="announcement-content">
              <img src="/src/assets/images/servicenow-logo.svg" alt="ServiceNow" className="servicenow-logo" />
              <p className="announcement-text">
                We are now ServiceNow Consulting
                and Implementation Partner for North
                America
              </p>
              <button className="announcement-btn">Talk to our expert</button>
            </div>
            <div className="announcement-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
