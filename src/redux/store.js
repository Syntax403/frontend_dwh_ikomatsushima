import { configureStore } from "@reduxjs/toolkit";
import { dojosApi } from "./api/dojosApi";
import { categoryApi } from "./api/CategoryApi";

export const store = configureStore({
  reducer: {
    [dojosApi.reducerPath]: dojosApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(dojosApi.middleware, categoryApi.middleware), // 🔥 Agrega categoryApi.middleware aquí
    
});

export default store;
