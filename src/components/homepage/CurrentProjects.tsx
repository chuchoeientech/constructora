import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Torre Corporativa Asunción',
    description: 'Moderna torre de oficinas de 25 pisos con certificación LEED, ubicada en el corazón financiero de Asunción.',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1582383063137-fa31ff9e23ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    progress: 75,
    location: 'Asunción, Paraguay',
    duration: '18 meses',
    team: '45 profesionales',
    category: 'Corporativo'
  },
  {
    id: 2,
    title: 'Residencial Las Palmas',
    description: 'Complejo residencial de lujo con 120 apartamentos, áreas verdes y amenidades de primera clase.',
    images: [
      'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    progress: 45,
    location: 'San Lorenzo, Paraguay',
    duration: '24 meses',
    team: '60 profesionales',
    category: 'Residencial'
  },
  {
    id: 3,
    title: 'Centro Comercial del Este',
    description: 'El centro comercial más moderno de la zona este, con más de 200 locales comerciales y área de entretenimiento.',
    images: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    ],
    progress: 30,
    location: 'Ciudad del Este, Paraguay',
    duration: '30 meses',
    team: '80 profesionales',
    category: 'Comercial'
  },
];

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection(1);
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setTimeout(() => setIsAnimating(false), 500);
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [images.length, isAutoPlaying]);

  const nextImage = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div
      className="relative group overflow-hidden rounded-2xl shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative w-full h-[500px] transition-transform duration-700 ease-out ${isAnimating
          ? direction > 0
            ? 'animate-slideLeft'
            : 'animate-slideRight'
          : ''
          }`}
      >
        <img
          src={images[currentIndex]}
          alt="Project"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
      
      {/* Navigation buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 transform hover:scale-110 border border-white/20"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 transform hover:scale-110 border border-white/20"
      >
        <ChevronRight size={28} />
      </button>
      
      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setDirection(index > currentIndex ? 1 : -1);
              setIsAnimating(true);
              setCurrentIndex(index);
              setTimeout(() => setIsAnimating(false), 500);
            }}
            className={`transition-all duration-300 transform hover:scale-125 ${
              index === currentIndex
                ? 'w-8 h-3 bg-white rounded-full'
                : 'w-3 h-3 bg-white/50 rounded-full hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          Progreso del Proyecto
        </span>
        <span className="text-lg font-bold text-primary">
          {progress}%
        </span>
      </div>
      <div className="relative">
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectInfo = ({ project }: { project: any }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="flex items-center space-x-2 text-gray-600">
        <MapPin size={18} className="text-primary" />
        <span className="text-sm font-medium">{project.location}</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-600">
        <Calendar size={18} className="text-primary" />
        <span className="text-sm font-medium">{project.duration}</span>
      </div>
      <div className="flex items-center space-x-2 text-gray-600">
        <Users size={18} className="text-primary" />
        <span className="text-sm font-medium">{project.team}</span>
      </div>
    </div>
  );
};

const CurrentProjects = () => {
  return (
    <section id="proyectos" className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Degradado azul en los costados */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(90deg, rgba(37,99,235,0.22) 0%, transparent 15%, transparent 85%, rgba(37,99,235,0.22) 100%)'
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Proyectos Activos
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Obras en <span className="text-primary">Proceso</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestros proyectos más ambiciosos que están transformando el paisaje urbano de Paraguay
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex-row gap-12 items-center`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <ImageCarousel images={project.images} />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 lg:px-8">
                <div className="space-y-6">
                  {/* Category Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-sm font-semibold border border-primary/20">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-4xl font-bold text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Project Info */}
                  <ProjectInfo project={project} />

                  {/* Description */}
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Progress Section */}
                  <div className="pt-6">
                    <ProgressBar progress={project.progress} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Interesado en nuestros proyectos?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contáctanos para obtener más información sobre nuestros proyectos en desarrollo y futuras oportunidades.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contactar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentProjects;