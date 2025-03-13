import logo from "../../assets/MatsushimaChile-Logo.png";
import React, { useEffect, useState } from 'react';

const SpinnerPersonalizado = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 500); // Tiempo de la animación de desaparición
    }, 2000); // Duración del spinner visible antes de desaparecer
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-white bg-opacity-90 z-50 transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 bg-white bg-opacity-100"></div>
      <div
        className={`transform transition-transform duration-500 ease-out ${
          isVisible ? 'scale-100' : 'scale-0'
        }`}
      >
        <img
          src={logo}
          alt="IKO Matsushima"
          className="w-full h-auto transform transition-transform duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default SpinnerPersonalizado;