import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./features/exampleSlice";
export const store = configureStore({
  reducer: {
    exampleFeature: exampleReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
