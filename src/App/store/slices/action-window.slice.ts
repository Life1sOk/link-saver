import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  group: false,
  link: false,
};

// dont use this slice;
export const actionWindowSlice = createSlice({
  name: "action-window",
  initialState,
  reducers: {
    toggleGroupWindowHandler: (state) => {
      state.group = !state.group;
    },
    toggleLinkWindowHandler: (state) => {
      state.link = !state.link;
    },
  },
});

export const { toggleGroupWindowHandler, toggleLinkWindowHandler } =
  actionWindowSlice.actions;

export default actionWindowSlice.reducer;
