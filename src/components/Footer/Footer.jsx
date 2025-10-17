import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Background Effects */}
      <div className="footer-bg-effect-1"></div>
      <div className="footer-bg-effect-2"></div>
      
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="company-info">
            <div className="footer-logo">
              <img src="/src/assets/images/logo.svg" alt="Vriba Logo" />
            </div>
            <p className="company-description">
              We continuously strive to stay ahead of the curve and deliver cutting-edge solutions.
            </p>
            <div className="social-links">
              {/* Social media icons would go here */}
            </div>
            <p className="copyright">
              All right reserved at Vriba Solutions
            </p>
          </div>

          {/* Quick Links */}
          <div className="quick-links">
            <h3>Quick Links</h3>
            <div className="links-grid">
              <div className="link-item">Solutions</div>
              <div className="link-item">Industries</div>
              <div className="link-item">Our Work</div>
              <div className="link-item">Insights</div>
              <div className="link-item">Careers</div>
              <div className="link-item">Contact Us</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Connect</h3>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="8" fill="rgba(255, 255, 255, 0.1)"/>
                    <path d="M8.5 12.5C8.5 11.1193 9.61929 10 11 10H13.5C14.8807 10 16 11.1193 16 12.5V13.5C16 14.8807 14.8807 16 13.5 16H11C9.61929 16 8.5 14.8807 8.5 13.5V12.5Z" stroke="white" strokeWidth="2"/>
                    <path d="M8.5 12.5V20.5C8.5 21.8807 9.61929 23 11 23H29C30.3807 23 31.5 21.8807 31.5 20.5V12.5" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <span>(215) 882 4352</span>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="8" fill="rgba(255, 255, 255, 0.1)"/>
                    <path d="M4 12L20 20L36 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="4" y="8" width="32" height="24" rx="2" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <span>info@vriba.com</span>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="8" fill="rgba(255, 255, 255, 0.1)"/>
                    <path d="M21 20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20C19 19.4477 19.4477 19 20 19C20.5523 19 21 19.4477 21 20Z" stroke="white" strokeWidth="2"/>
                    <path d="M7 20C7 13.9249 11.9249 9 18 9C24.0751 9 29 13.9249 29 20C29 26.0751 24.0751 31 18 31C11.9249 31 7 26.0751 7 20Z" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <span>2435 North Central Expressway, Suite 1350, Richardson, TX 75080</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
