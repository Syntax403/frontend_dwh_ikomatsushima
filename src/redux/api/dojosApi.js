import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dojosApi = createApi({
  reducerPath: "dojosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }), // Ajusta la URL si es necesario
  endpoints: (builder) => ({
    getDojos: builder.query({
      query: ({ page = 1, zona = "", isDirector = false, isBranchChief = false }) => {
        const params = new URLSearchParams();
        params.append("p", page);
        if (zona) params.append("zona", zona);
        if (isDirector) params.append("is_Director", "true");
        if (isBranchChief) params.append("is_branch_chief", "true");

        return `Dojos/list?${params.toString()}`;
      },
    }),
    getDirectors: builder.query({
      query: () => "Dojos/list?is_Director=true",
    }),
    getBranchChiefs: builder.query({
      query: () => "Dojos/list?is_branch_chief=true",
    }),
    getBlackBelts: builder.query({
      query: () => "Dojos/list",
    }),
  }),
});

export const { 
  useGetDojosQuery, 
  useGetDirectorsQuery, 
  useGetBranchChiefsQuery, 
  useGetBlackBeltsQuery 
} = dojosApi;
