import { configureStore } from "@reduxjs/toolkit";
import { dojosApi } from "./api/dojosApi";

export const store = configureStore({
  reducer: {
    [dojosApi.reducerPath]: dojosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dojosApi.middleware),
});

export default store;
