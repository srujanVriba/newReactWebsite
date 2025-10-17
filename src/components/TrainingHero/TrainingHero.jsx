import React from 'react';
import './TrainingHero.css';

const TrainingHero = () => {
  return (
    <section className="training-hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="breadcrumb">
            <span>Home</span>
            <span>/</span>
            <span>Training</span>
          </div>
          
          <h1>Unlock Your AI Potential</h1>
          
          <p className="hero-description">
            Join Vriba's Generative AI Course — Master the tools, techniques & real-world projects that top employers demand.
          </p>
          
          <p className="enrollment-stats">
            7,123 Already Enrolled!<br />
            The next success story could be you.
          </p>
        </div>
        
        <div className="course-card">
          <div className="course-image">
            <img src="/src/assets/images/training-hero-image-46908b.png" alt="Generative AI Course" />
          </div>
          
          <div className="course-content">
            <h2>Generative AI Course</h2>
            
            <div className="course-details">
              <span>Course duration – 60 hours</span>
              <span>Instructor led live-interactive training</span>
            </div>
            
            <button className="enroll-button">Enroll Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingHero;
