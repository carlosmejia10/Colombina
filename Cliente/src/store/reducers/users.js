import { createSlice } from "@reduxjs/toolkit";
import { registerUser, signInUser,signOut } from "../actions/users";

let DEFAULT_USER_STATE = {
  loading: false,
  data: {
    createdAt: null,
    id: null,
    email: null,
    recoveryToken: null,
  },
  auth: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: DEFAULT_USER_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.auth = action.payload.auth;
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
      })
      // SIGN IN
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.auth = action.payload.auth;
        state.token = action.payload.token;
      })
      .addCase(signInUser.rejected, (state) => {
        state.loading = false;
        state.auth = false;
      })
      // SIGN OUT
      .addCase(signOut.fulfilled,(state,action)=>{
        state.data = DEFAULT_USER_STATE.data;
        state.auth = false;
      })
  },
});

export default usersSlice.reducer;
