import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { client, urlFor } from '../../sanityClient';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logo, setLogo] = useState<any>(null);
  const location = useLocation();

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const query = `*[_type == "webImages"][0].logo`;
        const result = await client.fetch(query);
        setLogo(result);
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    };

    fetchLogo();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';
  const navbarClass = `fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-white shadow-lg' : 'bg-transparent'
    }`;

  const linkClass = `font-medium transition-colors duration-300 ${isScrolled || !isHomePage ? 'text-gray-700 text-primary hover:text-gray-800' : 'text-white hover:text-primary'
    }`;

  return (
    <nav className={navbarClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {logo ? (
                <img 
                  src={urlFor(logo).url()} 
                  alt="FENAR Logo" 
                  className="h-14 w-auto object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />
              ) : (
                <div className="h-14 w-14 bg-gray-200 animate-pulse rounded"></div>
              )}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkClass}>Inicio</Link>
            <Link to="/proyectos" className={linkClass}>Obras</Link>
            <Link to="/clientes" className={linkClass}>Clientes</Link>
            <Link to="/contacto" className={`${linkClass} px-6 py-2 rounded-full border-2 transition-all duration-300 ${isScrolled || !isHomePage
                ? 'border-primary hover:bg-primary hover:text-white'
                : 'border-white hover:bg-white hover:text-primary'
              }`}>Contacto</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled || !isHomePage ? 'text-gray-600' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu con animación */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg transform transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
          }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          <Link
            to="/"
            className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to="/proyectos"
            className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Obras
          </Link>
          <Link
            to="/clientes"
            className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Clientes
          </Link>
          <Link
            to="/contacto"
            className="block px-3 py-2 text-gray-700 hover:text-primary font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
