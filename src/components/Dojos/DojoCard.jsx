import React from "react";
import { MapPin, User, Map } from "lucide-react";
import chileflag from "../../assets/ChileFlag.avif"
const DojoCard = ({ dojo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      {/* Imagen del instructor */}
      <div className="relative overflow-hidden">
        <img
          src={dojo.profile_image || chileflag} // ✅ Imagen por defecto si no hay imagen
          
          alt={`Instructor ${dojo.full_name || "Desconocido"}`} // ✅ Prevención de undefined
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="p-5">
        {/* Nombre del Dojo e Instructor */}
        <h3 className="text-2xl font-extrabold text-blue-900">
          {} {dojo.dojo_name || "No disponible"}
        </h3>

        {/* Instructor */}
        <div className="flex items-center text-gray-700 text-sm mt-2">
          <User className="w-4 h-4 mr-2 text-gray-500" />
          <span>
            <strong>{dojo.cargo || "Instructor"}</strong> {dojo.full_name || "No disponible"}
          </span>
        </div>

        {/* Ubicación */}
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <MapPin className="w-4 h-4 mr-2 text-red-500" />
          {dojo.location || "Ubicación desconocida"}
        </div>

        {/* Zona */}
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <Map className="w-4 h-4 mr-2 text-blue-500" />
          <span className="font-semibold"> IKO MATSUSHIMA CHILE</span>
        </div>

        {/* Botón para abrir Maps */}
        {dojo.location ? (
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dojo.location)}`} // ✅ Enlace dinámico a Maps
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-2 rounded-md hover:opacity-90 transition-all"
          >
            Ver en Maps
          </a>
        ) : (
          <p className="mt-4 text-center text-gray-500 text-sm">Ubicación no disponible</p>
        )}
      </div>
    </div>
  );
};

export default DojoCard;
