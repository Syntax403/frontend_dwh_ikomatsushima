import React, { useState, useMemo, useEffect } from "react";
import { useCategoryContext } from "../context/CategoryContext";
import ActivityCard from "../components/Activities/ActivityCard";
import ActivityFilters from "../components/Activities/ActivityFilters";
import heroImage from "../assets/activities-hero.jpg";

const Activities = () => {
  // 🔥 Estados de los filtros
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  
  // 🔥 Estado para la paginación
  const [page, setPage] = useState(1);

  // 🔥 Obtener actividades desde el contexto
  const { loading, actividades } = useCategoryContext();

  // 🔥 Filtrar actividades según los parámetros seleccionados
  const filteredActivities = useMemo(() => {
    if (!actividades?.posts) return [];
    return actividades.posts.filter(activity => 
      (!selectedCategory || activity.category === selectedCategory) &&
      (!selectedYear || activity.year === selectedYear) &&
      (!selectedMonth || activity.month === selectedMonth)
    );
  }, [actividades, selectedCategory, selectedYear, selectedMonth]);

  // 🔥 Resetear la paginación cuando cambian los filtros
  useEffect(() => setPage(1), [selectedCategory, selectedYear, selectedMonth]);

  // 🔥 Obtener la paginación actual
  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);
  const paginatedActivities = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage;
    return filteredActivities.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredActivities, page]);

  // 🔥 Manejo de la paginación
  const nextPage = () => setPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const prevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <section className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[25vh] bg-cover bg-center flex items-center justify-center text-center rounded-b-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-lg"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-5xl font-extrabold">Actividades</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Explora todas nuestras actividades a lo largo del año.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Grid con Filtros y Actividades */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filtros (Columna Izquierda) */}
          <div className="lg:col-span-1 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Filtrar Actividades</h2>
            <ActivityFilters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
              selectedMonth={selectedMonth}
              setSelectedMonth={setSelectedMonth}
            />
          </div>

          {/* Tarjetas de Actividades (Columna Derecha) */}
          <div className="lg:col-span-3">
            {loading ? (
              <p className="text-center text-gray-600 text-lg">Cargando actividades...</p>
            ) : paginatedActivities.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {paginatedActivities.map((activity) => (
                    <ActivityCard key={activity.id} activity={activity} />
                  ))}
                </div>

                {/* 🔹 Paginación */}
                <div className="flex justify-center mt-6 gap-4">
                  <button
                    onClick={prevPage}
                    disabled={page === 1} 
                    className={`px-4 py-2 rounded-md font-semibold transition-all ${
                      page === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Anterior
                  </button>

                  <span className="text-lg font-semibold text-gray-700">
                    Página {page} de {totalPages}
                  </span>

                  <button
                    onClick={nextPage}
                    disabled={page === totalPages || totalPages === 0} 
                    className={`px-4 py-2 rounded-md font-semibold transition-all ${
                      page === totalPages || totalPages === 0
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Siguiente
                  </button>
                </div>
              </>
            ) : (
              <p className="text-center text-gray-600 text-lg">
                No hay actividades disponibles para los filtros seleccionados.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
