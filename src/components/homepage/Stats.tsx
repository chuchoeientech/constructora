import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Building, Construction, Users, Award, Clock, Star } from 'lucide-react';

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const statsData = [
    {
      icon: Building,
      end: 150,
      suffix: '+',
      label: 'Obras Realizadas',
      description: 'Proyectos completados exitosamente',
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50'
    },
    {
      icon: Construction,
      end: 12,
      suffix: '',
      label: 'Obras en Construcción',
      description: 'Proyectos activos en desarrollo',
      gradient: 'from-orange-600 to-red-500',
      bgGradient: 'from-orange-50 to-red-50'
    },
    {
      icon: Users,
      end: 500,
      suffix: '+',
      label: 'Clientes Satisfechos',
      description: 'Clientes que confían en nosotros',
      gradient: 'from-amber-500 to-yellow-500',
      bgGradient: 'from-amber-50 to-yellow-50'
    },
    {
      icon: Award,
      end: 25,
      suffix: '+',
      label: 'Años de Experiencia',
      description: 'Trayectoria en el sector',
      gradient: 'from-orange-400 to-pink-500',
      bgGradient: 'from-orange-50 to-pink-50'
    }
  ];

  return (
    <section id="estadisticas" className="py-32 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 via-transparent to-amber-900/20"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Logros</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cifras que respaldan nuestra trayectoria y compromiso con la excelencia en construcción
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${stat.bgGradient} p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 border border-orange-100/20 backdrop-blur-sm`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Icon with gradient background */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Number with enhanced styling */}
                <div className="relative mb-4">
                  <h3 className="text-4xl md:text-5xl font-black text-gray-800 mb-2">
                    {inView && (
                      <CountUp 
                        end={stat.end} 
                        duration={2.5} 
                        delay={index * 0.2}
                        className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                      />
                    )}
                    <span className="text-3xl md:text-4xl font-bold text-gray-600">{stat.suffix}</span>
                  </h3>
                </div>

                {/* Label and description */}
                <h4 className="text-lg font-bold text-gray-800 mb-2">{stat.label}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>

                {/* Decorative elements */}
                <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${stat.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className={`absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br ${stat.gradient} rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-orange-400/30">
            <Star className="w-5 h-5 text-orange-400 fill-current" />
            <span className="text-white font-medium">Calidad garantizada en cada proyecto</span>
            <Star className="w-5 h-5 text-orange-400 fill-current" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;