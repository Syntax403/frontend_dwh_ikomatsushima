import React, { useState } from "react";
import { Calendar, X } from "lucide-react";

const NewsCard = ({ news }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Tarjeta de Noticia */}
      <div
        className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold text-blue-900">{news.title}</h3>
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(news.date).toLocaleDateString()}
          </div>
          <p className="text-gray-700">{news.description}</p>
        </div>
      </div>

      {/* Modal de Detalles de Noticia */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <img src={news.image} alt={news.title} className="w-full h-60 object-cover rounded-md mb-4" />
            <h2 className="text-3xl font-extrabold text-blue-900 mb-3">{news.title}</h2>

            <div className="flex items-center text-gray-600 text-lg mb-2">
              <Calendar className="w-5 h-5 mr-2" />
              {new Date(news.date).toLocaleDateString()}
            </div>

            <p className="text-gray-700 leading-relaxed">{news.content}</p>

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

export default NewsCard;
