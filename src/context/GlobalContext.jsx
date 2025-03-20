import React, { createContext, useContext } from "react";
import { BlogProvider, useBlogContext } from "./BlogContext";
import { CategoryProvider, useCategoryContext } from "./CategoryContext";
import { DojosProvider, useDojosContext } from "./DojosContext";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProviderWrapper = ({ children }) => {
  const { loading: loadingBlog } = useBlogContext();
  const { loading: loadingCategory } = useCategoryContext();
  const { loading: loadingDojos } = useDojosContext();

  // Determinar si alguna API sigue cargando
  const loading = loadingBlog || loadingCategory || loadingDojos;

  return (
    <GlobalContext.Provider value={{ loading }}>
      {children}
    </GlobalContext.Provider>
  );
};

const GlobalProvider = ({ children }) => {
  return (
    <BlogProvider>
      <CategoryProvider>
        <DojosProvider>
          <GlobalProviderWrapper>{children}</GlobalProviderWrapper>
        </DojosProvider>
      </CategoryProvider>
    </BlogProvider>
  );
};

export default GlobalProvider;
