import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TeamGrid = ({ data }) => {
  const shouldUseSwiper = data.length > 8 || window.innerWidth < 1024;

  return (
    <div className="flex justify-center w-full relative">

      {/* Si hay más de 8 tarjetas o la pantalla es pequeña/mediana, activar Swiper */}
      {shouldUseSwiper ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          className="w-full max-w-7xl"
        >
          {data.map((person) => (
            <SwiperSlide key={person.id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
                {/* Imagen con degradado optimizado */}
                <figure className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden bg-gray-200">
                  <img
                    src={person.image}
                    alt={`Foto de ${person.name}`}
                    className="w-full h-full object-cover object-top transition-opacity duration-500 ease-in-out"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </figure>

                {/* Información del miembro */}
                <div className="p-5 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-900">{person.name}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{person.title}</p>
                  <div className="w-16 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        /* Si hay 8 o menos tarjetas en pantallas grandes, usar grid normal */
        <div
          className={`grid gap-6 w-full max-w-7xl ${
            data.length === 3
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          }`}
        >
          {data.map((person) => (
            <div
              key={person.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
            >
              {/* Imagen con degradado optimizado */}
              <figure className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden bg-gray-200">
                <img
                  src={person.image}
                  alt={`Foto de ${person.name}`}
                  className="w-full h-full object-cover object-top transition-opacity duration-500 ease-in-out"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </figure>

              {/* Información del miembro */}
              <div className="p-5 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900">{person.name}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{person.title}</p>
                <div className="w-52 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamGrid;
