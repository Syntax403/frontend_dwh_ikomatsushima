import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero.avif";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
      aria-label="Bienvenidos a IKO Matsushima Chile"
    >
      {/* Degradado superpuesto para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Sección oscura para resaltar el título */}
        <div className="bg-black bg-opacity-75 inline-block p-4 rounded-lg shadow-md">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Bienvenidos a IKO Matsushima Chile
          </h1>
        <p className="mt-4 text-lg md:text-xl text-white drop-shadow">
          Descubre la disciplina y el legado de Sosai Masutatsu Oyama en nuestro dojo
        </p>
        </div>
        
        
        <Link
          to="/actividades"
          className="mt-8 inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-300 shadow-md"
        >
          Explora nuestras actividades y participa con nosotros
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
