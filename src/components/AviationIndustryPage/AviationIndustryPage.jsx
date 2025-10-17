import React from 'react';
import Header from '../Header/Header';
import AviationHero from '../AviationHero/AviationHero';
import WhatWeSolve from '../WhatWeSolve/WhatWeSolve';
import AviationServices from '../AviationServices/AviationServices';
import WhyChooseAviation from '../WhyChooseAviation/WhyChooseAviation';
import AviationCTA from '../AviationCTA/AviationCTA';
import AviationCaseStudies from '../AviationCaseStudies/AviationCaseStudies';
import Footer from '../Footer/Footer';
import './AviationIndustryPage.css';

const AviationIndustryPage = () => {
  return (
    <div className="aviation-industry-page">
      <Header />
      <main className="main-content">
        <AviationHero />
        <WhatWeSolve />
        <AviationServices />
        <WhyChooseAviation />
        <AviationCTA />
        <AviationCaseStudies />
      </main>
      <Footer />
    </div>
  );
};

export default AviationIndustryPage;
