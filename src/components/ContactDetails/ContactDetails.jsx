import React from 'react';
import './ContactDetails.css';

const ContactDetails = () => {
  return (
    <section className="contact-details">
      <div className="container">
        <div className="details-grid">
          <div className="contact-info">
            <div className="info-section">
              <h3>Contact Details</h3>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <rect width="34" height="34" rx="8" fill="#E8EDFD"/>
                    <path d="M25.3333 9.33333H8.66667C7.19391 9.33333 6 10.5272 6 12V22C6 23.4728 7.19391 24.6667 8.66667 24.6667H25.3333C26.8061 24.6667 28 23.4728 28 22V12C28 10.5272 26.8061 9.33333 25.3333 9.33333Z" stroke="#1C3FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 12L17 18.6667L28 12" stroke="#1C3FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>info@vriba.com</span>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <rect width="34" height="34" rx="8" fill="#E8EDFD"/>
                    <path d="M22 4H12C9.79086 4 8 5.79086 8 8V26C8 28.2091 9.79086 30 12 30H22C24.2091 30 26 28.2091 26 26V8C26 5.79086 24.2091 4 22 4Z" stroke="#1C3FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 8H20M14 12H20M14 16H18" stroke="#1C3FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>(215) 882 4352</span>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <rect width="34" height="34" rx="8" fill="#E8EDFD"/>
                    <path d="M21 14C21 19.5228 17 24 17 24S13 19.5228 13 14C13 11.7909 14.7909 10 17 10C19.2091 10 21 11.7909 21 14Z" stroke="#1C3FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="17" cy="14" r="3" stroke="#1C3FB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>2435 North Central Expressway, Suite 1350, Richardson, TX 7508</span>
              </div>
            </div>
            
            <div className="social-section">
              <h3>Find Us Online</h3>
              
              <div className="social-links">
                <a href="#" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#111928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                
                <a href="#" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28445C14.0247 3.61172 13.2884 4.19439 12.773 4.95371C12.2575 5.71303 11.9877 6.61552 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39524C5.36074 6.60467 4.01032 5.43866 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="#111928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                
                <a href="#" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#111928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.8151C15.2063 14.5779 14.5931 15.2242 13.8416 15.6805C13.0901 16.1368 12.2384 16.3833 11.3738 16.3936C10.5092 16.404 9.66242 16.1778 8.90108 15.7416C8.13974 15.3054 7.499 14.6743 7.05455 13.9164C6.6101 13.1585 6.38122 12.3033 6.39252 11.4387C6.40382 10.5741 6.65485 9.72678 7.11273 8.97871C7.57061 8.23064 8.21734 7.61197 8.98167 7.19755C9.746 6.78313 10.5984 6.58827 11.45 6.63223C12.3016 6.67619 13.1219 6.95734 13.8255 7.44378C14.5291 7.93022 15.0878 8.60367 15.44 9.38" stroke="#111928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                
                <a href="#" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8C18.2091 8 20 9.79086 20 12V21H16V12C16 11.4696 15.7893 10.9609 15.4142 10.5858C15.0391 10.2107 14.5304 10 14 10C13.4696 10 12.9609 10.2107 12.5858 10.5858C12.2107 10.9609 12 11.4696 12 12V21H8V12C8 9.79086 9.79086 8 12 8H16Z" stroke="#111928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="9" width="4" height="12" stroke="#111928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" stroke="#111928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                
                <a href="#" className="social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.4981 4.80824 21.0707 4.55318 20.6 4.42C19.03 4 12 4 12 4S4.97 4 3.4 4.42C2.92931 4.55318 2.5019 4.80824 2.16129 5.15941C1.82068 5.51057 1.57879 5.94541 1.46 6.42C1.04 7.99 1.04 12 1.04 12C1.04 12 1.04 16.01 1.46 17.58C1.57879 18.0546 1.82068 18.4894 2.16129 18.8406C2.5019 19.1918 2.92931 19.4468 3.4 19.58C4.97 20 12 20 12 20S19.03 20 20.6 19.58C21.0707 19.4468 21.4981 19.1918 21.8387 18.8406C22.1793 18.4894 22.4212 18.0546 22.54 17.58C22.96 16.01 22.96 12 22.54 6.42Z" stroke="#111928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polygon points="9.75,15.02 15.5,12 9.75,8.98" stroke="#111928" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
