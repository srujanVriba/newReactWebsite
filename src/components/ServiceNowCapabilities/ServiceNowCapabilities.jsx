import React from 'react';
import './ServiceNowCapabilities.css';

const ServiceNowCapabilities = () => {
  const capabilities = [
    {
      id: 1,
      title: "IT Service Management",
      description: "Automate incident, problem, and change management"
    },
    {
      id: 2,
      title: "ServiceNow Integrations",
      description: "Connect ServiceNow with Splunk, Azure, AWS, and more"
    },
    {
      id: 3,
      title: "IT Operations managment",
      description: "Improve visibility and reduce outages with real-time monitoring"
    },
    {
      id: 4,
      title: "Custom App Development",
      description: "Build tailored ServiceNow apps for aviation, finance, and operations"
    },
    {
      id: 5,
      title: "Post-Go-Live Optimization",
      description: "Continuous improvement and platform governance"
    }
  ];

  return (
    <section className="servicenow-capabilities">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="title-line"></div>
            <h2>Services</h2>
            <div className="title-line"></div>
          </div>
          <h3 className="main-title">ServiceNow Capabilities</h3>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((capability) => (
            <div key={capability.id} className="capability-card">
              <div className="capability-content">
                <h4 className="capability-title">{capability.title}</h4>
                <p className="capability-description">{capability.description}</p>
              </div>
              <button className="know-more-btn">Know More</button>
            </div>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="section-decoration"></div>
      </div>
    </section>
  );
};

export default ServiceNowCapabilities;
