import React, { useState } from 'react';
import './InsightsFilters.css';

const InsightsFilters = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    { id: 'all', label: 'All', active: true },
    { id: 'article', label: 'Article', active: false },
    { id: 'whitepaper', label: 'Whitepaper', active: false },
    { id: 'webinar', label: 'Webinar', active: false },
    { id: 'casestudy', label: 'Case Study', active: false }
  ];

  const handleFilterClick = (filterId, filterLabel) => {
    setActiveFilter(filterLabel);
    // Here you would typically filter the articles based on the selected category
  };

  return (
    <div className="insights-filters">
      <div className="filters-container">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`filter-button ${activeFilter === filter.label ? 'active' : ''}`}
            onClick={() => handleFilterClick(filter.id, filter.label)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InsightsFilters;
