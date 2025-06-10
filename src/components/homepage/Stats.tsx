import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Building, Construction, Users } from 'lucide-react';

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="estadisticas" className="py-32 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
            <Building className="w-14 h-14 text-primary mb-6" />
            <h3 className="text-5xl font-bold text-gray-800 mb-4">
              {inView && <CountUp end={150} duration={2.5} />}+
            </h3>
            <p className="text-gray-600 text-lg">Obras Realizadas</p>
          </div>
          <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
            <Construction className="w-14 h-14 text-primary mb-6" />
            <h3 className="text-5xl font-bold text-gray-800 mb-4">
              {inView && <CountUp end={12} duration={2.5} />}
            </h3>
            <p className="text-gray-600 text-lg">Obras en Construcción</p>
          </div>
          <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-xl transform hover:scale-105 transition duration-300">
            <Users className="w-14 h-14 text-primary mb-6" />
            <h3 className="text-5xl font-bold text-gray-800 mb-4">
              {inView && <CountUp end={500} duration={2.5} />}+
            </h3>
            <p className="text-gray-600 text-lg">Clientes Satisfechos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;