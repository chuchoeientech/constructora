import { useEffect, useState } from 'react';
import { client, urlFor } from '../sanityClient';
import { SanityImageSource } from '../types';

interface ClientItem {
  _id: string;
  nombre: string;
  logo: SanityImageSource;
}

const ClientsPage = () => {
  const [clients, setClients] = useState<ClientItem[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const query = '*[_type == "clientes"]{_id, nombre, logo} | order(nombre asc)';
        const result = await client.fetch<ClientItem[]>(query);
        setClients(result);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClients();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
            Nuestros Clientes
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Empresas e instituciones que han confiado en nuestra experiencia y profesionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {clients.map((clientItem) => (
            <div key={clientItem._id} className="group h-full">
              <div className="flex flex-col items-center text-center p-8 rounded-3xl shadow-lg border border-orange-100 bg-gradient-to-br from-white to-amber-50/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl h-full min-h-[300px]">
                <div className="w-full h-40 sm:h-48 mb-5 rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={urlFor(clientItem.logo).fit('max').width(800).url()}
                    alt={clientItem.nombre}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                  {clientItem.nombre}
                </h3>
              </div>
            </div>
          ))}

          {clients.length === 0 && (
            <div className="col-span-full text-center text-gray-500">No se encontraron clientes.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientsPage;