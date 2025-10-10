import React from 'react';
import './TrainingCurriculum.css';

const TrainingCurriculum = () => {
  return (
    <section className="training-curriculum">
      <div className="background-effect"></div>
      
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <span>Curriculum</span>
            <div className="title-line"></div>
          </div>
          
          <h2>Generative AI Course Curriculum Instructor Led Live</h2>
          
          <div className="video-container">
            <div className="video-placeholder">
              <img src="/src/assets/images/curriculum-video.png" alt="Course Video" />
              <div className="video-overlay">
                <span>Video marketing area</span>
              </div>
            </div>
            
            <div className="course-info">
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>60 hours</span>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 7V5C3 3.89543 3.89543 3 5 3H15C16.1046 3 17 3.89543 17 5V7M3 7L5 17H15L17 7M3 7H17M8 11V15M12 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Interactive Live Training</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="modules-container">
          <div className="module-card active">
            <div className="module-header">
              <h3>Module 1: Core Concepts of Generative AI</h3>
              <div className="expand-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="module-content">
              <ul>
                <li>Exploring Tokenization & Embedding Techniques – understanding text at a granular level</li>
                <li>Introduction to Generative AI – concept, characteristics, and scope</li>
                <li>Understanding GANs, VAEs & Transformers – the foundational architectures</li>
                <li>Distinguishing AI, ML, and GenAI – categorizing different paradigms</li>
                <li>Working with Transformer Architecture – visualizing attention and flow</li>
                <li>Examining Large Language Models – GPT, BERT, T5 insights</li>
                <li>Text Generation Mechanisms – methods for producing coherent language</li>
                <li>Prompt Engineering Essentials – how structured input improves response</li>
                <li>Sampling Techniques in Generation – influencing variability in output</li>
                <li>Weekly Recap & Self-Assessment – reinforce key concepts</li>
              </ul>
            </div>
          </div>
          
          <div className="module-card">
            <div className="module-header">
              <h3>Module 2: Prompt Strategies & Embedding Integration</h3>
              <div className="expand-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="module-card">
            <div className="module-header">
              <h3>Module 3: Multimodal Generation and AI Fluency</h3>
              <div className="expand-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="module-card">
            <div className="module-header">
              <h3>Module 4: Intelligent Agents & Retrieval Concepts</h3>
              <div className="expand-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="module-card">
            <div className="module-header">
              <h3>Module 5: Applying GenAI in Structured Scenarios</h3>
              <div className="expand-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="module-card">
            <div className="module-header">
              <h3>Module 6: Final Project Development & Skill Expansion</h3>
              <div className="expand-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingCurriculum;
