import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { useGetActividadesQuery as useGetBlogActividadesQuery } from "../redux/api/blogApi";

const BlogContext = createContext();

export const useBlogContext = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const blogQuery = useGetBlogActividadesQuery();
  const [loading, setLoading] = useState(true);

  const queries = useMemo(() => ({ Blog: blogQuery }), [blogQuery]);

  useEffect(() => {
    setLoading(blogQuery.isLoading);

    console.log("📡 Estado de carga del Blog API:");
    console.table(
      Object.entries(queries).map(([key, query]) => ({
        Consulta: key,
        Cargando: query.isLoading,
        Error: query.isError ? query.error?.message : "No",
        Datos: query.data ? "✔️" : "❌",
      }))
    );
  }, [blogQuery, queries]);

  return (
    <BlogContext.Provider value={{ loading, blog: blogQuery.data }}>
      {children}
    </BlogContext.Provider>
  );
};
