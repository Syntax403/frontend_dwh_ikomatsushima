import React, { useState, useEffect } from "react";
import { X, Filter } from "lucide-react";
import { useCategoryContext } from "../../context/CategoryContext";

// Diccionario de nombres de los meses
const MONTH_NAMES = {
  1: "Enero",
  2: "Febrero",
  3: "Marzo",
  4: "Abril",
  5: "Mayo",
  6: "Junio",
  7: "Julio",
  8: "Agosto",
  9: "Septiembre",
  10: "Octubre",
  11: "Noviembre",
  12: "Diciembre",
};

const ActivityFilters = ({
  selectedCategory,
  setSelectedCategory,
  selectedYear,
  setSelectedYear,
  selectedMonth,
  setSelectedMonth,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [showFilters, setShowFilters] = useState(false);

  // Obtener datos desde CategoryContext
  const { loading, categories, years, months } = useCategoryContext();

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div>
      {/* Botón de Filtros en Móvil */}
      {isMobile && (
        <button
          onClick={() => setShowFilters(true)}
          className="bg-red-600 text-white p-2 rounded-md w-full"
        >
          <Filter className="w-5 h-5 inline" /> Filtrar Actividades
        </button>
      )}

      <div
        className={`fixed inset-y-0 left-0 w-4/5 bg-white p-6 z-50 shadow-lg transition-transform ${
          isMobile
            ? showFilters
              ? "translate-x-0"
              : "-translate-x-full"
            : "relative"
        }`}
      >
        {isMobile && (
          <button
            onClick={() => setShowFilters(false)}
            className="absolute top-4 right-4 text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        {/* 🔹 Filtro de Categoría */}
        <h3 className="text-lg font-medium text-gray-700 mb-2">Categoría</h3>
        {loading ? (
          <p className="text-gray-500 text-sm">Cargando categorías...</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setSelectedCategory("");
                setSelectedYear("");
                setSelectedMonth("");
              }}
              className={`px-4 py-2 rounded-md font-medium ${
                selectedCategory === ""
                  ? "bg-red-600 text-white"
                  : "bg-gray-300"
              }`}
            >
              Todas
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.slug);
                  setSelectedYear("");
                  setSelectedMonth("");
                }}
                className={`px-4 py-2 rounded-md font-medium ${
                  selectedCategory === category.slug
                    ? "bg-red-600 text-white"
                    : "bg-gray-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* 🔹 Filtro de Año */}
        {selectedCategory && years.length > 0 && (
          <>
            <h3 className="text-lg font-medium text-gray-700 mt-4">Año</h3>
            {loading ? (
              <p className="text-gray-500 text-sm">Cargando años...</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 rounded-md font-medium ${
                      selectedYear === year
                        ? "bg-red-600 text-white"
                        : "bg-gray-300"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </>
        )}

        {/* 🔹 Filtro de Mes */}
        {selectedCategory && selectedYear && months.length > 0 && (
          <>
            <h3 className="text-lg font-medium text-gray-700 mt-4">Mes</h3>
            {loading ? (
              <p className="text-gray-500 text-sm">Cargando meses...</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {months.map((month) => (
                  <button
                    key={month}
                    onClick={() => setSelectedMonth(month)}
                    className={`px-4 py-2 rounded-md font-medium ${
                      selectedMonth === month
                        ? "bg-red-600 text-white"
                        : "bg-gray-300"
                    }`}
                  >
                    {MONTH_NAMES[month]}
                  </button>
                ))}
              </div>
            )}
          </>
        )}

        {/* 🔹 Botón para limpiar filtros */}
        <button
          onClick={() => {
            setSelectedCategory("");
            setSelectedYear("");
            setSelectedMonth("");
          }}
          className="w-full mt-4 px-6 py-2 bg-gray-400 text-white font-semibold rounded-md hover:bg-gray-500 transition-all"
        >
          Limpiar Filtros
        </button>

        {/* 🔹 Botón para cerrar filtros en móvil */}
        {isMobile && (
          <button
            onClick={() => setShowFilters(false)}
            className="w-full mt-2 px-6 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-all"
          >
            Aplicar Filtros
          </button>
        )}
      </div>
    </div>
  );
};

export default ActivityFilters;
