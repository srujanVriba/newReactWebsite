import React from 'react';
import './ClientStories.css';

const ClientStories = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Vriba modernized our customer portal with microservices and AI-driven dashboards, boosting efficiency in just three months.",
      author: "Priyanka Desai, CTO, AeroTransit",
      highlighted: true
    },
    {
      id: 2,
      quote: "A hybrid microservices approach decoupled our core SAP modules with zero downtime. Maintenance windows shrank from 12 hours to under 2, and release cycles moved from annual to quarterly.",
      author: "Jonathan Lee, Head of IT, RetailEdge"
    },
    {
      id: 3,
      quote: "Vriba's phased ServiceNow rollout achieved seamless integration across teams. We hit 100% adoption in six weeks and reduced incident resolution times by 40%.",
      author: "Deepa Rao, Director ITSM, MedCore Health",
      highlighted: true
    },
    {
      id: 4,
      quote: "Maintenance windows shrank from 12 hours to under 2, and our team now delivers quarterly enhancements instead of annual rollouts. The team's agility, technical depth, and relentless focus on quality have redefined what 'enterprise transformation' means for us.",
      author: "Priyanka Desai CTO, AeroTransit",
      highlighted: true
    }
  ];

  return (
    <section className="client-stories">
      {/* Background Effect */}
      <div className="stories-bg-effect"></div>
      
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="title-line"></div>
            <h2>Client Stories</h2>
            <div className="title-line"></div>
          </div>
          <p className="section-description">
            Hear stories straight from the people we helped!
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={`testimonial-card ${testimonial.highlighted ? 'highlighted' : ''}`}>
              <div className="quote-icon">
                <svg width="38" height="29" viewBox="0 0 38 29" fill="none">
                  <path d="M0 0h38v29H0z" fill="#D11730"/>
                </svg>
              </div>
              <div className="testimonial-content">
                <p className="testimonial-quote">{testimonial.quote}</p>
                <p className="testimonial-author">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Element */}
        <div className="section-decoration"></div>
      </div>
    </section>
  );
};

export default ClientStories;
