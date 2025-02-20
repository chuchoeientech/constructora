import { useState, useEffect } from "react";
import client from "../contentfulClient";
import { Entry } from "contentful";
import { Project } from "../types";
import { MapPin, Calendar, Ruler, DollarSign, X, Maximize2 } from "lucide-react";

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Entry<Project>[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await client.getEntries<Project>({ content_type: "constructora" });
        setProjects(response.items);
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
        <p className="text-xl text-gray-600 font-medium">Cargando proyectos...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mt-14 text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestras Obras
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra trayectoria en construcción y desarrollo inmobiliario
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.sys.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.01] transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-900 p-6 border-b text-center">
                {String(project.fields.title ?? "Sin título")}
              </h2>

              <div className="flex flex-col lg:flex-row">
                {/* Main Image */}
                <div className="lg:w-1/2 h-[400px] relative group">
                  <button
                    onClick={() => setSelectedImage((project.fields.mainImage.fields as any).file.url)}
                    className="w-full h-full relative block overflow-hidden"
                  >
                    <img
                      src={(project.fields.mainImage.fields as any).file.url}
                      alt={String(project.fields.title ?? "Sin título")}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
                    </div>
                  </button>
                </div>

                {/* Project Information */}
                <div className="lg:w-1/2 p-6 space-y-6">
                  <p className="text-gray-600">
                    {String(project.fields.description ?? "Sin descripción")}
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                      <span>
                        <strong>Año de finalización:</strong>{" "}
                        {String(project.fields.completetionYear ?? "Desconocido")}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <Ruler className="w-5 h-5 text-blue-600 mr-3" />
                      <span>
                        <strong>Área:</strong>{" "}
                        {String(project.fields.area ?? "No especificado")}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <span>
                        <strong>Ubicación:</strong>{" "}
                        {String(project.fields.location ?? "No especificada")}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <DollarSign className="w-5 h-5 text-blue-600 mr-3" />
                      <span>
                        <strong>Inversión:</strong>{" "}
                        {String(project.fields.investment ?? "No especificada")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Images */}
              {project.fields.additionalImages && Array.isArray(project.fields.additionalImages) && (
                <div className="p-6 border-t">
                  <h3 className="text-lg font-semibold mb-6 text-center">Galería de Imágenes</h3>
                  <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
                    {project.fields.additionalImages.map((image: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage((image?.fields as any)?.file?.url)}
                        className="group relative aspect-square overflow-hidden rounded-lg hover:shadow-xl transition-all duration-300"
                      >
                        <img
                          src={(image?.fields as any)?.file?.url}
                          alt={String(project.fields.title ?? "Sin título")}
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

      {/* Modal for enlarged images */}
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
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Imagen ampliada"
              className="w-full h-full object-contain"
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