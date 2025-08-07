import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { client, urlFor } from '../../sanityClient';
import { SanityImageSource } from '../../types';

interface Client {
  _id: string;
  nombre: string;
  logo: SanityImageSource;
}

// Estilos personalizados mejorados para los bullets y navegación
const swiperStyles = `
  .swiper-pagination-bullet {
    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%) !important;
    opacity: 0.4;
    width: 12px;
    height: 12px;
    transition: all 0.3s ease;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    transform: scale(1.2);
    box-shadow: 0 0 10px rgba(249, 115, 22, 0.5);
  }
  .swiper-button-next,
  .swiper-button-prev {
    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(249, 115, 22, 0.3);
  }
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(249, 115, 22, 0.4);
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 18px;
    font-weight: bold;
  }
  .client-card {
    background: linear-gradient(135deg, #ffffff 0%, #fef7f0 100%);
    border: 1px solid rgba(249, 115, 22, 0.1);
    backdrop-filter: blur(10px);
  }
  .client-card:hover {
    background: linear-gradient(135deg, #ffffff 0%, #fef3e2 100%);
    border-color: rgba(249, 115, 22, 0.3);
  }
  .client-logo-container {
    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
    position: relative;
  }
  .client-logo-container::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .client-card:hover .client-logo-container::before {
    opacity: 1;
  }
`;

const ClientsCarousel = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      const query = '*[_type == "clientes"]{_id, nombre, logo}';
      const result = await client.fetch<Client[]>(query);
      setClients(result);
    };

    fetchClients();
  }, []);
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-10 blur-3xl"></div>
      
      <style>{swiperStyles}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-6">
            Nuestros Clientes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Empresas e instituciones que han confiado en nuestra experiencia y profesionalismo 
            para llevar a cabo sus proyectos más importantes.
          </p>
        </div>
        
        <div className="relative px-4 sm:px-8 lg:px-12">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={32}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            navigation={{
              enabled: true,
              hideOnClick: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            breakpoints={{
              540: { slidesPerView: 2, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 32 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
              1280: { slidesPerView: 4, spaceBetween: 48 },
            }}
            className="!pb-20 custom-swiper"
          >
            {clients.map((client) => (
              <SwiperSlide key={client._id} className="h-auto">
                <div className="client-card flex flex-col justify-center items-center p-6 rounded-3xl shadow-lg text-center transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 h-full group">
                  <div className="client-logo-container w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-5 rounded-full overflow-hidden p-1.5">
                    <img
                      src={urlFor(client.logo).width(300).url()}
                      alt={client.nombre}
                      className="w-full h-full object-contain rounded-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    {client.nombre}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;