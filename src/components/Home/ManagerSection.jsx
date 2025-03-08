import React from "react";
import { managersData } from "../../data/Managers";
import ChileFlag from "../../assets/ChileFlag.avif";
const getLineCount = (title) => {
  if (title.includes("Nacional")) return 6;
  if (title.includes("Norte") || title.includes("Centro")) return 5;
  if (title.includes("Sur")) return 4;
  return 3; // Valor por defecto
};

const ManagerSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-3">
            Conoce a nuestro equipo de Directores
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Lista de directores */}
        <div className="space-y-6">
          {managersData.map((director) => (
            <div
              key={director.id}
              className="w-full max-w-4xl mx-auto border-2 border-black rounded-lg flex items-center justify-between p-4 bg-black shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Imagen */}
              <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-white bg-white flex items-center justify-center overflow-hidden rounded-full">
                <img
                  src={director.image}
                  alt={`Foto de ${director.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Texto */}
              <div className="flex-grow px-4">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-900">
                  {director.name}
                </h3>
                <p className="text-red-600 text-sm sm:text-base">
                  {director.title}
                </p>
              </div>

              {/* Contenedor de líneas amarillas en fila */}
              <div className="flex flex-row items-center space-x-1 mx-4">
                {[...Array(getLineCount(director.title))].map((_, index) => (
                  <div key={index} className="w-4 h-16 bg-yellow-500"></div>
                ))}
              </div>

              {/* Ícono circular con la bandera chilena */}
              <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-black rounded-full overflow-hidden">
                <img
                  src={ChileFlag}
                  alt="Bandera de Chile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagerSection;
