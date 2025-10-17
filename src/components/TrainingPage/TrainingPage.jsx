import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TrainingHero from '../TrainingHero/TrainingHero';
import TrainingImportance from '../TrainingImportance/TrainingImportance';
import TrainingWhyChoose from '../TrainingWhyChoose/TrainingWhyChoose';
import TrainingCurriculum from '../TrainingCurriculum/TrainingCurriculum';
import TrainingTargetAudience from '../TrainingTargetAudience/TrainingTargetAudience';
import TrainingFAQ from '../TrainingFAQ/TrainingFAQ';
import './TrainingPage.css';

const TrainingPage = () => {
  return (
    <div className="training-page">
      <Header />
      <main className="main-content">
        <TrainingHero />
        <TrainingImportance />
        <TrainingWhyChoose />
        <TrainingCurriculum />
        <TrainingTargetAudience />
        <TrainingFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default TrainingPage;
