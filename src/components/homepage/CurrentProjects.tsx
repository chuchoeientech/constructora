import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  },
];

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
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
      className="relative group overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative w-full h-[400px] transition-transform duration-500 ease-out ${isAnimating
          ? direction > 0
            ? 'animate-slideLeft'
            : 'animate-slideRight'
          : ''
          }`}
      >
        <img
          src={images[currentIndex]}
          alt="Project"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/75 transform hover:scale-110 transition-transform duration-200"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/75 transform hover:scale-110 transition-transform duration-200"
      >
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
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
            className={`w-2 h-2 rounded-full transition-all duration-300 transform hover:scale-125 ${index === currentIndex
              ? 'bg-white w-6'
              : 'bg-white/50 hover:bg-white/75'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

const CurrentProjects = () => {
  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Obras en Proceso
        </h2>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center`}
            >
              <div className="w-full lg:w-1/2">
                <ImageCarousel images={project.images} />
              </div>
              <div className="w-full lg:w-1/2 lg:px-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                        Progreso
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold inline-block text-blue-600">
                        {project.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div
                      style={{ width: `${project.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentProjects;