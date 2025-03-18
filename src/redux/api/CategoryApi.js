import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }), // 🔥 Ajusta la URL según tu backend
  endpoints: (builder) => ({
    getActividades: builder.query({
      query: () => "category/list", // 🔥 Ruta de la API
      transformResponse: (response) => response.categories // Extraer solo la lista
    }),
  }),
});

// Exportar el hook para obtener actividades
export const { useGetActividadesQuery } = categoryApi;
