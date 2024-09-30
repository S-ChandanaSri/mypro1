import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./features/exampleSlice";
import propertiesReducer from "./features/propertiesSlice";
import authReducer from "./features/authSlice";

export const store = configureStore({
  reducer: {
    exampleFeature: exampleReducer,
    propertiesFeature: propertiesReducer,
    authFeature: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
