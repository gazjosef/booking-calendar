// authSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface User {
  id: string;
  username: string;
}

// Define an asynchronous thunk to fetch user data from localStorage
export const fetchUserFromLocalStorage = createAsyncThunk(
  "auth/fetchUserFromLocalStorage",
  async () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    return user;
  }
);

interface AuthState {
  user: User | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: AuthState = {
  user: null, // Initialize user as null initially
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

console.log("initialState", initialState);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    // Handle the pending and fulfilled actions of the fetchUserFromLocalStorage thunk
    builder.addCase(fetchUserFromLocalStorage.fulfilled, (state, action) => {
      state.user = action.payload; // Update the user state with fetched user data
    });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
