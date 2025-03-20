import logo from "../../assets/MatsushimaChile-Logo.png";
import React, { useEffect, useState } from "react";

const SpinnerPersonalizado = ({ duration = 3000, onComplete }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Activamos la animación de aparición
    const showTimeout = setTimeout(() => setIsVisible(true), 200);

    // Desaparecer después del tiempo definido
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onComplete) onComplete(); // Notificar al Layout cuando termine el Loader
      }, 600); // Fade-out duration
    }, duration);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [duration, onComplete]);

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-white z-50 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`transform transition-transform duration-700 ease-in-out ${
          isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        <img
          src={logo}
          alt="IKO Matsushima"
          className="w-full h-full animate-pulse"
        />
      </div>
    </div>
  );
};

export default SpinnerPersonalizado;
