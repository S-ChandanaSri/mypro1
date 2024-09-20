import { createSlice } from "@reduxjs/toolkit";
import { propertyDetailsImages } from "@/constants/images";

const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    favouriteProperties: [
      {
        image: propertyDetailsImages.propertyExterior,
        id: "1",
        saved: "6 Saved",
      },
      {
        image: propertyDetailsImages.propertyExterior,
        id: "2",
        saved: "6 Saved",
      },
      {
        image: propertyDetailsImages.propertyExterior,
        id: "3",
        saved: "6 Saved",
      },
      {
        image: propertyDetailsImages.propertyExterior,
        id: "4",
        saved: "6 Saved",
      },
      {
        image: propertyDetailsImages.propertyExterior,
        id: "5",
        saved: "6 Saved",
      },
      {
        image: propertyDetailsImages.propertyExterior,
        id: "6",
        saved: "6 Saved",
      },
    ],
  },
  reducers: {
    propertiesReducer: (state, action) => {
      console.log("stat", state.favouriteProperties);
      state.favouriteProperties = action.payload;
      return;
    },
  },
});

export const { propertiesReducer } = propertiesSlice.actions;
export default propertiesSlice.reducer;
