import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import ServiceNowPage from './components/ServiceNowPage/ServiceNowPage';
import AviationIndustryPage from './components/AviationIndustryPage/AviationIndustryPage';
import InsightsPage from './components/InsightsPage/InsightsPage';
import TrainingPage from './components/TrainingPage/TrainingPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';
import CareersPage from './components/CareersPage/CareersPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/servicenow" element={<ServiceNowPage />} />
          <Route path="/aviation" element={<AviationIndustryPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
