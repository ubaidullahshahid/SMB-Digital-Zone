import { AuthState } from "@/types/currentUserType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthState = {
  userLoading: true,
  authLoading: false,
  user: {
    email: "",
    _id: "",
  },
};

const authSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setUserLoading: (state, action) => {
      state.userLoading = action.payload;
    },
    setAuthLoading: (state, action) => {
      state.authLoading = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.userLoading = false;
      state.authLoading = false;
      state.user = action.payload;
    },
    logOutUser(state) {
      state.userLoading = false;
      state.user = initialState.user;
      localStorage.clear();
    },
  },
});

export const { setUserLoading, setAuthLoading, setCurrentUser, logOutUser } =
  authSlice.actions;
const currentUser = authSlice.reducer;
export default currentUser;
