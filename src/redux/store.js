import { configureStore } from "@reduxjs/toolkit";
import { dojosApi } from "./api/dojosApi";
import { categoryApi } from "./api/CategoryApi";
// import { blogApi } from "./api/blogApi";

export const store = configureStore({
  reducer: {
    [dojosApi.reducerPath]: dojosApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    // [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      dojosApi.middleware,
      categoryApi.middleware,
      // blogApi.middleware
    ),
  devTools: process.env.NODE_ENV !== "production", // Activa Redux DevTools solo en desarrollo
});

export default store;
