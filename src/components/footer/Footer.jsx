// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto text-center p-4">
        <p>&copy; {new Date().getFullYear()} IKO MATSUSHIMA CHILE. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
