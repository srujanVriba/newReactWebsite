import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CareersHero from '../CareersHero/CareersHero';
import CareersIntro from '../CareersIntro/CareersIntro';
import CareersFilters from '../CareersFilters/CareersFilters';
import CareersListings from '../CareersListings/CareersListings';
import CareersCTA from '../CareersCTA/CareersCTA';
import './CareersPage.css';

const CareersPage = () => {
  return (
    <div className="careers-page">
      <Header />
      <main className="main-content">
        <CareersHero />
        <CareersIntro />
        <CareersFilters />
        <CareersListings />
        <CareersCTA />
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
