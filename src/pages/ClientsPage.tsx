import { Building2, Star, Award, Users, TrendingUp } from 'lucide-react';

const clients = [
    {
        id: 1,
        name: 'Banco Continental',
        description: 'Líder en servicios financieros con más de 40 años en el mercado paraguayo',
        logo: 'https://images.unsplash.com/photo-1598425237654-4fc758e50a93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Financiero',
        years: '15+ años'
    },
    {
        id: 2,
        name: 'Grupo Cartes',
        description: 'Conglomerado empresarial con presencia en múltiples sectores económicos',
        logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Conglomerado',
        years: '12+ años'
    },
    {
        id: 3,
        name: 'Shopping del Sol',
        description: 'El centro comercial más exclusivo y visitado de Asunción',
        logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Retail',
        years: '8+ años'
    },
    {
        id: 4,
        name: 'Visión Banco',
        description: 'Institución financiera líder en innovación y servicios digitales',
        logo: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Financiero',
        years: '10+ años'
    },
    {
        id: 5,
        name: 'Grupo Favero',
        description: 'Referente en el sector agroindustrial y desarrollo inmobiliario',
        logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Agroindustrial',
        years: '20+ años'
    },
    {
        id: 6,
        name: 'Núcleo S.A.',
        description: 'Empresa líder en telecomunicaciones y servicios digitales',
        logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        category: 'Tecnología',
        years: '6+ años'
    },
];

const stats = [
    { icon: Users, value: '150+', label: 'Clientes Satisfechos' },
    { icon: Award, value: '25+', label: 'Años de Experiencia' },
    { icon: Building2, value: '500+', label: 'Proyectos Completados' },
    { icon: TrendingUp, value: '98%', label: 'Tasa de Satisfacción' },
];

const ClientsPage = () => {
    return (
        <section className="relative py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-50" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F97316' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-medium mb-6">
                        <Star className="w-4 h-4 mr-2" />
                        Clientes de Confianza
                    </div>
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-orange-800 to-amber-800 bg-clip-text text-transparent mb-6">
                        Nuestros Clientes
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Empresas líderes que han confiado en nuestra experiencia y profesionalismo 
                        para construir sus sueños y proyectos más ambiciosos
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white mb-4">
                                <stat.icon className="w-8 h-8" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Clients Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {clients.map((client) => (
                        <div
                            key={client.id}
                            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100"
                        >
                            {/* Card Header */}
                            <div className="relative h-56 overflow-hidden">
                                {client.logo ? (
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                                        <Building2 size={64} className="text-gray-400" />
                                    </div>
                                )}
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                                    <div className="p-6 text-white w-full">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="px-3 py-1 bg-orange-500/80 backdrop-blur-sm rounded-full text-sm font-medium">
                                                {client.category}
                                            </span>
                                            <span className="text-sm font-medium">{client.years}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                                        {client.name}
                                    </h3>
                                    <div className="flex space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {client.description}
                                </p>
                                
                                {/* Category Badge */}
                                <div className="flex items-center justify-between">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                        {client.category}
                                    </span>
                                    <span className="text-sm text-gray-500 font-medium">
                                        {client.years}
                                    </span>
                                </div>
                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange-500 transition-all duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Construyendo el Futuro Juntos
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nos enorgullece trabajar con las empresas más importantes del país,
                            contribuyendo a su crecimiento y desarrollo a través de nuestros servicios
                            de construcción y desarrollo inmobiliario de alta calidad.
                        </p>
                        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <Award className="w-5 h-5 mr-2" />
                            Conoce Nuestros Proyectos
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsPage;