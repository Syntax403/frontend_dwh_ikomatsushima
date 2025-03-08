import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero.avif";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[75vh] sm:h-[80vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-label="Bienvenidos a IKO Matsushima Chile"
    >
      {/* Degradado para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido centrado */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Contenedor del título con animación */}
        <div className="bg-black bg-opacity-70 inline-block px-10 py-8 rounded-lg shadow-2xl backdrop-blur-md animate-fade-in">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-4 animate-slide-up">
            Bienvenidos a <span className="text-red-500">IKO Matsushima Chile</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white drop-shadow-lg max-w-3xl mx-auto animate-fade-in">
            Descubre la disciplina y el legado de <strong>Sosai Masutatsu Oyama</strong> en nuestro dojo.
          </p>
        </div>

        {/* Botón con efecto de pulsación */}
        <Link
          to="/actividades"
          className="mt-12 inline-block px-12 py-4 bg-red-600 text-white font-semibold text-lg rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl animate-pulse"
        >
          Explora nuestras actividades
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
