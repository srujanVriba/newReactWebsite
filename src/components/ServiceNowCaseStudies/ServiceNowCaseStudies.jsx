import React from 'react';
import './ServiceNowCaseStudies.css';

const ServiceNowCaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Aviation Industry",
      description: "We innovate the commercial aviation-spanning applications, databases, and infrastructure \"below and above the wing\" in a SaaS/PaaS/IaaS.",
      author: "Mark Tuchel",
      date: "Mar 1, 2025",
      readTime: "7 min read",
      backgroundImage: "/src/assets/images/aviation-bg.png"
    },
    {
      id: 2,
      title: "HealthCare Industry",
      description: "Team supporting health plans nationwide for Telehealth and In–Home visits with enhanced clinical services.",
      author: "Mark Tuchel",
      date: "Mar 1, 2025",
      readTime: "7 min read",
      backgroundImage: "/src/assets/images/healthcare-bg.png"
    },
    {
      id: 3,
      title: "Education",
      description: "Navigating tomorrow's Tech Landscape: Empowering Minds through IT Enablement.",
      author: "Mark Tuchel",
      date: "Mar 1, 2025",
      readTime: "7 min read",
      backgroundImage: "/src/assets/images/education-bg.png"
    }
  ];

  return (
    <section className="servicenow-case-studies">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="title-line"></div>
            <h2>Case Study</h2>
            <div className="title-line"></div>
          </div>
          <h3 className="main-title">Customer Success From ServiceNow Implementations</h3>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <div key={study.id} className="case-study-card">
              <div 
                className="case-study-bg"
                style={{ backgroundImage: `url(${study.backgroundImage})` }}
              ></div>
              <div className="case-study-content">
                <div className="case-study-meta">
                  <h4 className="case-study-title">{study.title}</h4>
                  <div className="case-study-info">
                    <div className="author-date">
                      <span className="date">{study.date}</span>
                      <span className="author">By {study.author}</span>
                    </div>
                  </div>
                </div>
                <p className="case-study-description">{study.description}</p>
                <div className="case-study-footer">
                  <span className="read-time">{study.readTime}</span>
                  <button className="read-more-btn">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceNowCaseStudies;
