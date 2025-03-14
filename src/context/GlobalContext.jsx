import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const GlobalContext = createContext();

// Hook para consumir el contexto
export const useGlobalContext = () => useContext(GlobalContext);

// Proveedor del contexto global
export const GlobalProvider = ({ children }) => {
  const [loading, setLoading] = useState(false); // Estado global del loader

  return (
    <GlobalContext.Provider value={{ loading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};
