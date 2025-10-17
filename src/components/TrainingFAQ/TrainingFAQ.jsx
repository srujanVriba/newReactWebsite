import React from 'react';
import './TrainingFAQ.css';

const TrainingFAQ = () => {
  return (
    <section className="training-faq">
      <div className="background-effect"></div>
      
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <span>Frequently Asked Questions</span>
            <div className="title-line"></div>
          </div>
          
          <h2>Your curiosity meets our expertise, Let's clear things up!</h2>
        </div>
        
        <div className="faq-container">
          <div className="faq-item active">
            <div className="faq-header">
              <h3>How often is the course updated?</h3>
              <div className="expand-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="faq-content">
              <p>
                We strive to keep the course content up-to-date with the latest advancements in Generative AI. 
                The course is typically updated regularly to reflect new techniques, tools, and best practices.
              </p>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-header">
              <h3>Will I receive a certificate upon completion of the course?</h3>
              <div className="expand-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-header">
              <h3>What are the career opportunities after completing the Generative AI course?</h3>
              <div className="expand-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingFAQ;
