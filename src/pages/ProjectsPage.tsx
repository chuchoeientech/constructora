import { useState, useEffect } from "react";
import { MapPin, Calendar, Ruler, DollarSign, X, Maximize2 } from "lucide-react";
import client from "../sanityClient";
import { urlFor } from "../sanityClient";

interface Project {
  _id: string;
  titulo: string;
  descripcion: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  additionalImages: Array<{
    asset: {
      url: string;
    };
  }>;
  completationYear: string;
  area: string;
  location: string;
  investment: string;
}

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "obras"] {
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
        setProjects(response);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 font-medium">Cargando proyectos...</p>
        </div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Aún no hay proyectos</h2>
          <p className="text-gray-600">Estamos trabajando en mostrar nuestros proyectos próximamente.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mt-14 text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-4"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestras <span className="text-orange-500">Obras</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Descubre nuestra trayectoria en construcción y desarrollo inmobiliario
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project) => (
            <article
              key={project._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl"
            >
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
                <h2 className="text-2xl font-bold text-white text-center">
                  {project.titulo || "Sin título"}
                </h2>
              </div>

              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-[400px] relative group">
                  <button
                    onClick={() => setSelectedImage(urlFor(project.mainImage).url())}
                    className="w-full h-full relative block overflow-hidden"
                  >
                    <img
                      src={urlFor(project.mainImage).url()}
                      alt={project.titulo || "Sin título"}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
                    </div>
                  </button>
                </div>

                <div className="lg:w-1/2 p-8 space-y-6">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {project.descripcion || "Sin descripción"}
                  </p>

                  <div className="space-y-5">
                    <div className="flex items-center p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <Calendar className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-orange-600">Año de finalización</span>
                        <p className="text-gray-900 font-semibold">
                          {project.completationYear || "Desconocido"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <Ruler className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-orange-600">Área</span>
                        <p className="text-gray-900 font-semibold">
                          {project.area || "No especificado"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <MapPin className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-orange-600">Ubicación</span>
                        <p className="text-gray-900 font-semibold">
                          {project.location || "No especificada"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <DollarSign className="w-6 h-6 text-orange-500 mr-4 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-medium text-orange-600">Inversión</span>
                        <p className="text-gray-900 font-semibold">
                          {project.investment || "No especificada"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {project.additionalImages && project.additionalImages.length > 0 && (
                <div className="p-8 border-t border-gray-100">
                  <h3 className="text-xl font-semibold mb-8 text-center text-gray-900">
                    Galería de Imágenes
                  </h3>
                  <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {project.additionalImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(urlFor(image).url())}
                        className="group relative aspect-square overflow-hidden rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <img
                          src={urlFor(image).url()}
                          alt={project.titulo || "Sin título"}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                          <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-6 h-6" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-0 animate-fade-in flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
          style={{
            animation: 'fadeIn 0.3s ease-in-out forwards',
          }}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full opacity-0"
            style={{
              animation: 'zoomIn 0.3s ease-out 0.2s forwards',
            }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 transition-colors duration-200 bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { background-color: rgba(0, 0, 0, 0); }
          to { background-color: rgba(0, 0, 0, 0.75); }
        }
        
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;