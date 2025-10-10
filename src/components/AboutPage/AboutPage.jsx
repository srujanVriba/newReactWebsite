import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AboutHero from '../AboutHero/AboutHero';
import AboutStory from '../AboutStory/AboutStory';
import AboutServices from '../AboutServices/AboutServices';
import AboutStats from '../AboutStats/AboutStats';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />
      <main className="main-content">
        <AboutHero />
        <AboutStory />
        <AboutServices />
        <AboutStats />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
