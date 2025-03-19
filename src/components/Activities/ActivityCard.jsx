import React, { useState } from "react";
import { Calendar, MapPin, X, Info } from "lucide-react"; // Íconos adicionales

const ActivityCard = ({ activity }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Tarjeta de Actividad */}
      <div
        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        {/* Imagen y Categoría */}
        <div className="relative">
          <img
            src={activity.thumbnail || "/media/default-placeholder.png"} // 🔥 Asegurar imagen
            alt={activity.title}
            className="w-full h-56 object-cover"
          />
          <span className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 text-sm font-medium rounded-lg shadow-md">
            {activity.category || "Sin categoría"} {/* 🔥 Mostrar nombre de la categoría */}
          </span>
        </div>

        {/* Contenido */}
        <div className="p-5">
          <h3 className="text-2xl font-extrabold text-blue-900 mb-2">{activity.title}</h3>

          {/* Fecha del Evento */}
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <Calendar className="w-4 h-4 mr-2" />
            {activity.eventDate ? new Date(activity.eventDate).toLocaleDateString() : "Fecha no disponible"}
          </div>

          {/* Ubicación (si está disponible) */}
          {activity.location && (
            <div className="flex items-center text-gray-800 font-semibold mb-4">
              <MapPin className="w-4 h-4 mr-2 text-red-500" />
              {activity.location}
            </div>
          )}

          {/* Botón para abrir detalles */}
          <button
            className="w-full bg-blue-900 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition-all"
            onClick={(e) => {
              e.stopPropagation(); // Evita que el clic en el botón abra el modal de la tarjeta
              setShowModal(true);
            }}
          >
            Ver Detalles
          </button>
        </div>
      </div>

      {/* Modal de Detalles */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            {/* Botón de Cerrar */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Imagen */}
            <img
              src={activity.thumbnail || "/media/default-placeholder.png"}
              alt={activity.title}
              className="w-full h-60 object-cover rounded-md mb-4"
            />

            {/* Título */}
            <h2 className="text-3xl font-extrabold text-blue-900 mb-3">{activity.title}</h2>

            {/* Fecha del Evento */}
            <div className="flex items-center text-gray-600 text-lg mb-2">
              <Calendar className="w-5 h-5 mr-2" />
              {activity.eventDate ? new Date(activity.eventDate).toLocaleDateString() : "Fecha no disponible"}
            </div>

            {/* Ubicación */}
            {activity.location && (
              <div className="flex items-center text-gray-800 font-semibold text-lg mb-4">
                <MapPin className="w-5 h-5 mr-2 text-red-500" />
                {activity.location}
              </div>
            )}

            {/* Descripción Ampliada */}
            <div className="text-gray-700 leading-relaxed bg-gray-100 p-4 rounded-md">
              <div className="flex items-center text-blue-900 font-bold mb-2">
                <Info className="w-5 h-5 mr-2" />
                Descripción de la Actividad
              </div>
              <p>
                {activity.description && activity.description.length > 0
                  ? activity.description
                  : "No hay información adicional disponible para esta actividad en este momento."}
              </p>
            </div>

            {/* Botón de Cerrar */}
            <button
              className="w-full mt-4 bg-red-600 text-white font-bold py-2 rounded-md hover:bg-red-700 transition-all"
              onClick={() => setShowModal(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ActivityCard;
