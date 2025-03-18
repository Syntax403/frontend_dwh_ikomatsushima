import React, { useState } from "react";
import { useGetDirectorsQuery, useGetBranchChiefsQuery, useGetBlackBeltsQuery } from "../redux/api/dojosApi";
import SectionTitle from "../components/About/SectionTitle";
import TeamGrid from "../components/About/TeamGrid";
import heroImage from "../assets/About-Hero.jpg";

const AboutUs = () => {
  const [selectedCategory, setSelectedCategory] = useState("leaders");

  // Llamar a la API con RTK Query
  const { data: directors, isLoading: loadingDirectors, error: errorDirectors } = useGetDirectorsQuery();
  const { data: branchChiefs, isLoading: loadingBranchChiefs, error: errorBranchChiefs } = useGetBranchChiefsQuery();
  const { data: blackBelts, isLoading: loadingBlackBelts, error: errorBlackBelts } = useGetBlackBeltsQuery();

  // Definir categorías con datos de la API
  const categories = {
    leaders: { title: "Nuestros Líderes", data: [] }, // Puedes añadir datos estáticos aquí si es necesario
    directors: { title: "Nuestros Directores", data: directors || [] },
    branchChiefs: { title: "Branch Chief y Dojo Operadores", data: branchChiefs || [] },
    blackBelts: { title: "Nuestros Cinturones Negros", data: blackBelts || [] },
  };

  return (
    <section className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative w-full h-[25vh] bg-cover bg-center flex items-center justify-center text-center rounded-br-sm"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-5xl font-extrabold">Nosotros</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Conoce a las personas que lideran y representan a IKO Matsushima Chile.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filtro de Categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(categories).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-2 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === key
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-gray-300 text-gray-800 hover:bg-red-500 hover:text-white"
              }`}
            >
              {categories[key].title}
            </button>
          ))}
        </div>

        {/* Sección de transición entre categorías */}
        <div key={selectedCategory} className="animate-fade-in">
          <SectionTitle title={categories[selectedCategory].title} />

          {/* Mostrar mensajes de carga o error */}
          {(selectedCategory === "directors" && loadingDirectors) ||
          (selectedCategory === "branchChiefs" && loadingBranchChiefs) ||
          (selectedCategory === "blackBelts" && loadingBlackBelts) ? (
            <p className="text-center text-gray-500">Cargando...</p>
          ) : (selectedCategory === "directors" && errorDirectors) ||
            (selectedCategory === "branchChiefs" && errorBranchChiefs) ||
            (selectedCategory === "blackBelts" && errorBlackBelts) ? (
            <p className="text-center text-red-500">Error al cargar datos.</p>
          ) : (
            <TeamGrid data={[...categories[selectedCategory].data]} />
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
