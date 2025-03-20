import React, { createContext, useContext } from "react";
import { BlogProvider } from "./BlogContext";
import { CategoryProvider } from "./CategoryContext";
import { DojosProvider } from "./DojosContext";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProviderWrapper = ({ children }) => {
  return (
    <GlobalContext.Provider value={{}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const GlobalProvider = ({ children }) => {
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

export default GlobalContext;
