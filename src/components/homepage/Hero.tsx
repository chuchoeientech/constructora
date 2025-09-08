import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type HeroProps = {
  bannerUrl?: string;
};

const Hero = ({ bannerUrl }: HeroProps) => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div id="inicio" className="relative h-screen overflow-hidden">
      {/* Background con efecto parallax mejorado */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
        style={{
          backgroundImage: bannerUrl ? `url("${bannerUrl}")` : 'none',
        }}
      >
        {/* Overlay con gradiente más sofisticado */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border border-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 border border-white/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative h-full flex items-center mt-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className={`text-white max-w-4xl transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            {/* Título principal con animación */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Construyendo
              </span>
              <span className="block bg-primary bg-clip-text text-transparent">
                el Futuro
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-gray-300 font-light">
                de Paraguay
              </span>
            </h1>

            {/* Descripción mejorada */}
            <p className="text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed max-w-2xl font-light">
              Transformamos visiones en realidades arquitectónicas excepcionales, 
              creando espacios que inspiran y perduran en el tiempo.
            </p>

            {/* Botones mejorados */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => navigate('/proyectos')}
                className="group relative px-10 py-5 bg-primary text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10">Conoce Nuestros Proyectos</span>
              </button>
              
              <button 
                onClick={() => navigate('/contacto')}
                className="group relative px-10 py-5 border-2 border-white/30 text-white rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm hover:border-white"
              >
                <span className="relative z-10">Contáctanos</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;