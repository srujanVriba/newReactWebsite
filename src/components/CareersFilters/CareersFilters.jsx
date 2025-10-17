import React from 'react';
import './CareersFilters.css';

const CareersFilters = () => {
  return (
    <section className="careers-filters">
      <div className="container">
        <div className="filters-content">
          <div className="filter-buttons">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Developer</button>
            <button className="filter-btn">Designer</button>
            <button className="filter-btn">HR</button>
            <button className="filter-btn">Marketing</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersFilters;
