import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../../../interfaces/user";

const initialState: { data: IUser } = {
  data: {
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
      state.data = data;
    },
  },
});

export const { usersDataStore } = userSlice.actions;

export default userSlice.reducer;
