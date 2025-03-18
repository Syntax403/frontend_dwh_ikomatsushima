import React, { useState, useEffect } from "react";
import { useGetDojosQuery } from "../redux/api/dojosApi";
import { useGlobalContext } from "../context/GlobalContext";
import DojoCard from "../components/Dojos/DojoCard";
import heroImage from "../assets/dojo-hero.jpg";

const Dojos = () => {
  const { setLoading } = useGlobalContext();
  const [selectedZone, setSelectedZone] = useState("");
  const [page, setPage] = useState(1);

  // Llamada a la API con filtros dinámicos
  const { data, error, isFetching } = useGetDojosQuery({
    page,
    zona: selectedZone, // Enviar la zona directamente al backend
  });

  useEffect(() => {
    if (setLoading) setLoading(isFetching);
  }, [isFetching, setLoading]);

  // Datos de los dojos
  const dojos = data?.results || [];
  const totalPages = Math.ceil(data?.count / 3) || 1;
  const hasNextPage = Boolean(data?.next);
  const hasPrevPage = Boolean(data?.previous);

  const handleNextPage = () => {
    if (hasNextPage) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (hasPrevPage) setPage(page - 1);
  };

  if (error) {
    return <p className="text-center text-red-600 text-lg mt-10">Error al cargar los dojos.</p>;
  }

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
              selectedZone === "" ? "bg-red-600 text-white" : "bg-gray-300 text-gray-800 hover:bg-red-500 hover:text-white"
            }`}
            onClick={() => setSelectedZone("")}
          >
            Todas las Zonas
          </button>
          {["Norte", "Centro", "Sur"].map((zone) => (
            <button
              key={zone}
              className={`px-4 py-2 rounded-md font-medium ${
                selectedZone === zone ? "bg-red-600 text-white" : "bg-gray-300 text-gray-800 hover:bg-red-500 hover:text-white"
              }`}
              onClick={() => setSelectedZone(zone)}
            >
              {zone}
            </button>
          ))}
        </div>

        {/* Tarjetas de Dojos con mejor responsividad */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
          {dojos.length > 0 ? (
            dojos.map((dojo) => <DojoCard key={dojo.id} dojo={dojo} />)
          ) : (
            <p className="text-center text-gray-600 text-lg col-span-full">
              No hay dojos disponibles en esta zona.
            </p>
          )}
        </div>

        {/* Paginación (se oculta si solo hay una página) */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrevPage}
              disabled={!hasPrevPage}
              className={`px-4 py-2 rounded-md font-medium ${
                !hasPrevPage ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-red-600 text-white hover:bg-red-700"
              }`}
            >
              Anterior
            </button>
            <span className="px-4 py-2 font-medium">Página {page} de {totalPages}</span>
            <button
              onClick={handleNextPage}
              disabled={!hasNextPage}
              className={`px-4 py-2 rounded-md font-medium ${
                !hasNextPage ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-red-600 text-white hover:bg-red-700"
              }`}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dojos;
