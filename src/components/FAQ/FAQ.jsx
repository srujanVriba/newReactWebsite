import React from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "What industries does Vriba serve?",
      answer: "We partner with leaders across Aviation, Healthcare, Retail & CPG, Finance & Banking, Education, and Telecom—tailoring solutions to each sector's unique challenges and compliance requirements.",
      expanded: true
    },
    {
      id: 2,
      question: "Which core services does Vriba offer?",
      answer: "",
      expanded: false
    },
    {
      id: 3,
      question: "How does Vriba ensure data security and compliance?",
      answer: "",
      expanded: false
    },
    {
      id: 4,
      question: "What are your engagement models?",
      answer: "",
      expanded: false
    },
    {
      id: 5,
      question: "Which certifications and partnerships does Vriba hold?",
      answer: "",
      expanded: false
    }
  ];

  return (
    <section className="faq">
      {/* Background Effect */}
      <div className="faq-bg-effect"></div>
      
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="title-line"></div>
            <h2>Frequently Asked Questions</h2>
            <div className="title-line"></div>
          </div>
          <p className="section-description">
            Your curiosity meets our expertise, Let's clear things up!
          </p>
        </div>

        <div className="faq-content">
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.id} className={`faq-item ${faq.expanded ? 'expanded' : ''}`}>
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <div className="faq-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="white" stroke="none"/>
                      <path d="M6 10h8M10 6v8" stroke="#111928" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                {faq.expanded && faq.answer && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="faq-actions">
            <button className="btn-primary">See All FAQ's</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
