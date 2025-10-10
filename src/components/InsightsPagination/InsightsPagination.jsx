import React from 'react';
import './InsightsPagination.css';

const InsightsPagination = () => {
  return (
    <div className="insights-pagination">
      <div className="pagination-container">
        <button className="pagination-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="pagination-numbers">
          <button className="pagination-number active">1</button>
          <button className="pagination-number">2</button>
          <button className="pagination-number">3</button>
          <button className="pagination-ellipsis">...</button>
          <button className="pagination-number last">1000</button>
        </div>
        
        <button className="pagination-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InsightsPagination;
