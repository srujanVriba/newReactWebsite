import React from 'react';
import './WhyChooseServiceNow.css';

const WhyChooseServiceNow = () => {
  const features = [
    {
      id: 1,
      title: "ServiceNow Strategy & Road Mapping",
      backgroundImage: "/src/assets/images/strategy-roadmapping-bg.png"
    },
    {
      id: 2,
      title: "Platform Optimization\n& Enhancements",
      backgroundImage: "/src/assets/images/platform-optimization-bg.png"
    },
    {
      id: 3,
      title: "Continuous Support\n& Innovation",
      backgroundImage: "/src/assets/images/continuous-support-bg.png"
    }
  ];

  return (
    <section className="why-choose-servicenow">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="title-line"></div>
            <h2>Why Choose Us</h2>
            <div className="title-line"></div>
          </div>
          <h3 className="main-title">Why Vriba for ServiceNow</h3>
          <p className="section-description">
            We partner with businesses to turn ServiceNow into a
            strategic asset — not just a platform. Whether you're
            looking to modernize IT, elevate employee experiences, or
            gain greater operational control, we tailor every solution
            to your unique goals. From roadmap planning to
            implementation and ongoing innovation, we ensure
            ServiceNow works for your business — delivering measurable
            impact, faster.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div 
                className="feature-bg"
                style={{ backgroundImage: `url(${feature.backgroundImage})` }}
              ></div>
              <div className="feature-content">
                <h4 className="feature-title">{feature.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseServiceNow;
