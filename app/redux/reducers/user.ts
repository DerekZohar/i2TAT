import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    refreshToken: "",
    user: {},
  },
  reducers: {
    getAccessToken: (state, action) => {
      state.token = action.payload;
      return state;
    },

    login: (state, action) => {
      state = { ...action.payload };
      return state;
    },
    logout: (state) => {
      state.user = {};
      state.token = "";
      state.refreshToken = "";
      return state;
    },
    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      return state;
    },
  },
});

export const { login, logout, getAccessToken, updateProfile } =
  userSlice.actions;

export default userSlice.reducer;
