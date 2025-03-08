import React, { useState } from "react";
import { activitiesData } from "../data/Events";
import ActivityCard from "../components/Activities/ActivityCard";
import ActivityFilters from "../components/Activities/ActivityFilters";
import heroImage from "../assets/activities-hero.jpg";

const Activities = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Extraer categorías únicas y años únicos para los filtros
  const categories = [...new Set(activitiesData.map((activity) => activity.category))];
  const years = [...new Set(activitiesData.map((activity) => new Date(activity.date).getFullYear()))].sort();

  // Filtrar actividades según la categoría y el año seleccionados
  const filteredActivities = activitiesData.filter((activity) => {
    const activityYear = new Date(activity.date).getFullYear();
    return (
      (selectedCategory === "" || activity.category === selectedCategory) &&
      (selectedYear === "" || activityYear === selectedYear)
    );
  });

  // Contar actividades filtradas
  const activityCount = filteredActivities.length;

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
          <div
            className={`lg:col-span-1 bg-white p-6 shadow-md rounded-lg ${
              activityCount > 3 ? "sticky top-10 z-10" : ""
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Filtrar Actividades</h2>
            <ActivityFilters
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
              categories={categories}
              years={years}
              activityCount={activityCount} // Se pasa el recuento dinámico de actividades
            />
          </div>

          {/* Tarjetas de Actividades (Columna Derecha) */}
          <div className="lg:col-span-3">
            {activityCount > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredActivities.map((activity) => (
                  <ActivityCard key={activity.id} activity={activity} />
                ))}
              </div>
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
