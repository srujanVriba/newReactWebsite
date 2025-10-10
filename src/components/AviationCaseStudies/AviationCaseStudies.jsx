import React from 'react';
import './AviationCaseStudies.css';

const AviationCaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Aviation Industry",
      description: "We innovate the commercial aviation-spanning applications, databases, and infrastructure \"below and above the wing\" in a SaaS/PaaS/IaaS.",
      date: "Mar 1, 2025",
      author: "By Mark Tuchel",
      readTime: "7 min read",
      backgroundImage: "/src/assets/images/aviation-case-study-bg.png"
    },
    {
      id: 2,
      title: "HealthCare Industry",
      description: "Team supporting health plans nationwide for Telehealth and In–Home visits with enhanced clinical services.",
      date: "Mar 1, 2025",
      author: "By Mark Tuchel",
      readTime: "7 min read",
      backgroundImage: "/src/assets/images/healthcare-case-study-bg.png"
    },
    {
      id: 3,
      title: "Education",
      description: "Navigating tomorrow's Tech Landscape: Empowering Minds through IT Enablement.",
      date: "Mar 1, 2025",
      author: "By Mark Tuchel",
      readTime: "7 min read",
      backgroundImage: "/src/assets/images/education-case-study-bg.png"
    }
  ];

  return (
    <section className="aviation-case-studies">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="title-line"></div>
            <h2>Case Study</h2>
            <div className="title-line"></div>
          </div>
          
          <h3 className="main-title">Customer Success In Aviation</h3>
        </div>
        
        <div className="case-studies-grid">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="case-study-card">
              <div 
                className="case-study-bg"
                style={{ backgroundImage: `url(${caseStudy.backgroundImage})` }}
              ></div>
              
              <div className="case-study-content">
                <div className="case-study-meta">
                  <h4 className="case-study-title">{caseStudy.title}</h4>
                  <div className="case-study-info">
                    <div className="author-date">
                      <span className="date">{caseStudy.date}</span>
                      <span className="author">{caseStudy.author}</span>
                    </div>
                  </div>
                </div>
                
                <p className="case-study-description">{caseStudy.description}</p>
                
                <div className="case-study-footer">
                  <span className="read-time">{caseStudy.readTime}</span>
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

export default AviationCaseStudies;
