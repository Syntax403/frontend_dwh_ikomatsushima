import React, { createContext, useContext, useState, useEffect } from "react";
import { CategoryProvider, useCategoryContext } from "./CategoryContext";
import { DojosProvider, useDojosContext } from "./DojosContext";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProviderWrapper = ({ children }) => {
  const { loading: loadingCategory } = useCategoryContext();
  const { loading: loadingDojos } = useDojosContext();
  
  const [loading, setLoading] = useState(true);
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Monitorear estado de carga
  useEffect(() => {
    const isLoading = loadingCategory || loadingDojos;
    setLoading(isLoading);

    if (!isLoading) {
      // 🔹 Agregar una pequeña pausa antes de marcar la carga como completa
      setTimeout(() => setLoadingComplete(true), 500);
    } else {
      setLoadingComplete(false);
    }
  }, [loadingCategory, loadingDojos]);

  return (
    <GlobalContext.Provider value={{ loading, loadingComplete }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const GlobalProvider = ({ children }) => {
  return (
    <CategoryProvider>
      <DojosProvider>
        <GlobalProviderWrapper>{children}</GlobalProviderWrapper>
      </DojosProvider>
    </CategoryProvider>
  );
};

export default GlobalContext;
