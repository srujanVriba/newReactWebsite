import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import CustomerPartners from '../CustomerPartners/CustomerPartners';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import OurServices from '../OurServices/OurServices';
import IndustryExpertise from '../IndustryExpertise/IndustryExpertise';
import ClientStories from '../ClientStories/ClientStories';
import FAQ from '../FAQ/FAQ';
import Insights from '../Insights/Insights';
import Footer from '../Footer/Footer';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <main className="main-content">
        <Hero />
        <CustomerPartners />
        <WhyChooseUs />
        <OurServices />
        <IndustryExpertise />
        <ClientStories />
        <FAQ />
        <Insights />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
