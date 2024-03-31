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
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

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
  extraReducers: () => {},
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
