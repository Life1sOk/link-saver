import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IIntDrag } from "../../../utils/interfaces/drag";

const initialState: { current: IIntDrag } = {
  current: {
    type: null,
    data: null,
  },
};

// dont use this slice;
export const dragSlice = createSlice({
  name: "drag",
  initialState,
  reducers: {
    addDraggable: (state, { payload }: PayloadAction<IIntDrag>) => {
      state.current = payload;
    },
    removeDraggable: (state) => {
      state.current = { type: null, data: null };
    },
  },
});

export const { addDraggable, removeDraggable } = dragSlice.actions;

export default dragSlice.reducer;
