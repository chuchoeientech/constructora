import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Building, Briefcase } from 'lucide-react';

const ClientsPage = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

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
            Cuidamos la confidencialidad. En lugar de logos, te compartimos métricas
            agregadas sobre nuestra relación con clientes. Trabajamos con entidades públicas. Más de 35 entidades públicas y 5 empresas privadas han confiado en nosotros.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[{
            icon: Building,
            value: 35,
            suffix: '+',
            label: 'Entidades públicas',
            description: 'Experiencia en sector público'
          },{
            icon: Briefcase,
            value: 5,
            suffix: '',
            label: 'Empresas privadas',
            description: 'Proyectos con compañías privadas'
          }].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-white to-amber-50 p-8 rounded-3xl shadow-2xl border border-orange-100/50 hover:shadow-orange-500/10 transition-all duration-500 overflow-hidden flex flex-col`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/0 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div className="relative mb-2">
                  <h3 className="text-4xl md:text-5xl font-black text-gray-800">
                    {inView && (
                      <CountUp end={stat.value} duration={2} delay={index * 0.1} />
                    )}
                    <span className="ml-1 text-2xl md:text-3xl font-bold text-gray-600">{stat.suffix}</span>
                  </h3>
                </div>

                <h4 className="text-lg font-bold text-gray-800 mb-1">{stat.label}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientsPage;