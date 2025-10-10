import React from 'react';
import './TrainingImportance.css';

const TrainingImportance = () => {
  return (
    <section className="training-importance">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="title-line"></div>
            <span>IS IT IMPORTANT</span>
            <div className="title-line"></div>
          </div>
          
          <div className="section-content">
            <h2>Why Generative AI Matters</h2>
            <p>
              From predictive diagnostics to creative content, generative AI is revolutionizing every industry. 
              Learn why now is the perfect time to build in-demand skills.
            </p>
          </div>
        </div>
        
        <div className="importance-grid">
          <div className="importance-card">
            <div className="card-image">
              <img src="/src/assets/images/skyrocketing-demand.png" alt="Skyrocketing Demand" />
            </div>
            <div className="card-content">
              <h3>Skyrocketing Demand</h3>
              <p>
                The demand for professionals with generative AI skills is skyrocketing across various industries, 
                including technology, marketing, design, healthcare, and finance.
              </p>
            </div>
          </div>
          
          <div className="importance-card">
            <div className="card-image">
              <img src="/src/assets/images/innovation-driver.png" alt="Innovation Driver" />
            </div>
            <div className="card-content">
              <h3>Innovation Driver</h3>
              <p>
                Generative AI is a powerful tool for innovation, enabling businesses to develop new products, 
                services, and solutions at an unprecedented pace.
              </p>
            </div>
          </div>
          
          <div className="importance-card">
            <div className="card-image">
              <img src="/src/assets/images/career-advancement.png" alt="Career Advancement" />
            </div>
            <div className="card-content">
              <h3>Career Advancement</h3>
              <p>
                Mastering Generative AI can significantly enhance your career prospects, opening doors to 
                exciting roles and higher earning potential.
              </p>
            </div>
          </div>
          
          <div className="importance-card">
            <div className="card-image">
              <img src="/src/assets/images/creative-empowerment.png" alt="Creative Empowerment" />
            </div>
            <div className="card-content">
              <h3>Creative Empowerment</h3>
              <p>
                Generative AI empowers individuals to explore their creativity and bring their ideas to life 
                in ways never before possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingImportance;
