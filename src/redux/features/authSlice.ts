import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
  },
  reducers: {
    loginReducers: (state, action) => {
      // auth actions
      state.user = action.payload;
      return;
    },
  },
});

export const { loginReducers } = authSlice.actions;
export default authSlice.reducer;
