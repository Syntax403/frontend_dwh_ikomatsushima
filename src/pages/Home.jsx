// Home.jsx
import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import ManagerSection from '../components/Home/ManagerSection';
// import EventSection from '../components/Home/EventSection';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <HeroSection  />

      {/* Sección de Directores */}
      <section className="w-full bg-gray-100 py-12">
        <ManagerSection />
      </section>
      {/* Sección de Introducción */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-800 text-center">Nuestra Historia</h2>
        <p className="mt-4 text-center text-gray-700">
          En IKO Matsushima Chile fusionamos tradición y modernidad en el mundo del Karate. Nuestro dojo es el espacio donde el respeto, la disciplina y la pasión se unen para formar verdaderos artistas marciales.
        </p>
      </section>

      
      {/* Sección de Eventos */}
      {/* <EventSection /> */}
    </div>
  );
};

export default Home;
