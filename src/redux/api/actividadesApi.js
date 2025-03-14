import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const actividadesApi = createApi({
  reducerPath: "actividadesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }), // 🔥 Ajusta la URL según tu backend
  endpoints: (builder) => ({
    getActividades: builder.query({
      query: () => "actividades/list", // 🔥 Ruta de la API
      transformResponse: (response) => response.results, // Extraer solo la lista
    }),
  }),
});

// Exportar el hook para obtener actividades
export const { useGetActividadesQuery } = actividadesApi;
