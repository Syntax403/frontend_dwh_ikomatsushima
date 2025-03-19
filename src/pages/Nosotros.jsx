import React, { useState, useEffect } from "react";
import {
  useGetDirectorsQuery,
  useGetBranchChiefsQuery,
  useGetBlackBeltsQuery,
} from "../redux/api/dojosApi";
import SectionTitle from "../components/About/SectionTitle";
import TeamGrid from "../components/About/TeamGrid";
import LeaderGrid from "../components/About/LeaderGrid";
import heroImage from "../assets/About-Hero.jpg";
import { leaders } from "../data/teamData";

const AboutUs = () => {
  const [selectedCategory, setSelectedCategory] = useState("leaders");
  const [blackBeltsAllData, setBlackBeltsAllData] = useState([]);

  const { data: directorsApi, isLoading: loadingDirectors, error: errorDirectors } = useGetDirectorsQuery();
  const { data: branchChiefsApi, isLoading: loadingBranchChiefs, error: errorBranchChiefs } = useGetBranchChiefsQuery();
  const { data: blackBeltsApi, isLoading: loadingBlackBelts, error: errorBlackBelts } = useGetBlackBeltsQuery();

  useEffect(() => {
    if (blackBeltsApi?.results) {
      let allResults = [...blackBeltsApi.results];
      let nextPage = blackBeltsApi.next;

      const fetchNextPage = async () => {
        while (nextPage) {
          try {
            const response = await fetch(nextPage);
            const data = await response.json();
            allResults = [...allResults, ...data.results];
            nextPage = data.next;
          } catch (error) {
            console.error("Error cargando páginas de cinturones negros:", error);
            break;
          }
        }
        setBlackBeltsAllData(allResults.length ? allResults : []);
      };

      fetchNextPage();
    }
  }, [blackBeltsApi]);

  const categories = {
    leaders: { title: "Líderes", data: leaders || [], component: LeaderGrid },
    directors: { title: "Directores", data: directorsApi?.results || [], component: TeamGrid },
    branchChiefs: { title: "Branch Chiefs", data: branchChiefsApi?.results || [], component: TeamGrid },
    blackBelts: { title: "Cinturones Negros", data: blackBeltsAllData.length > 0 ? blackBeltsAllData : blackBeltsApi?.results || [], component: TeamGrid },
  };

  return (
    <section className="bg-gray-100">
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

      <div className="mx-4 sm:mx-8 lg:mx-12 px-4 sm:px-3 lg:px-8 py-12">
        {/* Filtro compacto con scroll horizontal */}
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

        <div key={selectedCategory} className="animate-fade-in mt-8">
          <SectionTitle title={categories[selectedCategory].title} />

          {(selectedCategory === "directors" && loadingDirectors) ||
          (selectedCategory === "branchChiefs" && loadingBranchChiefs) ||
          (selectedCategory === "blackBelts" && loadingBlackBelts) ? (
            <p className="text-center text-gray-500">Cargando...</p>
          ) : (selectedCategory === "directors" && errorDirectors) ||
            (selectedCategory === "branchChiefs" && errorBranchChiefs) ||
            (selectedCategory === "blackBelts" && errorBlackBelts) ? (
            <p className="text-center text-red-500">Error al cargar datos.</p>
          ) : Array.isArray(categories[selectedCategory].data) ? (
            React.createElement(categories[selectedCategory].component, { data: categories[selectedCategory].data })
          ) : (
            <p className="text-center text-gray-500">No hay datos disponibles.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
