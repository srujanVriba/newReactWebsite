import React from 'react';
import './TrainingTargetAudience.css';

const TrainingTargetAudience = () => {
  return (
    <section className="training-target-audience">
      <div className="background-effects">
        <div className="bg-effect-1"></div>
        <div className="bg-effect-2"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="title-line"></div>
            <span>Who Should Enroll</span>
            <div className="title-line"></div>
          </div>
          
          <h2>Is This Right for You?</h2>
        </div>
        
        <div className="audience-content">
          <div className="audience-grid">
            <div className="audience-card">
              <div className="card-image">
                <img src="/src/assets/images/students-audience.png" alt="Students" />
              </div>
              <div className="card-content">
                <h3>Students</h3>
                <p>Jumpstart your AI career with curated projects.</p>
              </div>
            </div>
            
            <div className="audience-card">
              <div className="card-image">
                <img src="/src/assets/images/professionals-audience.png" alt="Professionals" />
              </div>
              <div className="card-content">
                <h3>Professionals</h3>
                <p>Level up your skill set and stay ahead in your field.</p>
              </div>
            </div>
            
            <div className="audience-card">
              <div className="card-image">
                <img src="/src/assets/images/entrepreneurs-audience.png" alt="Entrepreneurs" />
              </div>
              <div className="card-content">
                <h3>Entrepreneurs</h3>
                <p>Harness AI to innovate new offerings and business models.</p>
              </div>
            </div>
          </div>
          
          <div className="cta-section">
            <div className="cta-content">
              <p>
                Whether you're just starting out or scaling up,<br />
                Vriba's course adapts to your goals.
              </p>
              <button className="enroll-cta">
                <span>Enroll Now</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="cta-effects">
              <div className="cta-effect-1"></div>
              <div className="cta-effect-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingTargetAudience;
