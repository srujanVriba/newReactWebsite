import React from 'react';
import './ServiceNowHero.css';

const ServiceNowHero = () => {
  return (
    <section className="servicenow-hero">
      {/* Background Image */}
      <div className="hero-bg-image"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            {/* Breadcrumb */}
            <div className="breadcrumb">
              <div className="breadcrumb-item">Home</div>
              <div className="breadcrumb-separator">/</div>
              <div className="breadcrumb-item">Solutions</div>
              <div className="breadcrumb-separator">/</div>
              <div className="breadcrumb-item">ServiceNow</div>
            </div>

            {/* ServiceNow Logo */}
            <img src="/src/assets/images/servicenow-logo-large.svg" alt="ServiceNow" className="servicenow-logo" />

            {/* Hero Title */}
            <h1 className="hero-title">Making your business future-ready</h1>

            {/* Hero Description */}
            <p className="hero-description">
              Streamline workflows, automate processes, and elevate your
              digital service delivery with Vriba's certified ServiceNow
              experts.
            </p>

            {/* CTA Button */}
            <button className="cta-button">
              Talk to an expert
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="hero-right">
            {/* Consultation Form */}
            <div className="consultation-form">
              <div className="form-header">
                <h3 className="form-title">Get Your Consultation</h3>
                <p className="form-subtitle">Fill the details, our experts will be in touch</p>
              </div>

              <div className="form-fields">
                <div className="form-row">
                  <div className="form-field">
                    <label>Full Name</label>
                    <input type="text" placeholder="eg; John Doe" />
                  </div>
                  <div className="form-field">
                    <label>Email</label>
                    <input type="email" placeholder="eg; johndoe@gmail.com" />
                  </div>
                </div>
                
                <div className="form-field full-width">
                  <label>Message</label>
                  <div className="select-wrapper">
                    <select>
                      <option>Select</option>
                    </select>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              <button className="submit-button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceNowHero;
