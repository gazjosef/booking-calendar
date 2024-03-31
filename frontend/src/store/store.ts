import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

console.log("configureStore:", configureStore); // Check if authReducer is imported correctly
console.log("authReducer:", authReducer); // Check if authReducer is imported correctly

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
