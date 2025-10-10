import React from 'react';
import './AviationServices.css';

const AviationServices = () => {
  const services = [
    {
      id: 1,
      title: "Internet Operations & Cloud",
      description: "Build resilient, scalable cloud infrastructures that drive 24/7 availability and cost efficiency.",
      backgroundImage: "/src/assets/images/cloud-infrastructure-bg.png"
    },
    {
      id: 2,
      title: "Business Intelligence & Analytics",
      description: "Turn flight, maintenance, and passenger data into real-time dashboards and predictive insights.",
      backgroundImage: "/src/assets/images/bi-analytics-bg.png"
    },
    {
      id: 3,
      title: "Operations & Enterprise Technical Solutions",
      description: "Modernize legacy systems, integrate MRO, crew management, and ground-services applications.",
      backgroundImage: "/src/assets/images/operations-enterprise-bg.png"
    },
    {
      id: 4,
      title: "Enterprise Technical Solutions",
      description: "Deploy ERP, CRM, and collaboration platforms designed for aviation's unique demands.",
      backgroundImage: "/src/assets/images/enterprise-solutions-bg.png"
    },
    {
      id: 5,
      title: "PMO Excellence",
      description: "Ensure on-time, on-budget delivery of your IT initiatives with proven governance frameworks.",
      backgroundImage: "/src/assets/images/pmo-excellence-bg.png"
    }
  ];

  return (
    <section className="aviation-services">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="title-line"></div>
            <h2>Services</h2>
            <div className="title-line"></div>
          </div>
          
          <h3 className="main-title">Key Challenges We Solve</h3>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div 
                className="service-bg"
                style={{ backgroundImage: `url(${service.backgroundImage})` }}
              ></div>
              
              <div className="service-content">
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </div>
              
              <button className="know-more-btn">
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AviationServices;
