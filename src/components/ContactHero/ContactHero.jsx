import React from 'react';
import './ContactHero.css';

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="breadcrumb">
            <span>Home</span>
            <span>/</span>
            <span>Contact Us</span>
          </div>
          
          <h1>Contact Us</h1>
          
          <p className="hero-description">
            Reach out for tailored technology solutions designed to transform your business and drive innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
