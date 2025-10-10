import React from 'react';
import './OurServices.css';

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Cloud Solutions",
      subtitle: "Scale on demand. Optimize costs. Secure your infrastructure.",
      description: "We architect, migrate, and manage your public, private, and hybrid cloud environments to maximize performance and resilience.",
      tags: ["Cloud Engineering", "Cloud Engineering", "DevSecOps"]
    },
    {
      id: 2,
      title: "Data Analytics & AI",
      subtitle: "Turn data into actionable insights and intelligent automation.",
      description: "Leverage business intelligence, advanced analytics, and machine intelligence to uncover opportunities, inform strategy, and automate processes.",
      tags: ["BI & Data Visualization", "Data Strategy & Governance", "Machine Learning & NLP", "AI Model Deployment & Scaling"],
      highlighted: true
    },
    {
      id: 3,
      title: "Program & Project Management",
      subtitle: "Deliver complex initiatives on time and on budget.",
      description: "Our certified PMO experts oversee portfolio governance, implement PPM tools, and apply agile best practices to ensure predictable, high-quality outcomes.",
      tags: ["Portfolio & Program Governance", "PPM Implementations", "Automation & BOT/POC Engagement Models", "Responsive & Mobile-First Design"]
    },
    {
      id: 4,
      title: "Digital Experiences",
      subtitle: "Engage and delight users across every digital touchpoint.",
      description: "From mobile apps to enterprise portals, we design, build, and sustain modern applications that drive customer engagement, streamline workflows, and adapt as your needs evolve.",
      tags: ["Application Modernization & Integration", "Custom Web & Mobile Platforms", "Automation & BOT/PoD Engagement", "Ongoing Support & Maintenance", "Mobility & Responsive Design", "Digital Applications & Platforms"]
    }
  ];

  return (
    <section className="our-services">
      {/* Background Effects */}
      <div className="service-bg-effect-1"></div>
      <div className="service-bg-effect-2"></div>
      
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="title-line"></div>
            <h2>Our Services</h2>
            <div className="title-line"></div>
          </div>
          <p className="section-description">
            Cutting-Edge Tech Solutions For Your Business
          </p>
        </div>

        <div className="services-content">
          {services.map((service, index) => (
            <div key={service.id} className={`service-item ${service.highlighted ? 'highlighted' : ''}`}>
              {index > 0 && <div className="service-divider"></div>}
              
              <div className="service-card">
                <div className="service-header">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-subtitle">{service.subtitle}</p>
                  {service.highlighted && (
                    <div className="service-actions">
                      <button className="btn-white">See Full List</button>
                      <button className="btn-outline-white">Let's Get Started</button>
                    </div>
                  )}
                </div>
                
                <div className="service-content">
                  <p className="service-description">{service.description}</p>
                  <div className="service-tags">
                    {service.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="service-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-actions">
          <button className="btn-primary">See All Services</button>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
