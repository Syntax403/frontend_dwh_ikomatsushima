// components/SpinnerPersonalizado.jsx
import React from "react";
import logo from "../../assets/MatsushimaChile-Logo.png";

const SpinnerPersonalizado = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-90 z-50">
      <div className="absolute inset-0 bg-white bg-opacity-100"></div>
      <div className="absolute inset-0 flex justify-center items-center">
      <img
        src={logo}
        alt="IKO Matsushima Chile"
        className="w-auto h-auto object-cover"
      />
        
      </div>
    </div>
  );
};

export default SpinnerPersonalizado;
