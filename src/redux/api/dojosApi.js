import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dojosApi = createApi({
  reducerPath: "dojosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }), // Ajusta la URL si es necesario
  endpoints: (builder) => ({
    getDojos: builder.query({
      query: () => "Dojos/list",
      transformResponse: (response) => response.results, // 🔥 Extraer solo los resultados
    }),
  }),
});

export const { useGetDojosQuery } = dojosApi;
