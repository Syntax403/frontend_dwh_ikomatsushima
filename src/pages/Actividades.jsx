import React, { useState, useEffect } from "react";
import { useGetActividadesQuery } from "../redux/api/CategoryApi"; 
import ActivityCard from "../components/Activities/ActivityCard";
import ActivityFilters from "../components/Activities/ActivityFilters";
import heroImage from "../assets/activities-hero.jpg";

const Activities = () => {
  // 🔥 Estados de los filtros
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  
  // 🔥 Estados para la paginación
  const [page, setPage] = useState(1);
  const [allActivities, setAllActivities] = useState([]); // Actividades de la página actual

  // 🔥 Obtener actividades con paginación
  const { data, isLoading, error } = useGetActividadesQuery({
    year: selectedYear,
    month: selectedMonth,
    category: selectedCategory,
    page,
  });

  // 🔥 Actualizar lista de actividades cuando cambia el filtro o la página
  useEffect(() => {
    if (data && data.posts) {
      setAllActivities(data.posts); // ⚡ Reemplazar actividades en cada nueva página
    }
  }, [data, page]);

  // 🔥 Resetear la paginación cuando cambia un filtro
  useEffect(() => {
    setPage(1); // Reiniciar página al cambiar filtros
  }, [selectedCategory, selectedYear, selectedMonth]);

  // 🔥 Manejar la paginación
  const nextPage = () => {
    if (data?.next) setPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (data?.previous && page > 1) setPage((prevPage) => prevPage - 1);
  };

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
        {/* Layout en grid con dos columnas */}
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
            {isLoading ? (
              <p className="text-center text-gray-600 text-lg">Cargando actividades...</p>
            ) : error ? (
              <p className="text-center text-red-500 text-lg">Error al cargar las actividades.</p>
            ) : allActivities.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {allActivities.map((activity) => (
                    <ActivityCard key={activity.id} activity={activity} />
                  ))}
                </div>

                {/* 🔹 Paginación */}
                <div className="flex justify-center mt-6 gap-4">
                  <button
                    onClick={prevPage}
                    disabled={!data?.previous} 
                    className={`px-4 py-2 rounded-md font-semibold transition-all ${
                      !data?.previous ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Anterior
                  </button>

                  <span className="text-lg font-semibold text-gray-700">
                    Página {page}
                  </span>

                  <button
                    onClick={nextPage}
                    disabled={!data?.next} 
                    className={`px-4 py-2 rounded-md font-semibold transition-all ${
                      !data?.next ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
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
