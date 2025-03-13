import React, { useState } from "react";
import { newsData } from "../data/NewsData";
import NewsCard from "../components/News/NewsCard";
import heroImage from "../assets/news-hero.avif"; // Imagen para el Hero
import SocialBanner from "../components/banners/SocialBanner";

const Noticias = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Extraer categorías únicas
  const categories = [...new Set(newsData.map((news) => news.category))];

  // Filtrar noticias por categoría
  const filteredNews = newsData.filter((news) =>
    selectedCategory === "" ? true : news.category === selectedCategory
  );

  // Última noticia (la más reciente por fecha)
  const latestNews = [...newsData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )[0];

  return (
    <section className="bg-gray-100">
      {/* Hero Section */}
      <SocialBanner />
      
      <div className="relative w-full h-[35vh] bg-cover bg-center flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="text-5xl font-extrabold">Noticias</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Mantente informado con las últimas novedades y eventos importantes.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Layout con Última Noticia + Sección de Noticias */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Última Noticia */}
          <div className="lg:col-span-1 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Noticia Reciente
            </h2>
            {latestNews && (
              <div>
                <img
                  src={latestNews.image}
                  alt={latestNews.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold">{latestNews.title}</h3>
                <p className="text-gray-600 text-sm">
                  {new Date(latestNews.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700 mt-2">{latestNews.description}</p>
              </div>
            )}
          </div>

          {/* Sección de Noticias */}
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
                Todas
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

            {/* Tarjetas de Noticias */}
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
        </div>
      </div>
    </section>
  );
};

export default Noticias;
