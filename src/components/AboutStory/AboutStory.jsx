import React from 'react';
import './AboutStory.css';

const AboutStory = () => {
  return (
    <section className="about-story">
      <div className="container">
        <div className="story-content">
          <div className="story-text">
            <div className="section-title">
              <div className="title-line"></div>
              <span>About us</span>
              <div className="title-line"></div>
            </div>
            
            <h2>Our Story</h2>
            
            <p className="story-description">
              At Vriba, we're a pioneering technology partner committed to transforming businesses through 
              cutting-edge solutions. From cloud migrations and DevSecOps to data analytics and generative AI, 
              our interdisciplinary experts propel organizations forward with scalable, secure, and future-ready systems
            </p>
            
            <div className="quote-section">
              <div className="quote-mark">
                <svg width="31" height="24" viewBox="0 0 31 24" fill="none">
                  <path d="M0 24V9.6C0 4.8 3.2 0 9.6 0V4.8C5.6 4.8 4.8 7.2 4.8 9.6V12H9.6V24H0ZM19.2 24V9.6C19.2 4.8 22.4 0 28.8 0V4.8C24.8 4.8 24 7.2 24 9.6V12H28.8V24H19.2Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="quote-text">
                Vriba represents an IT company that is known for its versatility in providing solutions, 
                reliability in delivering projects, innovation in cutting-edge technologies, boldness in tackling 
                challenges, and agility in responding to the ever-changing tech landscape.
              </p>
            </div>
          </div>
          
          <div className="story-image">
            <img src="/src/assets/images/about-story-image.png" alt="About Vriba Story" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
