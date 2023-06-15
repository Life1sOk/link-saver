import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface IProcess {
  status: string;
  message: "box" | "friend" | null;
}

const initialState: IProcess = {
  status: "",
  message: null,
};

export const processSlice = createSlice({
  name: "active-topic",
  initialState,
  reducers: {
    processStatusHandlerStore: (state, { payload }: PayloadAction<string>) => {
      state.status = payload;
    },
    processMessage: (state, { payload }) => {
      state.message = payload;
    },
  },
});

export const { processStatusHandlerStore, processMessage } = processSlice.actions;

export default processSlice.reducer;
