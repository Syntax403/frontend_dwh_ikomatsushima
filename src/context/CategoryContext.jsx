import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { 
  useGetActividadesQuery, 
  useGetYearsQuery, 
  useGetMonthsQuery, 
  useGetCategoriesQuery 
} from "../redux/api/CategoryApi";

const CategoryContext = createContext();

export const useCategoryContext = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }) => {
  const actividadesQuery = useGetActividadesQuery({ year: null, month: null, category: null });
  const yearsQuery = useGetYearsQuery();
  const monthsQuery = useGetMonthsQuery();
  const categoriesQuery = useGetCategoriesQuery();

  const [loading, setLoading] = useState(true);

  const queries = useMemo(() => ({
    Actividades: actividadesQuery,
    Years: yearsQuery,
    Months: monthsQuery,
    Categories: categoriesQuery,
  }), [actividadesQuery, yearsQuery, monthsQuery, categoriesQuery]);

  useEffect(() => {
    setLoading(Object.values(queries).some((query) => query.isLoading));

    console.log("📡 Estado de carga de Category API:");
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
    <CategoryContext.Provider value={{ 
      loading, 
      actividades: actividadesQuery.data, 
      years: yearsQuery.data, 
      months: monthsQuery.data, 
      categories: categoriesQuery.data 
    }}>
      {children}
    </CategoryContext.Provider>
  );
};
