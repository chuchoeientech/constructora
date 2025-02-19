import { Building2 } from 'lucide-react';

const clients = [
    {
        id: 1,
        name: 'Banco Continental',
        description: 'Líder en servicios financieros con más de 40 años en el mercado paraguayo',
        logo: 'https://images.unsplash.com/photo-1598425237654-4fc758e50a93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 2,
        name: 'Grupo Cartes',
        description: 'Conglomerado empresarial con presencia en múltiples sectores económicos',
        logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 3,
        name: 'Shopping del Sol',
        description: 'El centro comercial más exclusivo y visitado de Asunción',
        logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 4,
        name: 'Visión Banco',
        description: 'Institución financiera líder en innovación y servicios digitales',
        logo: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 5,
        name: 'Grupo Favero',
        description: 'Referente en el sector agroindustrial y desarrollo inmobiliario',
        logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 6,
        name: 'Núcleo S.A.',
        description: 'Empresa líder en telecomunicaciones y servicios digitales',
        logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
];

const ClientsPage = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Nuestros Clientes
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Empresas líderes que han confiado en nuestra experiencia y profesionalismo
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {clients.map((client) => (
                        <div
                            key={client.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="relative h-48">
                                {client.logo ? (
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                        <Building2 size={48} className="text-gray-400" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
                                    <div className="text-white text-center p-4">
                                        <p className="text-lg font-semibold">{client.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {client.name}
                                </h3>
                                <p className="text-gray-600">
                                    {client.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Nos enorgullece trabajar con las empresas más importantes del país,
                        contribuyendo a su crecimiento y desarrollo a través de nuestros servicios
                        de construcción y desarrollo inmobiliario.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ClientsPage;