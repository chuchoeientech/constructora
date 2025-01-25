import React from 'react';
import { Building2, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold">Constructora PY</span>
            </div>
            <p className="text-gray-400">
              Construyendo el futuro de Paraguay con calidad y excelencia desde hace más de 20 años.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="#proyectos" className="text-gray-400 hover:text-white">Proyectos</a></li>
              <li><a href="#estadisticas" className="text-gray-400 hover:text-white">Estadísticas</a></li>
              <li><a href="#ubicaciones" className="text-gray-400 hover:text-white">Ubicaciones</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Construcción Residencial</li>
              <li className="text-gray-400">Construcción Comercial</li>
              <li className="text-gray-400">Diseño Arquitectónico</li>
              <li className="text-gray-400">Consultoría</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Constructora PY. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;