import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IUser, IAuthResponse } from "../../../interfaces/user";

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
    created_at: "",
  },
};

// dont use this slice;
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    usersDataStore: (state, { payload }: PayloadAction<any>) => {
      const { data } = payload;
      state.profile = data;
    },
    usersSessionStore: (state, { payload }: PayloadAction<any>) => {
      const { data } = payload;
      state.session = data;

      if (data?.token) {
        window.sessionStorage.setItem("token", data.token);
      }
    },
    usersSessionStoreByToken: (state, { payload }: PayloadAction<any>) => {
      const { token, response } = payload;

      state.session = {
        token,
        user_id: response.data.user_id || -1,
        success: response.data.success,
      };
    },
  },
});

export const { usersDataStore, usersSessionStore, usersSessionStoreByToken } =
  userSlice.actions;

export default userSlice.reducer;
