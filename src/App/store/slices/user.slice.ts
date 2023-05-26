import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IUser, IAuthResponse } from "../../../utils/interfaces/user";

interface IUserSlice {
  session: IAuthResponse;
  profile: IUser;
  isProfileWindow: boolean;
}

const initialState: IUserSlice = {
  session: {
    user_id: -1,
    token: "",
    success: false,
  },
  profile: {
    id: -1,
    username: "",
    email: "",
  },
  isProfileWindow: false,
};

// dont use this slice;
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    usersDataStore: (state, { payload }: PayloadAction<IUser>) => {
      state.profile = payload;
    },
    usersSessionStore: (state, { payload }) => {
      state.session = payload;

      if (payload?.token) {
        window.sessionStorage.setItem("token", payload.token);
      }
    },
    usersSessionStoreByToken: (state, { payload }) => {
      const { token, response } = payload;

      state.session = {
        token,
        user_id: response.user_id || -1,
        success: response.success,
      };
    },
    toggleWindow: (state) => {
      state.isProfileWindow = !state.isProfileWindow;
    },
    updateProfile: (state, { payload }) => {
      const { username, email } = payload;

      if (username) state.profile.username = username;
      if (email) state.profile.email = email;
    },
  },
});

export const {
  usersDataStore,
  usersSessionStore,
  usersSessionStoreByToken,
  toggleWindow,
  updateProfile,
} = userSlice.actions;

export default userSlice.reducer;
