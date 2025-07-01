import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import client, { urlFor } from '../../sanityClient';

const Footer = () => {
  const [logo, setLogo] = useState<any>(null);

  useEffect(() => {
    const fetchLogo = async () => {
      const result = await client.fetch('*[_type == "webImages"][0].logo');
      setLogo(result);
    };
    fetchLogo();
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12 mb-16">
          {/* Company info */}
          <div className="lg:col-span-2 xl:col-span-1">
            <div className="flex items-center mb-6">
              {logo && (
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <img 
                    src={urlFor(logo).url()} 
                    alt="FENAR Logo" 
                    className="relative h-28 w-28 object-contain drop-shadow-lg"
                  />
                </div>
              )}
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Construyendo el futuro de Paraguay con calidad y excelencia desde hace más de 20 años.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                <Phone className="h-4 w-4 mr-3 text-orange-400" />
                <span>+595 21 123 456</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                <Mail className="h-4 w-4 mr-3 text-orange-400" />
                <span>info@fenar.com.py</span>
              </div>
              <div className="flex items-start text-gray-400 hover:text-white transition-colors duration-200">
                <MapPin className="h-4 w-4 mr-3 mt-0.5 text-orange-400 flex-shrink-0" />
                <span>Asunción, Paraguay</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative">
              Enlaces rápidos
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block group"
                >
                  <span className="relative">
                    Inicio
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/proyectos" 
                  className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block group"
                >
                  <span className="relative">
                    Obras Ejecutadas
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacto" 
                  className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block group"
                >
                  <span className="relative">
                    Contacto
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative">
              Servicios
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-3"></div>
                Construcción Residencial
              </li>
              <li className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-3"></div>
                Construcción Comercial
              </li>
              <li className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-3"></div>
                Diseño Arquitectónico
              </li>
              <li className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-3"></div>
                Consultoría
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white relative">
              Síguenos
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
            </h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="group relative p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25"
              >
                <Facebook className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-200" />
              </a>
              <a 
                href="#" 
                className="group relative p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25"
              >
                <Instagram className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-200" />
              </a>
              <a 
                href="#" 
                className="group relative p-3 bg-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/25"
              >
                <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} FENAR Constructora. Todos los derechos reservados.</p>
            </div>
            <a 
              href='https://eientec.com/' 
              target='_blank' 
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm group"
            >
              <span className="flex items-center">
                Desarrollado por 
                <span className="ml-1 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 group-hover:from-orange-300 group-hover:to-orange-400">
                  EiEn Innovations Tech
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;