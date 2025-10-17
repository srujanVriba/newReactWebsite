import React from 'react';
import './ImplementationRoadmap.css';

const ImplementationRoadmap = () => {
  const roadmapSteps = [
    {
      id: 1,
      title: "Discovery & Alignment",
      duration: "3 - 7 Days",
      icon: "/src/assets/images/discovery-icon.svg"
    },
    {
      id: 2,
      title: "Agile Build & Configuration",
      duration: "3 - 6 Weeks",
      icon: "/src/assets/images/agile-build-icon.svg"
    },
    {
      id: 3,
      title: "Onboarding & Change Enablement",
      duration: "2 - 3 Weeks",
      icon: "/src/assets/images/onboarding-icon.svg"
    },
    {
      id: 4,
      title: "Optimization & Scaling",
      duration: "Ongoing",
      icon: "/src/assets/images/optimization-icon.svg"
    }
  ];

  return (
    <section className="implementation-roadmap">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="title-line"></div>
            <h2>Our Roadmap</h2>
            <div className="title-line"></div>
          </div>
          <h3 className="main-title">Vriba's ServiceNow Implementation Roadmap</h3>
        </div>

        <div className="roadmap-content">
          <div className="roadmap-grid">
            <div className="roadmap-row">
              {roadmapSteps.slice(0, 2).map((step) => (
                <div key={step.id} className="roadmap-step">
                  <div className="step-icon">
                    <img src={step.icon} alt={step.title} />
                  </div>
                  <div className="step-content">
                    <h4 className="step-title">{step.title}</h4>
                    <div className="step-duration">
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="roadmap-divider"></div>

            <div className="roadmap-row">
              {roadmapSteps.slice(2, 4).map((step) => (
                <div key={step.id} className="roadmap-step">
                  <div className="step-icon">
                    <img src={step.icon} alt={step.title} />
                  </div>
                  <div className="step-content">
                    <h4 className="step-title">{step.title}</h4>
                    <div className="step-duration">
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="roadmap-cta">
            <h4 className="cta-title">Ready to see what ServiceNow can do for you?</h4>
            <button className="cta-button">
              Talk to an expert
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4.16669 10H15.8334M15.8334 10L10.8334 5M15.8334 10L10.8334 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationRoadmap;
