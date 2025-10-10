import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src="/src/assets/images/logo.svg" alt="Vriba Logo" />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <div className="nav-links">
            <div className="nav-item dropdown">
              <Link to="/servicenow">
                <span>Solutions</span>
              </Link>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="nav-item dropdown">
              <Link to="/aviation">
                <span>Industries</span>
              </Link>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="nav-item">
              <span>Our Work</span>
            </div>
            <div className="nav-item dropdown">
              <Link to="/insights">
                <span>Insights</span>
              </Link>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="nav-item">
              <Link to="/about">
                <span>About Us</span>
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/careers">
                <span>Careers</span>
              </Link>
            </div>
          </div>

          <div className="nav-actions">
            {/* Language Selector */}
            <div className="language-selector">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 12h20" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>English</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
        </div>

            {/* Action Buttons */}
                <div className="action-buttons">
                  <Link to="/training" className="btn-outline">Training</Link>
                  <Link to="/contact" className="btn-primary">Contact Us</Link>
                </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;