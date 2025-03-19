import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }), // Ajusta la URL según tu backend
  endpoints: (builder) => ({
    
    getActividades: builder.query({
      query: ({ year, month, category, page = 1 }) => {
        let url = `actividades/list?`;
        const params = new URLSearchParams();

        if (year) params.append("year", year);
        if (month) params.append("month", month);
        if (category) params.append("category", category);

        return params.toString() ? `${url}&${params.toString()}` : url;
      },
      transformResponse: (response) => {
        if (!response || !response.results || !Array.isArray(response.results.posts)) {
          return { posts: [], next: null, previous: null };
        }

        return {
          posts: response.results.posts.map(post => ({
            id: post.id,
            title: post.title,
            slug: post.slug,
            thumbnail: post.thumbnail || "/media/default-placeholder.png",
            description: post.description || "Sin descripción",
            eventDate: post.event_date || "Fecha no disponible",
            year: post.year,
            month: post.month,
            category: post.category ? post.category.name : "Sin categoría",
            status: post.status,
            views: post.views,
          })),
          next: response.next,
          previous: response.previous,
        };
      },
    }),


    getYears: builder.query({
      query: () => "actividades/years", // Endpoint para obtener todos los años disponibles
      transformResponse: (response) => {
        if (!response || !Array.isArray(response.years)) return [];
        return [...response.years].sort((a, b) => b - a); // 🔥 Ordenamos los años de más reciente a más antiguo
      }
    }),
    
    getMonths: builder.query({
      query: () => "actividades/months", // Endpoint para obtener todos los meses disponibles
      transformResponse: (response) => {
        if (!response || !Array.isArray(response.months)) return [];
        return [...response.months].sort((a, b) => a - b); // 🔥 Ordenamos los meses en orden natural (Enero → Diciembre)
      }
    }),

    getCategories: builder.query({
      query: () => "actividades/categories", // Endpoint para obtener todas las categorías
      transformResponse: (response) => {
        if (!response || !Array.isArray(response.categories)) return [];
        return response.categories.map(category => ({
          id: category.id,
          name: category.name,
          slug: category.slug
        }));
      }
    }),
    
  }),
});

export const { 
  useGetActividadesQuery, 
  useGetYearsQuery, 
  useGetMonthsQuery, 
  useGetCategoriesQuery 
} = categoryApi;
