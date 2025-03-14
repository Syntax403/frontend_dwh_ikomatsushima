import React, { useEffect, useMemo } from "react";
import { useGetDojosQuery } from "../../redux/api/dojosApi";
import { useGlobalContext } from "../../context/GlobalContext";
import ChileFlag from "../../assets/ChileFlag.avif";

// Obtener la cantidad de líneas según el grado del director
const getLineCount = (grado) => {
  if (!grado) return 3; // Si no tiene grado, usar valor por defecto
  if (grado >= 7) return 6; // Grado alto (ejemplo: Shihan)
  if (grado >= 5) return 5; // Grado medio
  if (grado >= 3) return 4; // Grado bajo
  return 3;
};

const ManagerSection = () => {
  const { setLoading } = useGlobalContext();
  const { data: dojos, error, isLoading } = useGetDojosQuery();

  // Manejo del loader global
  useEffect(() => {
    if (setLoading) setLoading(isLoading);
  }, [isLoading, setLoading]);

  // Filtrar directores con status "published"
  const directors = useMemo(() => {
    return Array.isArray(dojos)
      ? dojos.filter((dojo) => dojo.is_Director && dojo.status === "published")
      : [];
  }, [dojos]);

  if (error) {
    return (
      <p className="text-center text-red-600 text-lg mt-10">
        Error al cargar los directores.
      </p>
    );
  }

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

        {/* Verificar si hay directores */}
        {directors.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            No hay directores disponibles.
          </p>
        ) : (
          <div className="space-y-6">
            {directors.map((director) => (
              <div
                key={director.id}
                className="w-full max-w-4xl mx-auto border-2 border-black rounded-lg flex items-center justify-between p-4 bg-black shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Imagen */}
                <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-white bg-white flex items-center justify-center overflow-hidden rounded-full">
                  <img
                    src={
                      director.profile_image ||
                      "https://via.placeholder.com/150x150"
                    }
                    alt={`Foto de ${director.full_name || "Desconocido"}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Texto */}
                <div className="flex-grow px-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-900">
                    {director.full_name || "No disponible"}
                  </h3>
                  <p className="text-red-600 text-sm sm:text-base">
                    {director.zona === "Nacional"
                      ? "Director IKO Matsushima Chile"
                      : "Director Zona " + director.zona}
                  </p>
                </div>

                {/* Contenedor de líneas amarillas en fila (según grado) */}
                <div className="flex flex-row items-center space-x-1 mx-4">
                  {[...Array(getLineCount(director.grado))].map((_, index) => (
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
        )}
      </div>
    </section>
  );
};

export default ManagerSection;
