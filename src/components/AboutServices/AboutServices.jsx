import React from 'react';
import './AboutServices.css';

const AboutServices = () => {
  return (
    <section className="about-services">
      <div className="container">
        <div className="services-header">
          <div className="section-title">
            <div className="title-line"></div>
            <span>What We Do</span>
            <div className="title-line"></div>
          </div>
          
          <h2>From Data Dreams to Digital Reality</h2>
        </div>
        
        <div className="services-grid">
          <div className="services-row">
            <div className="service-card">
              <div className="service-image">
                <img src="/src/assets/images/data-ai-service.png" alt="Data & AI" />
              </div>
              <div className="service-content">
                <h3>Data & AI</h3>
                <p>
                  Unlock actionable insights and predictive capabilities with business intelligence, 
                  data analytics, and machine learning solutions.
                </p>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-image">
                <img src="/src/assets/images/cloud-service.png" alt="Cloud" />
              </div>
              <div className="service-content">
                <h3>Cloud</h3>
                <p>
                  Enable scalable, secure, and efficient cloud expert engineering, seamless migrations, 
                  and integrated DevSecOps practices.
                </p>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-image">
                <img src="/src/assets/images/products-service.png" alt="Products" />
              </div>
              <div className="service-content">
                <h3>Products</h3>
                <p>
                  Design and develop robust digital applications and platforms that deliver user 
                  experiences and drive measurable business value.
                </p>
              </div>
            </div>
          </div>
          
          <div className="services-row">
            <div className="service-card">
              <div className="service-image">
                <img src="/src/assets/images/data-ai-service.png" alt="Cybersecurity" />
              </div>
              <div className="service-content">
                <h3>Cybersecurity</h3>
                <p>
                  Protect your critical assets with end-to-end cloud security, data protection, 
                  and governance, risk, and compliance services
                </p>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-image">
                <img src="/src/assets/images/cloud-service.png" alt="Digital Experience" />
              </div>
              <div className="service-content">
                <h3>Digital Experience</h3>
                <p>
                  Elevate engagement and operational agility with application modernization, 
                  automation, mobility, and integrated digital platforms.
                </p>
              </div>
            </div>
            
            <div className="service-card">
              <div className="service-image">
                <img src="/src/assets/images/products-service.png" alt="Consulting" />
              </div>
              <div className="service-content">
                <h3>Consulting</h3>
                <p>
                  Provide strategic IT governance, architecture, and advisory services to align 
                  technology roadmaps with your business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
