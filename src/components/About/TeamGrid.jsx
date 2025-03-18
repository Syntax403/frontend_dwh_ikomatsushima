import React from "react";
import { MapPin } from "lucide-react"; // 📍 Icono de ubicación
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import chileFlag from "../../assets/ChileFlag.avif";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TeamGrid = ({ data }) => {
  const shouldUseSwiper = data.length > 8 || window.innerWidth < 1024;

  return (
    <div className="flex justify-center w-full relative">
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
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          className="w-full max-w-4xl"
        >
          {data.map((person) => (
            <SwiperSlide key={person.id}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-100 hover:shadow-xl">
                {/* Imagen con degradado */}
                <figure className="relative w-full h-36 sm:h-48 md:h-56 lg:h-64 overflow-hidden bg-gray-200">
                <img
                  src={
                    person.profile_image || "https://via.placeholder.com/150"
                  }
                  alt={`Foto de ${person.full_name}`}
                  className="w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </figure>

              {/* Información del miembro */}
              <div className="p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900">
                  {person.cargo} {person.full_name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base italic">
                  {person.dojo_name}
                </p>
                <div className="w-20 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>

                {/* Roles */}
                <div className="mt-4 flex justify-center gap-2 flex-wrap">
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {person.location}
                  </p>
                </div>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
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
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Imagen con degradado */}
              {/* Imagen con degradado */}
              <figure className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden bg-gray-200">
                <img
                  src={
                    person.profile_image || "https://via.placeholder.com/150"
                  }
                  alt={`Foto de ${person.full_name}`}
                  className="w-full h-full object-cover object-center transition-opacity duration-500 ease-in-out"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </figure>

              {/* Información del miembro */}
              <div className="p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900">
                  {person.cargo} {person.full_name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base italic">
                  {person.dojo_name}
                </p>
                <div className="w-20 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>

                {/* Roles */}
                <div className="mt-4 flex justify-center gap-2 flex-wrap">
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {person.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamGrid;
