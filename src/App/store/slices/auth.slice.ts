import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IAuthResponse, TSectionState } from "../../../utils/interfaces/auth";

interface IAuth {
  verification: { email: string; username: string };
  session: IAuthResponse;
  sectionState: TSectionState;
}

const initialState: IAuth = {
  verification: { email: "", username: "" },
  session: {
    user_id: -1,
    token: "",
    success: false,
  },
  sectionState: "login",
};

// dont use this slice;
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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
    toggleSectionState: (state, { payload }: PayloadAction<TSectionState>) => {
      state.sectionState = payload;
    },
    verificationStore: (
      state,
      { payload }: PayloadAction<{ email: string; username: string }>
    ) => {
      state.verification = payload;
    },
  },
});

export const {
  usersSessionStore,
  usersSessionStoreByToken,
  toggleSectionState,
  verificationStore,
} = authSlice.actions;

export default authSlice.reducer;
