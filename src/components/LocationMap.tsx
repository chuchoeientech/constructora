import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const locations = [
  { id: 1, name: 'Asunción', lat: -25.2867, lng: -57.3333 },
  { id: 2, name: 'Ciudad del Este', lat: -25.5167, lng: -54.6167 },
  { id: 3, name: 'Encarnación', lat: -27.3333, lng: -55.8667 },
];

const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationMap = () => {
  return (
    <section id="ubicaciones" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nuestras Ubicaciones</h2>
        <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={[-25.2867, -57.3333]}
            zoom={7}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={[location.lat, location.lng]}
                icon={customIcon}
              >
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;