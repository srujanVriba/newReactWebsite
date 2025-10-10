import React from 'react';
import Header from '../Header/Header';
import InsightsHero from '../InsightsHero/InsightsHero';
import InsightsFilters from '../InsightsFilters/InsightsFilters';
import InsightsGrid from '../InsightsGrid/InsightsGrid';
import InsightsPagination from '../InsightsPagination/InsightsPagination';
import InsightsCTA from '../InsightsCTA/InsightsCTA';
import Footer from '../Footer/Footer';
import './InsightsPage.css';

const InsightsPage = () => {
  return (
    <div className="insights-page">
      <Header />
      <main className="main-content">
        <InsightsHero />
        <section className="insights-content">
          <div className="container">
            <InsightsFilters />
            <InsightsGrid />
            <InsightsPagination />
          </div>
        </section>
        <InsightsCTA />
      </main>
      <Footer />
    </div>
  );
};

export default InsightsPage;
