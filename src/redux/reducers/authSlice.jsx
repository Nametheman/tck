import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "Authentication",
  initialState: {
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    authenticateUser(state, action) {
      if (action.payload) {
        state.isLoggedIn = true;
        state.user = action.payload;
      } else {
        return;
      }
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
