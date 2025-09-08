import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Building2, Users, Mail } from 'lucide-react';
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

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';
  
  // Clases mejoradas para el navbar
  const navbarClass = `fixed w-full z-50 transition-all duration-500 ease-out ${
    isScrolled || !isHomePage 
      ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
      : 'bg-gradient-to-r from-transparent via-black/10 to-transparent'
  }`;

  // Clases mejoradas para los enlaces
  const linkClass = `relative font-medium transition-all duration-300 group ${
    isScrolled || !isHomePage 
      ? 'text-gray-700 hover:text-primary' 
      : 'text-white hover:text-primary'
  }`;

  // Clase para el botón de contacto
  const contactButtonClass = `relative px-6 py-2.5 rounded-full font-medium transition-all duration-300 overflow-hidden group ${
    isScrolled || !isHomePage
      ? 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
      : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-primary'
  }`;

  // Datos del menú móvil
  const mobileMenuItems = [
    { to: "/", label: "Inicio", icon: Home },
    { to: "/proyectos", label: "Obras Ejecutadas", icon: Building2 },
    { to: "/contacto", label: "Contacto", icon: Mail }
  ];

  return (
    <nav className={navbarClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              {logo ? (
                <div className="relative">
                  <img 
                    src={urlFor(logo).url()} 
                    alt="FENAR Logo" 
                    className="h-14 w-auto object-contain transition-all duration-300 ease-out group-hover:scale-110 group-hover:drop-shadow-lg"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-lg transition-all duration-300"></div>
                </div>
              ) : (
                <div className="h-14 w-14 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse rounded-lg"></div>
              )}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkClass}>
              <span className="relative">
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link to="/proyectos" className={linkClass}>
              <span className="relative">
                Obras Ejecutadas
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link to="/contacto" className={contactButtonClass}>
              <span className="relative z-10 text-white">Contacto</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative p-3 rounded-xl transition-all duration-300 ${
                isScrolled || !isHomePage 
                  ? 'text-gray-600 hover:bg-gray-100 hover:shadow-md' 
                  : 'text-white hover:bg-white/20 hover:shadow-lg'
              }`}
            >
              <div className={`w-6 h-6 relative transition-all duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                <span className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'
                }`}></span>
                <span className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute top-1/2 left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu mejorado */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-2xl border-b border-gray-100 transform transition-all duration-500 ease-out z-[100] ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        style={{ marginTop: '80px' }}
      >
        {/* Header del menú móvil */}
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600">Menú de Navegación</span>
          </div>
        </div>

        {/* Enlaces del menú móvil */}
        <div className="px-4 py-6 bg-white">
          <div className="space-y-2">
            {mobileMenuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.to;
              
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`group flex items-center space-x-4 px-4 py-4 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-primary/10 text-primary border-l-4 border-primary shadow-sm'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50 border-l-4 border-transparent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className={`p-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-primary/20 text-primary'
                      : 'bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="flex-1">{item.label}</span>
                  {isActive && (
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Footer del menú móvil */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-2">FENAR Constructora</p>
              <div className="flex justify-center space-x-2">
                <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay para cerrar menú */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/10 z-[90] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
