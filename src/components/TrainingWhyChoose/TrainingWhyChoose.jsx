import React from 'react';
import './TrainingWhyChoose.css';

const TrainingWhyChoose = () => {
  return (
    <section className="training-why-choose">
      <div className="background-effect"></div>
      
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <span>Why Choose Us</span>
            <div className="title-line"></div>
          </div>
          
          <div className="section-content">
            <h2>Why Choose Vriba's Generative AI Course?</h2>
            <p>
              From predictive diagnostics to creative content, generative AI is revolutionizing every industry. 
              Learn why now is the perfect time to build in-demand skills.
            </p>
            <button className="see-how-button">See How We Do It</button>
          </div>
        </div>
        
        <div className="benefits-grid">
          <div className="benefits-row">
            <div className="benefit-card">
              <div className="card-image">
                <img src="/src/assets/images/cutting-edge-curriculum.png" alt="Cutting-Edge Curriculum" />
              </div>
              <div className="card-content">
                <h3>Cutting-Edge Curriculum</h3>
                <p>
                  Our curriculum is constantly updated to reflect the latest advancements in generative AI, 
                  ensuring that you are learning the most relevant and in-demand skills.
                </p>
                <span className="know-more">Know More</span>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="card-image">
                <img src="/src/assets/images/hands-on-learning.png" alt="Hands-On Learning" />
              </div>
              <div className="card-content">
                <h3>Hands-On Learning</h3>
                <p>
                  Dive into real-world projects and experiment with generative tools, from text-to-image 
                  models to AI-driven content generation.
                </p>
                <span className="know-more">Know More</span>
              </div>
            </div>
          </div>
          
          <div className="benefits-row">
            <div className="benefit-card">
              <div className="card-image">
                <img src="/src/assets/images/expert-mentorship.png" alt="Expert Mentorship" />
              </div>
              <div className="card-content">
                <h3>Expert Mentorship</h3>
                <p>
                  Learn from leading experts and researchers shaping the field of artificial intelligence.
                </p>
                <span className="know-more">Know More</span>
              </div>
            </div>
            
            <div className="benefit-card">
              <div className="card-image">
                <img src="/src/assets/images/career-accelerator.png" alt="Career Accelerator" />
              </div>
              <div className="card-content">
                <h3>Career Accelerator</h3>
                <p>
                  Gain in-demand skills that companies across industries are actively seeking.
                </p>
                <span className="know-more">Know More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingWhyChoose;
