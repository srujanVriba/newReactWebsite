import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Accelerate Automation",
      backgroundImage: "/src/assets/images/automation-bg.png"
    },
    {
      id: 2,
      title: "Data-Driven\nDecisions",
      backgroundImage: "/src/assets/images/data-driven-bg.png"
    },
    {
      id: 3,
      title: "Enterprise-Grade Security",
      backgroundImage: "/src/assets/images/security-bg.png"
    },
    {
      id: 4,
      title: "Global Delivery\nModel",
      backgroundImage: "/src/assets/images/global-delivery-bg.png"
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="title-line"></div>
            <h2>Why Choose Us</h2>
            <div className="title-line"></div>
          </div>
          <p className="section-description">
            Scalable Cloud, AI-Powered Insights, and Enterprise-Grade Security to Accelerate Your Business Growth
          </p>
          <button className="btn-primary">See How We Do It</button>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div 
                className="feature-bg"
                style={{ backgroundImage: `url(${feature.backgroundImage})` }}
              >
                <div className="feature-overlay"></div>
                <h3 className="feature-title">{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
