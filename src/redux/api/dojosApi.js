import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dojosApi = createApi({
  reducerPath: "dojosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }), // Ajusta la URL si es necesario
  endpoints: (builder) => ({
    getDojos: builder.query({
      query: () => "Dojos/list",
      transformResponse: (response) => response.results, // 🔥 Extraer solo los resultados
    }),
    getDirectors: builder.query({
      query: () => "Dojos/list?is_Director==true",
    }),
    getBranchChiefs: builder.query({
      query: () => "Dojos/list?is_branch_chief=true",
    }),
    getBlackBelts: builder.query({
      query: () => "Dojos/list",
    }),
  }),
});

export const { useGetDojosQuery, useGetDirectorsQuery, useGetBranchChiefsQuery,useGetBlackBeltsQuery  } = dojosApi;
