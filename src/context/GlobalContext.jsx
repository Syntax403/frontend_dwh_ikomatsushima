import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crea el contexto global
const GlobalContext = createContext();

// Hook personalizado para usar el contexto global
export const useGlobalContext = () => useContext(GlobalContext);

// Proveedor del contexto global
export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Realiza la llamada a la API al montar la aplicación
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data');
        setData(response.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ data, loading, error }}>
      {children}
    </GlobalContext.Provider>
  );
};
