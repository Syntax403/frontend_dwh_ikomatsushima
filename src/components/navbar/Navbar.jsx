import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/MatsushimaChile-Logo.png";
import { navRoutes } from "../../config/Routes";
import { baseLinkClasses, activeLinkClasses } from "../../config/CSS";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    <nav className="bg-slate-200 text-blue-800 border-b-2 border-red-600 shadow-md rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="IKO Matsushima Chile" className="h-12 w-auto" />
        </NavLink>

        <div className="hidden md:flex space-x-4">{renderNavLinks()}</div>

        <button
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          className="md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 transition-transform duration-300"
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

      <div
        ref={menuRef}
        className={`md:hidden bg-white rounded-b-lg shadow-lg transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 space-y-2 flex flex-col items-center">{renderNavLinks()}</div>
      </div>
    </nav>
  );
};

export default Navbar;
