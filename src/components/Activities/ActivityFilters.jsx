import React, { useState, useEffect } from "react";
import { X, Filter } from "lucide-react";

const ActivityFilters = ({ 
  selectedCategory, 
  setSelectedCategory, 
  selectedYear, 
  setSelectedYear, 
  categories, 
  years, 
  activityCount // Nuevo prop para saber cuántas actividades hay
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Detectar si es una pantalla pequeña
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className={`${activityCount > 3 ? "lg:sticky lg:top-0 lg:z-10 bg-white" : ""}`}>
      {/* Botón para abrir los filtros en móviles */}
      {isMobile && (
        <button
          onClick={() => setShowFilters(true)}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-semibold rounded-md w-full mb-4"
        >
          <Filter className="w-5 h-5" />
          Filtrar Actividades
        </button>
      )}

      {/* Contenedor de filtros (visible en escritorio o dentro del modal en móviles) */}
      <div
        className={`${
          isMobile
            ? `fixed inset-0 bg-white p-6 z-50 shadow-lg transition-transform ${
                showFilters ? "translate-x-0" : "-translate-x-full"
              }`
            : "bg-white p-6 shadow-md rounded-lg lg:sticky lg:top-0"
        }`}
      >
        <br/>
        {/* Cerrar filtros en móviles */}
        {isMobile && (
          <button
            onClick={() => setShowFilters(false)}
            className="absolute top-4 right-4 text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        

        {/* Filtro por Categoría */}
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Categoría</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("")}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                selectedCategory === ""
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-gray-300 text-gray-800 hover:bg-red-500 hover:text-white"
              }`}
            >
              Todas
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-gray-300 text-gray-800 hover:bg-red-500 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Filtro por Año */}
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-700 mb-2">Año</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedYear("")}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                selectedYear === ""
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-gray-300 text-gray-800 hover:bg-red-500 hover:text-white"
              }`}
            >
              Todos
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  selectedYear === year
                    ? "bg-red-600 text-white shadow-md"
                    : "bg-gray-300 text-gray-800 hover:bg-red-500 hover:text-white"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Botón para limpiar filtros */}
        <button
          onClick={() => {
            setSelectedCategory("");
            setSelectedYear("");
          }}
          className="w-full mt-4 px-6 py-2 bg-gray-400 text-white font-semibold rounded-md hover:bg-gray-500 transition-all"
        >
          Limpiar Filtros
        </button>

        {/* Botón para aplicar filtros en móviles */}
        {isMobile && (
          <button
            onClick={() => setShowFilters(false)}
            className="w-full mt-2 px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-all"
          >
            Aplicar Filtros
          </button>
        )}
      </div>

      {/* Fondo oscuro cuando los filtros están abiertos en móviles */}
      {isMobile && showFilters && (
        <div
          onClick={() => setShowFilters(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}
    </div>
  );
};

export default ActivityFilters;
