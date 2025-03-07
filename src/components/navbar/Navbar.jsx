// Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/MatsushimaChile-Logo.png'; // Ruta de tu logo
import { navRoutes } from '../../config/Routes';
import { baseLinkClasses, activeLinkClasses } from '../../config/CSS';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Alterna el estado del menú móvil
  const toggleMenu = () => setIsOpen(!isOpen);

  // Cierra el menú móvil al hacer clic en un enlace
  const handleLinkClick = () => setIsOpen(false);

  // Clases base y activas para los enlaces
  
  // Función para renderizar los enlaces (para escritorio)
  const renderNavLinks = () =>
    navRoutes.map((route) => (
      <NavLink
        key={route.path}
        to={route.path}
        onClick={handleLinkClick}
        className={({ isActive }) =>
          isActive ? `${baseLinkClasses} ${activeLinkClasses}` : baseLinkClasses
        }
      >
        {route.label}
      </NavLink>
    ));

  // Función para renderizar los enlaces en el menú móvil
  const renderMobileLinks = () =>
    navRoutes.map((route) => (
      <NavLink
        key={route.path}
        to={route.path}
        onClick={handleLinkClick}
        className={({ isActive }) =>
          isActive
            ? `block ${baseLinkClasses} ${activeLinkClasses}`
            : `block ${baseLinkClasses}`
        }
      >
        {route.label}
      </NavLink>
    ));

  return (
    <nav
      className="bg-gray-200 text-blue-800 border-b-4 border-red-600 rounded-b-lg shadow-lg"
      role="navigation"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo en lugar del texto */}
        <div className="flex items-center">
          <NavLink to="/" onClick={handleLinkClick}>
            <img
              src={logo}
              alt="IKO Matsushima Chile"
              className="h-14 w-auto" // Ajusta el tamaño según tu preferencia
            />
          </NavLink>
        </div>

        {/* Menú para pantallas medianas y grandes */}
        <div className="hidden md:flex space-x-6">
          {renderNavLinks()}
        </div>

        {/* Botón para menú móvil */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          className="md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden border-s-2 bg-gray-200 transition-all duration-300 rounded-b-lg shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {renderMobileLinks()}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
