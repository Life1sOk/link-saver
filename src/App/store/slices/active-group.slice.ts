import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  current: {
    isActive: false,
    title: "",
  },
};

export const activeGroupSlice = createSlice({
  name: "active-group",
  initialState,
  reducers: {
    activateGroup: (state, { payload }: PayloadAction<{ title: string }>) => {
      state.current = {
        isActive: true,
        title: payload.title,
      };
    },
    deactivateGroup: (state) => {
      state.current = { isActive: false, title: "" };
    },
  },
});

export const { activateGroup, deactivateGroup } = activeGroupSlice.actions;

export default activeGroupSlice.reducer;
