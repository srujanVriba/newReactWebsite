import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ContactHero from '../ContactHero/ContactHero';
import ContactForm from '../ContactForm/ContactForm';
import ContactDetails from '../ContactDetails/ContactDetails';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Header />
      <main className="main-content">
        <ContactHero />
        <ContactForm />
        <ContactDetails />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
