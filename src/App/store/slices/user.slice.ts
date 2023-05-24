import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IUser, IAuthResponse } from "../../../utils/interfaces/user";

const initialState: { session: IAuthResponse; profile: IUser } = {
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
  },
});

export const { usersDataStore, usersSessionStore, usersSessionStoreByToken } =
  userSlice.actions;

export default userSlice.reducer;
