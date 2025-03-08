import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/MatsushimaChile-Logo.png"; // Ruta del logo
import { navRoutes } from "../../config/Routes";
import { baseLinkClasses, activeLinkClasses } from "../../config/CSS";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Alternar el estado del menú móvil
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Cerrar menú móvil al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Función para renderizar los enlaces
  const renderNavLinks = () =>
    navRoutes.map((route) => (
      <NavLink
        key={route.path}
        to={route.path}
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          isActive ? `${baseLinkClasses} ${activeLinkClasses}` : baseLinkClasses
        }
      >
        {route.label}
      </NavLink>
    ));

  return (
    <nav className="bg-gray-200 text-blue-800 border-b-4 border-red-600 shadow-lg rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="IKO Matsushima Chile" className="h-14 w-auto" />
        </NavLink>

        {/* Menú para escritorio */}
        <div className="hidden md:flex space-x-6">{renderNavLinks()}</div>

        {/* Botón para abrir/cerrar menú móvil */}
        <button
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          className="md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú móvil con animación */}
      <div
        ref={menuRef}
        className={`md:hidden bg-gray-200 rounded-b-lg shadow-lg transition-transform duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2">{renderNavLinks()}</div>
      </div>
    </nav>
  );
};

export default Navbar;
