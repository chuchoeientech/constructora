import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Torre Corporativa Asunción',
    image: 'https://images.unsplash.com/photo-1590092594687-aeed3c025dae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    progress: 75,
  },
  {
    id: 2,
    title: 'Residencial Las Palmas',
    image: 'https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    progress: 45,
  },
  {
    id: 3,
    title: 'Centro Comercial del Este',
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    progress: 30,
  },
];

const CurrentProjects = () => {
  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Obras en Proceso</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                        Progreso
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        {project.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div
                      style={{ width: `${project.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                    ></div>
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