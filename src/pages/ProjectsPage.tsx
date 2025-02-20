
const projects = [
  {
    id: 1,
    title: 'Hospital Nacional de Itauguá',
    description: 'Moderno complejo hospitalario de 45,000 m² que incluye 300 camas, 12 quirófanos, y unidades especializadas de cuidados intensivos. El diseño prioriza la eficiencia operativa y el confort del paciente, con amplios espacios naturalmente iluminados y un sistema de climatización de última generación. El proyecto incluyó también un helipuerto y un centro de investigación médica.',
    mainImage: 'https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    completionYear: '2021',
    area: '45,000 m²',
    location: 'Itauguá',
    investment: '$120M USD'
  },
  {
    id: 2,
    title: 'World Trade Center Asunción',
    description: 'Torre emblemática de 35 pisos que redefine el horizonte de Asunción. Este edificio de uso mixto combina oficinas clase A, un hotel de lujo y un centro de convenciones. Certificado LEED Platinum, incorpora tecnologías sostenibles como paneles solares, sistema de recolección de agua de lluvia y fachada de doble piel para optimización energética.',
    mainImage: 'https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1582383063137-fa31ff9e23ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    completionYear: '2020',
    area: '85,000 m²',
    location: 'Asunción',
    investment: '$180M USD'
  },
  {
    id: 3,
    title: 'Parque Residencial del Lago',
    description: 'Complejo residencial premium que establece nuevos estándares de vida en Paraguay. Consta de cinco torres de 20 pisos con 400 apartamentos de lujo, rodeados de 8 hectáreas de áreas verdes y un lago artificial. Incluye club house, canchas deportivas, piscinas infinity, gimnasio y spa. El diseño paisajístico integra especies nativas y crea microclimas naturales.',
    mainImage: 'https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    completionYear: '2019',
    area: '120,000 m²',
    location: 'San Bernardino',
    investment: '$150M USD'
  },
  {
    id: 4,
    title: 'Terminal Aeroportuaria Silvio Pettirossi',
    description: 'Moderna terminal aeroportuaria que duplicó la capacidad del principal aeropuerto del país. El diseño incorpora elementos de la cultura paraguaya en su arquitectura y cuenta con tecnología de punta en sistemas de control de equipaje y seguridad. Incluye 50 mostradores de check-in, 12 puertas de embarque, y un amplio patio de comidas con vistas a la pista.',
    mainImage: 'https://images.unsplash.com/photo-1513028738826-f000cded30a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1588432892889-b927c8e45315?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1583771803077-4f3e3b657371?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1581558587006-8207c7f5f7c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    ],
    completionYear: '2018',
    area: '65,000 m²',
    location: 'Luque',
    investment: '$200M USD'
  }
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">Obras Realizadas</h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Descubre nuestra trayectoria a través de proyectos emblemáticos que han transformado el paisaje urbano de Paraguay
        </p>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Main Image Section */}
                <div className="lg:w-1/2 relative group">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-[500px] object-cover"
                  />
                </div>

                {/* Project Details Section */}
                <div className="lg:w-1/2 p-10 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
                      {project.title}
                    </h2>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <span className="text-sm text-gray-500 block mb-1">Año de finalización</span>
                        <p className="font-semibold text-blue-600">{project.completionYear}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <span className="text-sm text-gray-500 block mb-1">Inversión</span>
                        <p className="font-semibold text-blue-600">{project.investment}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <span className="text-sm text-gray-500 block mb-1">Área</span>
                        <p className="font-semibold text-blue-600">{project.area}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <span className="text-sm text-gray-500 block mb-1">Ubicación</span>
                        <p className="font-semibold text-blue-600">{project.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>

              {/* Additional Images Section - Adaptive Grid */}
              {project.additionalImages && project.additionalImages.length > 0 && (
                <div className={`grid gap-4 p-8 bg-gray-50 ${project.additionalImages.length === 1 ? 'grid-cols-1' :
                  project.additionalImages.length === 2 ? 'grid-cols-2' :
                    project.additionalImages.length === 3 ? 'grid-cols-3' :
                      'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  }`}>
                  {project.additionalImages.map((image, i) => (
                    <div key={i} className="relative group overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                      <img
                        src={image}
                        alt={`${project.title} - Vista ${i + 1}`}
                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;