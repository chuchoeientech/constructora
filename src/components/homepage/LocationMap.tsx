import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const completedWorks = [
  {
    id: 1,
    department: 'Central',
    location: 'Asunción',
    lat: -25.2867,
    lng: -57.3333,
    projects: 12
  },
  {
    id: 2,
    department: 'Alto Paraná',
    location: 'Ciudad del Este',
    lat: -25.5167,
    lng: -54.6167,
    projects: 8
  },
  {
    id: 3,
    department: 'Itapúa',
    location: 'Encarnación',
    lat: -27.3333,
    lng: -55.8667,
    projects: 5
  },
  {
    id: 4,
    department: 'Cordillera',
    location: 'Caacupé',
    lat: -25.3857,
    lng: -57.1417,
    projects: 3
  }
];

const customIcon = new Icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiA1MiI+PHBhdGggZmlsbD0iI0YwMEQwRCIgZD0iTTE2IDBDNy4xNjMgMCAwIDcuMTYzIDAgMTZjMCAxMy4xOTIgMTYgMzYgMTYgMzZzMTYtMjIuODA4IDE2LTM2QzMyIDcuMTYzIDI0LjgzNyAwIDE2IDB6bTAgMjJjLTMuMzE0IDAtNi0yLjY4Ni02LTZzMi42ODYtNiA2LTYgNiAyLjY4NiA2IDYtMi42ODYgNi02IDZ6Ii8+PC9zdmc+',
  iconSize: [32, 52],
  iconAnchor: [16, 52],
  popupAnchor: [0, -52],
});

const LocationMap = () => {
  return (
    <section id="ubicaciones" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Presencia Nacional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contamos con más de 28 obras entregadas en diferentes departamentos del país,
            contribuyendo al desarrollo de la infraestructura nacional.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="h-[600px]">
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
                >
                  <Popup className="custom-popup">
                    <div className="font-sans">
                      <h3 className="font-semibold text-lg mb-2">{work.department}</h3>
                      <p className="text-gray-600">
                        {work.projects} obras realizadas en {work.location}
                      </p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;