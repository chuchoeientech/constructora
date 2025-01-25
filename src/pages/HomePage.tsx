import React from 'react';
import Hero from '../components/Hero';
import CurrentProjects from '../components/CurrentProjects';
import Stats from '../components/Stats';
import LocationMap from '../components/LocationMap';
import ClientsCarousel from '../components/ClientsCarousel';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
  return (
    <>
      <Hero />
      <CurrentProjects />
      <Stats />
      <LocationMap />
      <ClientsCarousel />
      <ContactForm />
    </>
  );
};

export default HomePage;