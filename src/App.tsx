import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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