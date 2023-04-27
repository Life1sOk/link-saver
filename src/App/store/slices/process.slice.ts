import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  status: "",
};

export const processSlice = createSlice({
  name: "active-topic",
  initialState,
  reducers: {
    processStatusHandlerStore: (state, { payload }: PayloadAction<string>) => {
      state.status = payload;
    },
  },
});

export const { processStatusHandlerStore } = processSlice.actions;

export default processSlice.reducer;
