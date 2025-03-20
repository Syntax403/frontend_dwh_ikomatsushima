import logo from "../../assets/MatsushimaChile-Logo.png";
import React, { useEffect, useState } from "react";

const SpinnerPersonalizado = ({ duration = 3000, onComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Aparecer suavemente
    const showTimeout = setTimeout(() => setIsVisible(true), 200);

    // Barra de progreso animada
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, duration / 100);

    // Mantener visible según el tiempo del Layout
    const hideTimeout = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 600); // Tiempo del fade-out
    }, duration);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      clearInterval(progressInterval);
    };
  }, [duration, onComplete]);

  return (
    <div
      className={`fixed inset-0 flex flex-col justify-center items-center bg-white z-50 transition-opacity duration-700 ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Logo con animación */}
      <div
        className={`transform transition-transform duration-700 ease-in-out ${
          isVisible ? "scale-100 opacity-100" : "scale-70 opacity-0"
        }`}
      >
        <img
          src={logo}
          alt="IKO Matsushima"
          className="w-full h-auto animate-pulse"
        />
      </div>

      {/* 🔹 Barra de carga animada */}
      <div className="w-64 mt-4 h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-600 transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SpinnerPersonalizado;
