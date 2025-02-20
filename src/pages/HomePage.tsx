import Hero from '../components/homepage/Hero';
import CurrentProjects from '../components/homepage/CurrentProjects';
import Stats from '../components/homepage/Stats';
import LocationMap from '../components/homepage/LocationMap';
import ClientsCarousel from '../components/homepage/ClientsCarousel';
import ContactForm from '../components/homepage/ContactForm';

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