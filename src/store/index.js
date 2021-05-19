import { configureStore } from "@reduxjs/toolkit";



const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export const authActions = authSlice.actions;

export default store;
