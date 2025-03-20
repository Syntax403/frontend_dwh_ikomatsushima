import React, { useState, useMemo } from "react";
import { useDojosContext } from "../context/DojosContext";
import SectionTitle from "../components/About/SectionTitle";
import TeamGrid from "../components/About/TeamGrid";
import LeaderGrid from "../components/About/LeaderGrid";
import heroImage from "../assets/About-Hero.jpg";
import { leaders } from "../data/teamData";

const AboutUs = () => {
  const [selectedCategory, setSelectedCategory] = useState("leaders");
  const { loading, directors, branchChiefs, blackBelts } = useDojosContext();
  
  // Asegurar que los datos vienen correctamente desde DojosContext
  const publishedDirectors = useMemo(
    () => directors?.results?.filter((d) => d.status === "published") || [],
    [directors]
  );
  const publishedBranchChiefs = useMemo(
    () => branchChiefs?.results?.filter((b) => b.status === "published") || [],
    [branchChiefs]
  );
  const publishedBlackBelts = useMemo(
    () => blackBelts?.results?.filter((bb) => bb.status === "published") || [],
    [blackBelts]
  );

  const categories = {
    leaders: { title: "Líderes", data: leaders || [], component: LeaderGrid },
    directors: { title: "Directores", data: publishedDirectors, component: TeamGrid },
    branchChiefs: { title: "Branch Chiefs", data: publishedBranchChiefs, component: TeamGrid },
    blackBelts: { title: "Cinturones Negros", data: publishedBlackBelts, component: TeamGrid },
  };

  return (
    <section className="bg-gray-100">
      {/* Imagen de fondo con título */}
      <div
        className="relative w-full h-[25vh] bg-cover bg-center flex items-center justify-center text-center rounded-br-sm"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl font-bold">Nosotros</h1>
          <p className="mt-2 text-base max-w-lg mx-auto">
            Conoce a las personas que lideran y representan a IKO Matsushima Chile.
          </p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="mx-4 sm:mx-8 lg:mx-12 px-4 sm:px-3 lg:px-8 py-12">
        {/* Botones de filtro */}
        <div className="flex overflow-x-auto scrollbar-hide gap-2 pb-4 border-b border-gray-300 justify-start sm:justify-center px-2 w-full max-w-full whitespace-nowrap">
          {Object.keys(categories).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-4 py-1 text-sm rounded-full font-medium transition-all duration-300 flex-shrink-0 ${
                selectedCategory === key
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-800 hover:bg-red-500 hover:text-white"
              }`}
            >
              {categories[key].title}
            </button>
          ))}
        </div>

        {/* Sección de contenido según categoría seleccionada */}
        <div key={selectedCategory} className="animate-fade-in mt-8">
          <SectionTitle title={categories[selectedCategory].title} />

          {loading ? (
            <p className="text-center text-gray-500">Cargando...</p>
          ) : categories[selectedCategory].data.length > 0 ? (
            React.createElement(categories[selectedCategory].component, {
              data: categories[selectedCategory].data,
            })
          ) : (
            <p className="text-center text-gray-500">No hay datos disponibles.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
