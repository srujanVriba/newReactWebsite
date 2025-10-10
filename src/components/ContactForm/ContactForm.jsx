import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="form-container">
        <div className="form-header">
          <h2>Talk to Our Expert</h2>
          <p>Fill the details, our experts will be in touch</p>
        </div>
        
        <form className="contact-form-fields">
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="eg; John Doe"
                className="form-input"
              />
            </div>
            
            <div className="form-field">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="eg; johndoe@gmail.com"
                className="form-input"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="eg; johndoe@gmail.com"
                className="form-input"
              />
            </div>
            
            <div className="form-field">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                placeholder="eg; +882"
                className="form-input"
              />
            </div>
          </div>
          
          <div className="form-field full-width">
            <label htmlFor="message">Message</label>
            <select id="message" className="form-select">
              <option value="">Select</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="sales">Sales Inquiry</option>
              <option value="partnership">Partnership</option>
            </select>
          </div>
          
          <button type="submit" className="submit-button">
            Submit
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
