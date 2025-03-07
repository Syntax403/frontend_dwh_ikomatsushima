// Home.jsx
import React from 'react';
import HeroSection from '../components/Home/HeroSection';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <HeroSection  />

      {/* Sección de Introducción */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-800 text-center">Nuestra Historia</h2>
        <p className="mt-4 text-center text-gray-700">
          En IKO Matsushima Chile fusionamos tradición y modernidad en el mundo del Karate. Nuestro dojo es el espacio donde el respeto, la disciplina y la pasión se unen para formar verdaderos artistas marciales.
        </p>
      </section>

      {/* Sección de Clases */}
      <section className="w-full bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 text-center">Nuestras Clases</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Karate Tradicional</h3>
              <p className="text-gray-600">
                Conoce las bases y la filosofía del Karate tradicional, transmitido de generación en generación.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Defensa Personal</h3>
              <p className="text-gray-600">
                Aprende técnicas efectivas y realistas para protegerte en situaciones cotidianas.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Entrenamiento Avanzado</h3>
              <p className="text-gray-600">
                Perfecciona tus habilidades con sesiones intensivas diseñadas para quienes buscan un nivel superior.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
