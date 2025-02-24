import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const clients = [
  {
    id: 1,
    name: 'Banco Nacional',
    logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 2,
    name: 'Shopping Del Sol',
    logo: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 3,
    name: 'Universidad Nacional',
    logo: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 4,
    name: 'Hospital Central',
    logo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 5,
    name: 'Municipalidad de Asunción',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 6,
    name: 'Centro Comercial Paseo La Galería',
    logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 7,
    name: 'Ministerio de Obras Públicas',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 8,
    name: 'Terminal de Ómnibus',
    logo: 'https://images.unsplash.com/photo-1495435229349-e86db7bfa013?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  }
];

const ClientsCarousel = () => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Nuestros Clientes</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Empresas e instituciones que han confiado en nuestra experiencia y profesionalismo para llevar a cabo sus proyectos más importantes.
        </p>
        <div className="relative px-4 sm:px-8 lg:px-12">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            navigation={{
              enabled: true,
              hideOnClick: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            breakpoints={{
              540: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 4, spaceBetween: 32 },
            }}
            className="!pb-14 custom-swiper"
          >
            {clients.map((client) => (
              <SwiperSlide key={client.id} className="h-auto">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{client.name}</h3>
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