import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../../../utils/interfaces/user";

interface IUserSlice {
  profile: IUser;
  isProfileWindow: boolean;
}

const initialState: IUserSlice = {
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

export const { usersDataStore, toggleWindow, updateProfile } = userSlice.actions;

export default userSlice.reducer;
