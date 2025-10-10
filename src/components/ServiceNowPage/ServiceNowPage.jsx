import React from 'react';
import Header from '../Header/Header';
import ServiceNowHero from '../ServiceNowHero/ServiceNowHero';
import WhyChooseServiceNow from '../WhyChooseServiceNow/WhyChooseServiceNow';
import ServiceNowCapabilities from '../ServiceNowCapabilities/ServiceNowCapabilities';
import ImplementationRoadmap from '../ImplementationRoadmap/ImplementationRoadmap';
import ServiceNowCaseStudies from '../ServiceNowCaseStudies/ServiceNowCaseStudies';
import Footer from '../Footer/Footer';
import './ServiceNowPage.css';

const ServiceNowPage = () => {
  return (
    <div className="servicenow-page">
      <Header />
      <main className="main-content">
        <ServiceNowHero />
        <WhyChooseServiceNow />
        <ServiceNowCapabilities />
        <ImplementationRoadmap />
        <ServiceNowCaseStudies />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceNowPage;
