import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Sample card data
const cardsData = [
  { id: 1, title: "Torneos Internacionales", description: "Participa en eventos de alto nivel representando a IKO Matsushima Chile en competencias globales.", buttonText: "Ver más", image: "/assets/torneos.jpg" },
  { id: 2, title: "¿Necesitas entrenamiento?", description: "Únete a nuestras clases especializadas y mejora tus habilidades con instructores certificados.", buttonText: "Inscribirme", image: "/assets/entrenamiento.jpg" },
  { id: 3, title: "Historia del Kyokushin", description: "Conoce más sobre la filosofía y legado del Karate Kyokushin en IKO Matsushima.", buttonText: "Descubrir", image: "/assets/historia.jpg" },
  { id: 4, title: "Seminarios y Capacitaciones", description: "Aprende de los mejores en nuestros seminarios con maestros internacionales.", buttonText: "Participar", image: "/assets/seminarios.jpg" },
];

const IkoMatsushimaSection = () => {
  return (
    <section className="bg-gray-900 py-12 lg:py-16 overflow-hidden text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12 items-center lg:flex-row lg:items-start">
          {/* Left Column: Text Content */}
          <div className="w-full text-center lg:text-left lg:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 leading-tight">
              ¿Sabías que los miembros de <span className="text-yellow-400">IKO Matsushima Chile</span> 
              participan en <span className="text-yellow-400">más de 5 eventos</span> al año?
            </h2>
            <p className="text-gray-300 mt-4 text-lg leading-relaxed">
              Y que han representado a Chile en múltiples competencias internacionales, logrando excelentes resultados. 
              <br className="hidden sm:block" />
              ¡Entrena con nosotros y prepárate para el siguiente desafío!
            </p>
            <button className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-all">
              Quiero unirme
            </button>
          </div>

          {/* Right Column: Swiper Slider */}
          <div className="w-full lg:w-2/3">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                480: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 },
                1280: { slidesPerView: 3 },
              }}
            >
              {cardsData.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden flex flex-col h-full">
                    {card.image && (
                      <img src={card.image} alt={card.title} className="w-full h-44 object-cover" />
                    )}
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-yellow-400 mb-2">{card.title}</h3>
                      <p className="text-gray-300 flex-grow">{card.description}</p>
                      <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all self-start">
                        {card.buttonText}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IkoMatsushimaSection;