import React from "react";
import { leaders, directors, branchChiefs, blackBelts } from "../../data/teamData"; // Datos del equipo

const SectionTitle = ({ title }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl sm:text-4xl font-bold text-red-600 mb-3">{title}</h2>
    <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
  </div>
);

const TeamGrid = ({ data }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {data.map((person) => (
      <div
        key={person.id}
        className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
      >
        <div className="relative w-full h-56 overflow-hidden">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        </div>
        <div className="p-4 text-center">
          <h3 className="text-xl font-bold text-blue-900">{person.name}</h3>
          <p className="text-gray-600 text-sm">{person.title}</p>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-3 rounded-full"></div>
        </div>
      </div>
    ))}
  </div>
);

const Us = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-blue-900">Nosotros</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Conoce a las personas que lideran y representan a IKO Matsushima Chile.
          </p>
        </div>

        {/* Nuestros Líderes */}
        <SectionTitle title="Nuestros Líderes" />
        <TeamGrid data={leaders} />

        {/* Nuestros Directores */}
        <div className="mt-16">
          <SectionTitle title="Nuestros Directores" />
          <TeamGrid data={directors} />
        </div>

        {/* Branch Chief y Dojo Operadores */}
        <div className="mt-16">
          <SectionTitle title="Branch Chief y Dojo Operadores" />
          <TeamGrid data={branchChiefs} />
        </div>

        {/* Nuestros Cinturones Negros */}
        <div className="mt-16">
          <SectionTitle title="Nuestros Cinturones Negros" />
          <TeamGrid data={blackBelts} />
        </div>
      </div>
    </section>
  );
};

export default Us;
