import React from 'react';
import './WhyChooseAviation.css';

const WhyChooseAviation = () => {
  const features = [
    {
      id: 1,
      title: "Aviation DNA",
      description: "Our experts live and breathe airline operations—from A-checks to air-traffic control.",
      icon: "✈️"
    },
    {
      id: 2,
      title: "End-to-End Partnership",
      description: "Strategy, architecture, implementation, and 24/7 support—all under one roof.",
      icon: "🤝"
    },
    {
      id: 3,
      title: "Faster Innovation",
      description: "Proprietary accelerators slash deployment time so you capture new revenue streams sooner.",
      icon: "⚡"
    },
    {
      id: 4,
      title: "Tangible ROI",
      description: "Measurable gains in uptime, fuel savings, crew utilization, and passenger satisfaction.",
      icon: "📈"
    },
    {
      id: 5,
      title: "Global Reach, Local Touch",
      description: "On-site teams in major hubs plus a U.S. help desk ready around the clock.",
      icon: "🌍"
    },
    {
      id: 6,
      title: "Security & Compliance by Design",
      description: "Built-in DevSecOps and automated audit trails keep you ahead of evolving threats.",
      icon: "🔒"
    }
  ];

  return (
    <section className="why-choose-aviation">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="title-line"></div>
            <h2>Why Choose Us</h2>
            <div className="title-line"></div>
          </div>
          
          <h3 className="main-title">Why Vriba for Aviation</h3>
          
          <p className="section-description">
            Empowering aviation leaders with tailored, secure, and compliance-driven IT solutions at every altitude.
          </p>
        </div>
        
        <div className="features-grid">
          <div className="features-row">
            {features.slice(0, 2).map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">
                  <span className="icon">{feature.icon}</span>
                </div>
                
                <div className="feature-content">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="features-row">
            {features.slice(2, 4).map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">
                  <span className="icon">{feature.icon}</span>
                </div>
                
                <div className="feature-content">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="features-row">
            {features.slice(4, 6).map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">
                  <span className="icon">{feature.icon}</span>
                </div>
                
                <div className="feature-content">
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAviation;
