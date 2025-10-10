import React from 'react';
import './WhatWeSolve.css';

const WhatWeSolve = () => {
  const challenges = [
    {
      id: 1,
      title: "Unplanned Downtime",
      description: "AI-driven predictive maintenance catches issues before they ground your aircraft.",
      backgroundImage: "/src/assets/images/unplanned-downtime-bg.png"
    },
    {
      id: 2,
      title: "Data Silos",
      description: "Integrated platforms unite flight operations, maintenance, and passenger services under one dashboard.",
      backgroundImage: "/src/assets/images/data-silos-bg.png"
    },
    {
      id: 3,
      title: "Regulatory Burden",
      description: "Automated compliance workflows simplify audits and reporting across FAA, EASA, and local regulators.",
      backgroundImage: "/src/assets/images/regulatory-burden-bg.png"
    },
    {
      id: 4,
      title: "Ground-Handling Bottlenecks",
      description: "Intelligent automation accelerates fueling, baggage, and turnaround processes.",
      backgroundImage: "/src/assets/images/ground-handling-bg.png"
    },
    {
      id: 5,
      title: "Revenue Leakage",
      description: "Dynamic pricing and loyalty integrations maximize every seat and ancillary sale.",
      backgroundImage: "/src/assets/images/revenue-leakage-bg.png"
    },
    {
      id: 6,
      title: "Security Gaps",
      description: "Continuous DevSecOps and threat monitoring protect your critical systems and passenger data.",
      backgroundImage: "/src/assets/images/security-gaps-bg.png"
    }
  ];

  return (
    <section className="what-we-solve">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="title-line"></div>
            <h2>What We Solve</h2>
            <div className="title-line"></div>
          </div>
          
          <h3 className="main-title">From Turbulence to Triumph</h3>
          
          <p className="section-description">
            Empowering aviation leaders with tailored, secure, and compliance-driven IT solutions at every altitude.
          </p>
        </div>
        
        <div className="challenges-grid">
          <div className="challenges-row">
            {challenges.slice(0, 3).map((challenge) => (
              <div key={challenge.id} className="challenge-card">
                <div 
                  className="challenge-bg"
                  style={{ backgroundImage: `url(${challenge.backgroundImage})` }}
                ></div>
                <div className="challenge-content">
                  <h4 className="challenge-title">{challenge.title}</h4>
                  <p className="challenge-description">{challenge.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="challenges-row">
            {challenges.slice(3, 6).map((challenge) => (
              <div key={challenge.id} className="challenge-card">
                <div 
                  className="challenge-bg"
                  style={{ backgroundImage: `url(${challenge.backgroundImage})` }}
                ></div>
                <div className="challenge-content">
                  <h4 className="challenge-title">{challenge.title}</h4>
                  <p className="challenge-description">{challenge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeSolve;
