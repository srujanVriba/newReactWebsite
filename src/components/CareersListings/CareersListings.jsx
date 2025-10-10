import React from 'react';
import './CareersListings.css';

const CareersListings = () => {
  const jobs = [
    {
      id: 1,
      title: "Lead Generation Intern",
      description: "We are seeking a proactive and driven Lead Generation Intern to join our Raipur-based team.",
      type: "Full Time",
      location: "Remote",
      vacancies: "2 Vacancy",
      image: "/src/assets/images/lead-generation-intern.png"
    },
    {
      id: 2,
      title: "Game Developer",
      description: "We are looking for a talented Game Developer with hands-on experience building HTML5...",
      type: "Contractual",
      location: "Hybrid",
      vacancies: "2 Vacancy",
      image: "/src/assets/images/game-developer.png"
    },
    {
      id: 3,
      title: "Senior Video Editor",
      description: "We're looking for a Senior Video Editor with strong motion graphic skills to bring ideas...",
      type: "Part-time",
      location: "Jaipur, Rajasthan",
      vacancies: "2 Vacancy",
      image: "/src/assets/images/senior-video-editor.png"
    },
    {
      id: 4,
      title: "Oracle Fusion Developer",
      description: "We are seeking an experienced Oracle Fusion Developer with strong expertise in HRMS...",
      type: "Contractual",
      location: "Hybrid",
      vacancies: "2 Vacancy",
      image: "/src/assets/images/oracle-fusion-developer.png"
    },
    {
      id: 5,
      title: "OTM Functional Lead",
      description: "As an OTM Functional Lead, you'll spearhead implementation and optimization of OTM...",
      type: "Part-time",
      location: "Jaipur, Rajasthan",
      vacancies: "2 Vacancy",
      image: "/src/assets/images/otm-functional-lead-256347.png"
    },
    {
      id: 6,
      title: "Where the Next Era of AI is Designed",
      description: "In a world where more people have a keen interest in artificial intelligence, we want to know what AI looks like in the real world...",
      type: "Full Time",
      location: "Remote",
      vacancies: "2 Vacancy",
      image: "/src/assets/images/ai-designed.png"
    }
  ];

  return (
    <section className="careers-listings">
      <div className="container">
        <div className="listings-grid">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-image">
                <img src={job.image} alt={job.title} />
              </div>
              
              <div className="job-content">
                <div className="job-meta">
                  <span className="job-type">{job.type}</span>
                  <span className="separator">|</span>
                  <span className="job-location">{job.location}</span>
                  <span className="separator">|</span>
                  <span className="job-vacancies">{job.vacancies}</span>
                </div>
                
                <div className="job-details">
                  <h3>{job.title}</h3>
                  <p>{job.description}</p>
                </div>
                
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareersListings;
