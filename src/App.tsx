import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { client, urlFor } from './sanityClient';
import Navbar from './components/global/Navbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/global/Footer';
import WhatsAppButton from './components/global/WhatsAppButton';
import ClientsPage from './pages/ClientsPage';
import { AnimatePresence, motion, useScroll } from 'framer-motion';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.25, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/proyectos" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
        <Route path="/clientes" element={<PageWrapper><ClientsPage /></PageWrapper>} />
        <Route path="/contacto" element={<PageWrapper><ContactPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const updateFavicon = async () => {
      try {
        const query = `*[_type == "webImages"][0].logo`;
        const logo = await client.fetch(query);

        if (logo) {
          let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
          if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
          }
          link.href = urlFor(logo).url();
        }
      } catch (error) {
        console.error("Error updating favicon:", error);
      }
    };

    updateFavicon();
  }, []);
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <motion.div
          className="fixed left-0 right-0 top-0 h-1 bg-blue-600 origin-left z-50"
          style={{ scaleX: scrollYProgress }}
        />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;