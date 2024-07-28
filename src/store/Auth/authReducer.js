import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refresh } from "../../api/auth";

export const registerAccount = createAsyncThunk(
    "auth/register",
    async (data, { rejectWithValue }) => {
      try {
        const response = await register(data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
);

export const loginAccount = createAsyncThunk(
    "auth/login",
    async(data, { rejectWithValue }) => {
        try {
            const response = await login(data);
            return response.data;
        } catch(error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const logoutAccount = createAsyncThunk(
    "auth/logout",
    async(_, { rejectWithValue }) => {
        try {
            const response = await logout();
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            return response.data;
        } catch(error) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    isAuth: false,
    accessToken: null,
    refreshToken: null,
    isLoading: false,
    error: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setIsAuth(state, action) {
        state.isAuth = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(registerAccount.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(registerAccount.fulfilled, (state) => {
          state.isLoading = false;
          state.error = null;
        })
        .addCase(registerAccount.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
        .addCase(loginAccount.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(loginAccount.fulfilled, (state, action) => {
          const { accessToken, refreshToken } = action.payload;
          state.accessToken = accessToken;
          state.refreshToken = refreshToken;
          state.isLoading = false;
          state.error = null;
          state.isAuth = true;
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("accessToken", accessToken);
        })
        .addCase(loginAccount.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
        .addCase(logoutAccount.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(logoutAccount.fulfilled, (state) => {
          state.accessToken = null;
          state.refreshToken = null;
          state.isLoading = false;
          state.error = null;
          state.isAuth = false;
        })
        .addCase(logoutAccount.rejected, (state, action) => {
          state.accessToken = null;
          state.refreshToken = null;
          state.isLoading = false;
          state.error = action.payload;
          state.isAuth = false;
        });
    },
});

export default authSlice.reducer;
export const { setIsAuth } = authSlice.actions;
export const selectAuthState = (state) => state.auth;
