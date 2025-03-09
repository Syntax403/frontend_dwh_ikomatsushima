import React, { useState } from "react";
import heroImage from "../assets/dojo-hero.jpg"; // Imagen para el Hero
import { dojosData } from "../data/DojosData"; // Datos de dojos
import DojoCard from "../components/Dojos/DojoCard"; // Componente para las tarjetas de dojos

const Dojos = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Extraer categorías únicas
  const categories = [...new Set(dojosData.map((dojo) => dojo.category))];

  // Filtrar dojos por categoría
  const filteredDojos = dojosData.filter((dojo) =>
    selectedCategory === "" ? true : dojo.category === selectedCategory
  );

  // Dojo más cercano (simulación, puede ser reemplazado con API de geolocalización)
  const closestDojo = dojosData[0];

  return (
    <section className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[35vh] bg-cover bg-center flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-5xl font-extrabold">Dojos</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Encuentra el dojo más cercano y mejora tus habilidades en Karate.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Layout con Dojo Cercano + Sección de Dojos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Dojo más cercano */}
          <div className="lg:col-span-1 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Dojo más Cercano por Ubicación
            </h2>
            {closestDojo && (
              <div>
                <img
                  src={closestDojo.image}
                  alt={closestDojo.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold">{closestDojo.name}</h3>
                <p className="text-gray-600 text-sm">{closestDojo.location}</p>
                <a
                  href={closestDojo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center bg-red-600 text-white font-bold py-2 rounded-md hover:bg-red-700 transition-all"
                >
                  Ir a Maps
                </a>
              </div>
            )}
          </div>

          {/* Sección de Dojos */}
          <div className="lg:col-span-2">
            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                className={`px-4 py-2 rounded-md font-medium ${
                  selectedCategory === ""
                    ? "bg-red-600 text-white"
                    : "bg-gray-300 text-gray-800 hover:bg-red-500 hover:text-white"
                }`}
                onClick={() => setSelectedCategory("")}
              >
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-md font-medium ${
                    selectedCategory === category
                      ? "bg-red-600 text-white"
                      : "bg-gray-300 text-gray-800 hover:bg-red-500 hover:text-white"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Tarjetas de Dojos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredDojos.length > 0 ? (
                filteredDojos.map((dojo) => <DojoCard key={dojo.id} dojo={dojo} />)
              ) : (
                <p className="text-center text-gray-600 text-lg col-span-full">
                  No hay dojos disponibles en esta categoría.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dojos;
