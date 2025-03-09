import React, { useState } from "react";
import { dojosData } from "../data/DojosData";
import DojoCard from "../components/Dojos/DojoCard";
import heroImage from "../assets/dojo-hero.jpg"; // Imagen para el Hero

const Dojos = () => {
  const [selectedZone, setSelectedZone] = useState("");

  // Extraer zonas únicas
  const zones = [...new Set(dojosData.map((dojo) => dojo.zone))];

  // Filtrar dojos por zona
  const filteredDojos = dojosData.filter((dojo) =>
    selectedZone === "" ? true : dojo.zone === selectedZone
  );

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
        {/* Filtros por Zona */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded-md font-medium ${
              selectedZone === ""
                ? "bg-red-600 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-red-500 hover:text-white"
            }`}
            onClick={() => setSelectedZone("")}
          >
            Todas las Zonas
          </button>
          {zones.map((zone) => (
            <button
              key={zone}
              className={`px-4 py-2 rounded-md font-medium ${
                selectedZone === zone
                  ? "bg-red-600 text-white"
                  : "bg-gray-300 text-gray-800 hover:bg-red-500 hover:text-white"
              }`}
              onClick={() => setSelectedZone(zone)}
            >
              {zone}
            </button>
          ))}
        </div>

        {/* Tarjetas de Dojos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredDojos.length > 0 ? (
            filteredDojos.map((dojo) => <DojoCard key={dojo.id} dojo={dojo} />)
          ) : (
            <p className="text-center text-gray-600 text-lg col-span-full">
              No hay dojos disponibles en esta zona.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dojos;
