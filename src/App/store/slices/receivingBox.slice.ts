import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isReceivingWindow: false,
  isSendWindow: false,
};

// dont use this slice;
export const receivingBoxSlice = createSlice({
  name: "receivingBox",
  initialState,
  reducers: {
    toggleReceivingWindow: (state) => {
      state.isReceivingWindow = !state.isReceivingWindow;
    },
    toggleSendWindow: (state) => {
      state.isSendWindow = !state.isSendWindow;
    },
  },
});

export const { toggleReceivingWindow, toggleSendWindow } = receivingBoxSlice.actions;

export default receivingBoxSlice.reducer;
