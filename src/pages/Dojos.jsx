import React, { useState } from "react";
import { dojosData } from "../data/DojosData";
import DojoCard from "../components/Dojos/DojoCard";
import heroImage from "../assets/dojo-hero.jpg"; // Imagen para el Hero
import { ChevronDown, ChevronUp } from "lucide-react"; // Íconos para el acordeón

const Dojos = () => {
  const [selectedZone, setSelectedZone] = useState("");
  const [showAccordion, setShowAccordion] = useState(false); // Estado para acordeón móvil

  // Extraer zonas únicas
  const zones = [...new Set(dojosData.map((dojo) => dojo.zone))];

  // Filtrar dojos por zona
  const filteredDojos = dojosData.filter((dojo) =>
    selectedZone === "" ? true : dojo.zone === selectedZone
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
          {/* Dojo más cercano (Columna fija en escritorio, acordeón en móvil) */}
          <div className="lg:col-span-1">
            {/* Modo móvil: Acordeón */}
            <div className="lg:hidden">
              <button
                className="w-full flex justify-between items-center bg-red-600 text-white font-bold py-3 px-4 rounded-md"
                onClick={() => setShowAccordion(!showAccordion)}
              >
                <span>Dojo Más Cercano</span>
                {showAccordion ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {showAccordion && (
                <div className="bg-white p-6 shadow-md rounded-lg mt-2">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">
                    Dojo Más Cercano
                  </h2>
                  <img
                    src={closestDojo.instructorImage}
                    alt={`Instructor ${closestDojo.instructor}`}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold">{closestDojo.name}</h3>
                  <p className="text-gray-600 text-sm">
                    <strong>Instructor:</strong> {closestDojo.instructor}
                  </p>
                  <p className="text-gray-700 mt-2">{closestDojo.location}</p>
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

            {/* Modo escritorio: Columna fija */}
            <div className="hidden lg:block bg-white p-6 shadow-md rounded-lg sticky top-10 h-fit">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Dojo Más Cercano
              </h2>
              <img
                src={closestDojo.instructorImage}
                alt={`Instructor ${closestDojo.instructor}`}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{closestDojo.name}</h3>
              <p className="text-gray-600 text-sm">
                <strong>Instructor:</strong> {closestDojo.instructor}
              </p>
              <p className="text-gray-700 mt-2">{closestDojo.location}</p>
              <a
                href={closestDojo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-center bg-red-600 text-white font-bold py-2 rounded-md hover:bg-red-700 transition-all"
              >
                Ir a Maps
              </a>
            </div>
          </div>

          {/* Sección de Dojos */}
          <div className="lg:col-span-2">
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
        </div>
      </div>
    </section>
  );
};

export default Dojos;
