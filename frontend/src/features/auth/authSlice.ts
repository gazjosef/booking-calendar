import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService, { UserData } from "./authService";
import { isAxiosError } from "axios";

// GEt user from local storage
const userString = localStorage.getItem("user");
const user = userString ? JSON.parse(userString) : null;

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register User
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
