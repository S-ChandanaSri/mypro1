import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
  name: "example",
  initialState: {
    example: "",
  },
  reducers: {
    exampleReducers: (state, action) => {
      // example actions
      state.example = action.payload;
      return;
    },
  },
});

// we can export in two ways

//1
// export const exampleActions=exampleSlice.actions;
// export default exampleSlice;

//2
export const { exampleReducers } = exampleSlice.actions;
export default exampleSlice.reducer;
