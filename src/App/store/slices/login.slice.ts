import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "signin",
};

// dont use this slice;
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    changeLoginHandler: (state, { payload }: PayloadAction<string>) => {
      state.currentPage = payload;
    },
  },
});

export const { changeLoginHandler } = loginSlice.actions;

export default loginSlice.reducer;
