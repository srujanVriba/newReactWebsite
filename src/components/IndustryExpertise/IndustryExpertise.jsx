import React from 'react';
import './IndustryExpertise.css';

const IndustryExpertise = () => {
  const industries = [
    {
      id: 1,
      title: "Aviation",
      description: "We innovate the commercial aviation-spanning applications, databases, and infrastructure \"below and above the wing\" in a SaaS/PaaS/IaaS.",
      backgroundImage: "/src/assets/images/aviation-bg.png"
    },
    {
      id: 2,
      title: "Consumer Packed Goods",
      description: "Utilize cutting-edge digital and AI transformation tools to modernize and automate legacy applications, databases, and infrastructure.",
      backgroundImage: "/src/assets/images/cpg-bg.png"
    },
    {
      id: 3,
      title: "Communication Services",
      description: "Delivering product implementation, project services, and maintenance for the next-gen networks of key telecom players.",
      backgroundImage: "/src/assets/images/telecom-bg.png"
    },
    {
      id: 4,
      title: "Education",
      description: "Navigating tomorrow's Tech Landscape: Empowering Minds through IT Enablement.",
      backgroundImage: "/src/assets/images/education-bg.png"
    },
    {
      id: 5,
      title: "HealthCare",
      description: "Team supporting health plans nationwide for Telehealth and In–Home visits with enhanced clinical services.",
      backgroundImage: "/src/assets/images/healthcare-bg.png"
    },
    {
      id: 6,
      title: "Retail Services",
      description: "Modernizing retail for latest technology for better end user experience, less operations and optimized Business.",
      backgroundImage: "/src/assets/images/retail-bg.png"
    }
  ];

  return (
    <section className="industry-expertise">
      {/* Background Effect */}
      <div className="industry-bg-effect"></div>
      
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="title-line"></div>
            <h2>Industry Expertise</h2>
            <div className="title-line"></div>
          </div>
          <p className="section-description">
            Custom digital transformation crafted to tackle each sector's unique challenges and drive growth.
          </p>
          <button className="btn-primary">See All</button>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={industry.id} className="industry-card">
              <div 
                className="industry-bg"
                style={{ backgroundImage: `url(${industry.backgroundImage})` }}
              ></div>
              <div className="industry-content">
                <h3 className="industry-title">{industry.title}</h3>
                <p className="industry-description">{industry.description}</p>
                <button className="industry-btn">Know More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertise;
