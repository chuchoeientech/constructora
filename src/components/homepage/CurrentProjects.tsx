import { useState, useEffect } from 'react';
import { Calendar, MapPin, Star } from 'lucide-react';
import client, { urlFor } from '../../sanityClient';
import { useNavigate } from 'react-router-dom';

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
          location
        }`;
        const response = await client.fetch(query);
        const mapped = response.map((obra: any) => {
          const images: string[] = [];
          if (obra.mainImage) images.push(urlFor(obra.mainImage).width(1200).height(900).fit('crop').url());
          if (obra.additionalImages && Array.isArray(obra.additionalImages)) {
            images.push(
              ...obra.additionalImages.map((img: any) => urlFor(img).width(1200).height(900).fit('crop').url())
            );
          }
          return {
            id: obra._id,
            title: obra.titulo,
            description: obra.descripcion,
            image: images[0] || '',
            location: obra.location || '',
            year: obra.completationYear ? `${obra.completationYear}` : ''
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
          <p className="text-xl text-gray-600 font-medium">Cargando obras destacadas...</p>
        </div>
      </section>
    );
  }

  if (!projects.length) {
    return (
      <section className="py-24 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No hay obras destacadas por el momento</h2>
          <p className="text-gray-600">Pronto actualizaremos esta sección con nuevos proyectos.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="obras-destacadas" className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(90deg, rgba(37,99,235,0.12) 0%, transparent 15%, transparent 85%, rgba(37,99,235,0.12) 100%)'
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Star size={16} className="mr-2" />
            Obras destacadas
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Nuestros <span className="text-primary">proyectos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Una selección de obras que representan nuestra calidad y experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <article key={project.id} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors min-h-[3.5rem] line-clamp-2">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-600 gap-4 min-h-[1.25rem]">
                  {project.location && (
                    <span className="inline-flex items-center text-sm truncate whitespace-nowrap max-w-[60%]"><MapPin size={16} className="text-primary mr-1" />{project.location}</span>
                  )}
                  {project.year && (
                    <span className="inline-flex items-center text-sm whitespace-nowrap"><Calendar size={16} className="text-primary mr-1" />{project.year}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => navigate('/proyectos')}
          >
            Ver todas las obras
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurrentProjects;