import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService, { UserData } from "./authService";
import { isAxiosError } from "axios";

interface User {
  id: string;
  username: string;
}

const user = JSON.parse(localStorage.getItem("user") || "null");

interface AuthState {
  user: User | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: AuthState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user: UserData, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      if (isAxiosError(error)) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      } else {
        const err = error as Error;
        return thunkAPI.rejectWithValue(err.message || err.toString());
      }
    }
  }
);

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
