import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { 
  useGetDojosQuery, 
  useGetDirectorsQuery, 
  useGetBranchChiefsQuery, 
  useGetBlackBeltsQuery 
} from "../redux/api/dojosApi";

const DojosContext = createContext();

export const useDojosContext = () => useContext(DojosContext);

export const DojosProvider = ({ children }) => {
  const dojosQuery = useGetDojosQuery({});
  const directorsQuery = useGetDirectorsQuery();
  const branchChiefsQuery = useGetBranchChiefsQuery();
  const blackBeltsQuery = useGetBlackBeltsQuery();

  const [loading, setLoading] = useState(true);

  const queries = useMemo(() => ({
    Dojos: dojosQuery,
    Directors: directorsQuery,
    BranchChiefs: branchChiefsQuery,
    BlackBelts: blackBeltsQuery,
  }), [dojosQuery, directorsQuery, branchChiefsQuery, blackBeltsQuery]);

  useEffect(() => {
    setLoading(Object.values(queries).some((query) => query.isLoading));

    console.log("📡 Estado de carga de Dojos API:");
    console.table(
      Object.entries(queries).map(([key, query]) => ({
        Consulta: key,
        Cargando: query.isLoading,
        Error: query.isError ? query.error?.message : "No",
        Datos: query.data ? "✔️" : "❌",
      }))
    );
  }, [queries]);

  return (
    <DojosContext.Provider value={{ 
      loading, 
      dojos: dojosQuery.data, 
      directors: directorsQuery.data, 
      branchChiefs: branchChiefsQuery.data, 
      blackBelts: blackBeltsQuery.data 
    }}>
      {children}
    </DojosContext.Provider>
  );
};
