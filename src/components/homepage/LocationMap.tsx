import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { useState } from 'react';

const completedWorks = [
  { id: 5, department: 'Concepción', location: 'Concepción', lat: -23.402084, lng: -57.429235, projects: 1, description: 'Obra realizada' },
  { id: 6, department: 'Concepción', location: 'Vallemi', lat: -22.1500, lng: -57.9833, projects: 1, description: 'Obra realizada' },
  { id: 7, department: 'Concepción', location: 'Loreto', lat: -23.2667, lng: -57.0500, projects: 1, description: 'Obra realizada' },
  { id: 8, department: 'Concepción', location: 'Horqueta', lat: -23.343465, lng: -57.044199, projects: 1, description: 'Obra realizada' },
  { id: 9, department: 'Concepción', location: 'Yby Yau', lat: -23.8000, lng: -56.5333, projects: 1, description: 'Obra realizada' },
  { id: 10, department: 'Central', location: 'Ñemby', lat: -25.3949, lng: -57.53574, projects: 1, description: 'Obra realizada' },
  { id: 11, department: 'Central', location: 'Lambaré', lat: -25.33000, lng: -57.64000, projects: 1, description: 'Obra realizada' },
  { id: 12, department: 'Central', location: 'San Antonio', lat: -25.42966, lng: -57.547853, projects: 1, description: 'Obra realizada' },
  { id: 13, department: 'Central', location: 'Limpio', lat: -25.167298, lng: -57.494338, projects: 1, description: 'Obra realizada' },
  { id: 14, department: 'Central', location: 'Luque', lat: -25.27000, lng: -57.48722, projects: 1, description: 'Obra realizada' },
  { id: 15, department: 'Itapúa', location: 'Capitán Meza', lat: -27.02000, lng: -55.57000, projects: 1, description: 'Obra realizada' },
  { id: 16, department: 'Canindeyú', location: 'Saltos del Guairá', lat: -24.055583, lng: -54.308560, projects: 1, description: 'Obra realizada' },
  { id: 17, department: 'Canindeyú', location: 'Yasy Cañy', lat: -24.0833, lng: -55.5667, projects: 1, description: 'Obra realizada' },
  { id: 18, department: 'Cordillera', location: 'San José Obrero', lat: -25.383, lng: -57.133, projects: 1, description: 'Obra realizada' },
  { id: 19, department: 'Cordillera', location: 'Santa Elena', lat: -25.400, lng: -56.800, projects: 1, description: 'Obra realizada' },
  { id: 20, department: 'Paraguarí', location: 'Paraguarí', lat: -25.623833, lng: -57.150199, projects: 1, description: 'Obra realizada' },
  { id: 21, department: 'Guairá', location: 'Villarrica', lat: -25.783535, lng: -56.450593, projects: 1, description: 'Obra realizada' },
  { id: 22, department: 'San Pedro', location: 'Guayaibí', lat: -23.8667, lng: -56.5333, projects: 1, description: 'Obra realizada' },
  { id: 23, department: 'San Pedro', location: 'Lima', lat: -24.2500, lng: -56.3667, projects: 1, description: 'Obra realizada' },
  { id: 24, department: 'San Pedro', location: 'Santa Rosa del Aguaray', lat: -24.2500, lng: -56.8333, projects: 1, description: 'Obra realizada' },
  { id: 25, department: 'San Pedro', location: 'Santaní', lat: -24.0667, lng: -56.3667, projects: 1, description: 'Obra realizada' },
  { id: 26, department: 'Chaco', location: 'Ciudad de Filadelfia', lat: -22.347127, lng: -60.028961, projects: 1, description: 'Obra realizada' },
  { id: 27, department: 'Chaco', location: 'Mariscal Estigarribia', lat: -22.0333, lng: -60.6333, projects: 1, description: 'Obra realizada' },
  { id: 28, department: 'Boquerón', location: 'Loma Plata', lat: -22.3667, lng: -59.8333, projects: 1, description: 'Obra realizada' },
  { id: 29, department: 'Alto Paraná', location: 'Cedrales', lat: -25.654085, lng: -54.718116, projects: 1, description: 'Obra realizada' },
  { id: 30, department: 'Alto Paraná', location: 'Yguazú', lat: -25.4507, lng: -55.0226, projects: 1, description: 'Obra realizada' },
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
            Contamos con obras entregadas en diferentes departamentos del país,
            contribuyendo al desarrollo de la infraestructura nacional con excelencia y compromiso.
          </p>
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