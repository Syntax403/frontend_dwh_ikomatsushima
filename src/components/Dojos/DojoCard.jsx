import React from "react";
import { MapPin, User, Map } from "lucide-react";

const DojoCard = ({ dojo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Imagen del instructor */}
      <div className="relative overflow-hidden">
        <img
          src={dojo.instructorImage}
          alt={`Instructor ${dojo.instructor}`}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="p-5">
        {/* Nombre del Dojo */}
        <h3 className="text-2xl font-extrabold text-blue-900">{dojo.name}</h3>

        {/* Instructor */}
        <div className="flex items-center text-gray-700 text-sm mt-2">
          <User className="w-4 h-4 mr-2 text-gray-500" />
          <span>
            <strong>Instructor:</strong> {dojo.instructor}
          </span>
        </div>

        {/* Ubicación */}
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <MapPin className="w-4 h-4 mr-2 text-red-500" />
          {dojo.location}
        </div>

        {/* Zona */}
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <Map className="w-4 h-4 mr-2 text-blue-500" />
          <span className="font-semibold">{dojo.zone}</span>
        </div>

        {/* Botón para abrir Maps */}
        <a
          href={dojo.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block text-center bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-2 rounded-md hover:opacity-90 transition-all"
        >
          Ver en Maps
        </a>
      </div>
    </div>
  );
};

export default DojoCard;
