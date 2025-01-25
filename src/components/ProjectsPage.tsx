import React from 'react';

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
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Obras Realizadas</h1>
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Main Image */}
                <div className="lg:w-1/2">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                
                {/* Project Details */}
                <div className="lg:w-1/2 p-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h2>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <span className="text-sm text-gray-500">Año de finalización</span>
                      <p className="font-semibold text-blue-600">{project.completionYear}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Inversión</span>
                      <p className="font-semibold text-blue-600">{project.investment}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Área</span>
                      <p className="font-semibold text-blue-600">{project.area}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Ubicación</span>
                      <p className="font-semibold text-blue-600">{project.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-8">{project.description}</p>
                </div>
              </div>
              
              {/* Additional Images */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 bg-gray-50">
                {project.additionalImages.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt={`${project.title} - Vista ${i + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;