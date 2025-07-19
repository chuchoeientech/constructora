import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from 'lucide-react';
import client, { urlFor } from '../../sanityClient';
import { useNavigate } from 'react-router-dom';

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
    </div>
  );
};

const CurrentProjects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "obras" && enDesarrollo == true]{
          _id,
          titulo,
          descripcion,
          mainImage,
          additionalImages,
          completationYear,
          area,
          location,
          investment
        }`;
        const response = await client.fetch(query);
        // Mapear los datos para adaptarlos al diseño actual
        const mapped = response.map((obra: any) => {
          // Unir mainImage y additionalImages en un solo array de imágenes
          let images: string[] = [];
          if (obra.mainImage) images.push(urlFor(obra.mainImage).width(1000).url());
          if (obra.additionalImages && Array.isArray(obra.additionalImages)) {
            images = images.concat(
              obra.additionalImages.map((img: any) => urlFor(img).width(1000).url())
            );
          }
          return {
            id: obra._id,
            title: obra.titulo,
            description: obra.descripcion,
            images,
            progress: obra.progress ?? 0, // Si no hay campo, poner 0
            location: obra.location || '',
            duration: obra.completationYear ? `${obra.completationYear}` : '',
            team: obra.area ? `${obra.area} m²` : '',
            category: obra.investment ? `Inversión: $${obra.investment.toLocaleString()}` : '',
          };
        });
        setProjects(mapped);
      } catch (error) {
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-24 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 font-medium">Cargando proyectos...</p>
        </div>
      </section>
    );
  }

  if (!projects.length) {
    return (
      <section className="py-24 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No hay proyectos en desarrollo actualmente</h2>
          <p className="text-gray-600">Estamos trabajando en nuevos proyectos. ¡Vuelve pronto para ver novedades!</p>
        </div>
      </section>
    );
  }

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

                  {/* Progress Section 
                  <div className="pt-6">
                    <ProgressBar progress={project.progress} />
                  </div>*/}
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
            <button
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => navigate('/contacto')}
            >
              Contactar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentProjects;