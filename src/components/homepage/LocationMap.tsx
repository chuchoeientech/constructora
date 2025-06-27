import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { useState } from 'react';

const completedWorks = [
  {
    id: 1,
    department: 'Central',
    location: 'Asunción',
    lat: -25.2867,
    lng: -57.3333,
    projects: 12,
    description: 'Capital del país, centro de desarrollo urbano'
  },
  {
    id: 2,
    department: 'Alto Paraná',
    location: 'Ciudad del Este',
    lat: -25.5167,
    lng: -54.6167,
    projects: 8,
    description: 'Ciudad fronteriza, polo comercial importante'
  },
  {
    id: 3,
    department: 'Itapúa',
    location: 'Encarnación',
    lat: -27.3333,
    lng: -55.8667,
    projects: 5,
    description: 'Perla del Sur, turismo y desarrollo'
  },
  {
    id: 4,
    department: 'Cordillera',
    location: 'Caacupé',
    lat: -25.3857,
    lng: -57.1417,
    projects: 3,
    description: 'Centro religioso y cultural'
  }
];

// Icono personalizado simple y funcional
const customIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const LocationMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  const totalProjects = completedWorks.reduce((sum, work) => sum + work.projects, 0);

  return (
    <section id="ubicaciones" className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-amber-400/20 to-orange-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header mejorado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm font-medium rounded-full mb-6 shadow-lg">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Presencia Nacional
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-orange-900 to-red-900 bg-clip-text text-transparent mb-6">
            Nuestras Obras en Todo el País
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Contamos con <span className="font-semibold text-orange-600">{totalProjects} obras entregadas</span> en diferentes departamentos del país,
            contribuyendo al desarrollo de la infraestructura nacional con excelencia y compromiso.
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {completedWorks.map((work) => (
            <div
              key={work.id}
              className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border border-white/20 ${
                selectedLocation === work.id ? 'ring-2 ring-orange-500 shadow-lg' : ''
              }`}
              onClick={() => setSelectedLocation(selectedLocation === work.id ? null : work.id)}
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">{work.projects}</div>
              <div className="text-sm font-medium text-gray-700 mb-1">{work.department}</div>
              <div className="text-xs text-gray-500">{work.location}</div>
            </div>
          ))}
        </div>

        {/* Mapa mejorado */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="h-[700px] relative">
            <MapContainer
              center={[-25.8867, -56.3333]}
              zoom={7}
              style={{ height: '100%', width: '100%' }}
              className="z-0"
              dragging={false}
              scrollWheelZoom={false}
              doubleClickZoom={false}
              zoomControl={false}
              touchZoom={false}
              keyboard={false}
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                maxZoom={19}
              />
              {completedWorks.map((work) => (
                <Marker
                  key={work.id}
                  position={[work.lat, work.lng]}
                  icon={customIcon}
                  eventHandlers={{
                    click: () => setSelectedLocation(selectedLocation === work.id ? null : work.id),
                  }}
                >
                  <Popup className="custom-popup">
                    <div className="font-sans p-2">
                      <div className="flex items-center mb-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                        <h3 className="font-bold text-lg text-gray-900">{work.department}</h3>
                      </div>
                      <p className="text-gray-700 font-medium mb-2">
                        {work.projects} obras realizadas
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Ubicación:</span> {work.location}
                      </p>
                      <p className="text-xs text-gray-500 italic">
                        {work.description}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>

            {/* Overlay con información */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
              <h4 className="font-semibold text-gray-900 mb-2">Leyenda</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">Obras completadas</span>
                </div>
                <div className="text-xs text-gray-500">
                  Haz clic en los marcadores para más información
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer informativo */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Continuamos expandiendo nuestra presencia en todo Paraguay</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;