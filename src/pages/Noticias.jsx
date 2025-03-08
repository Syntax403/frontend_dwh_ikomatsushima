import React, { useState } from "react";
import { newsData } from "../data/NewsData";
import NewsCard from "../components/News/NewsCard";

const Noticias = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Extraer categorías únicas
  const categories = [...new Set(newsData.map((news) => news.category))];

  // Filtrar noticias por categoría
  const filteredNews = newsData.filter((news) =>
    selectedCategory === "" ? true : news.category === selectedCategory
  );

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-8">Últimas Noticias</h2>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded-md font-medium ${
              selectedCategory === "" ? "bg-red-600 text-white" : "bg-gray-300 text-gray-800 hover:bg-red-500 hover:text-white"
            }`}
            onClick={() => setSelectedCategory("")}
          >
            Todas
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md font-medium ${
                selectedCategory === category ? "bg-red-600 text-white" : "bg-gray-300 text-gray-800 hover:bg-red-500 hover:text-white"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Noticias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredNews.length > 0 ? (
            filteredNews.map((news) => <NewsCard key={news.id} news={news} />)
          ) : (
            <p className="text-center text-gray-600 text-lg col-span-full">
              No hay noticias disponibles en esta categoría.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Noticias;
