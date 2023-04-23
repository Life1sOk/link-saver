import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { IShortLink } from "../../../interfaces/link";

const initialState: { data: IShortLink[] } = {
  data: [],
};

export const genericsSlice = createSlice({
  name: "active-topic",
  initialState,
  reducers: {
    localGenericsStore: (state, { payload }: PayloadAction<IShortLink[]>) => {
      state.data = payload;
    },
    addOneGeneric: (state, { payload }: PayloadAction<IShortLink>) => {
      state.data.push(payload);
    },
    updateOneGeneric: (state, { payload }) => {
      state.data = state.data.map((link) =>
        link.id === payload.id ? payload : link
      );
    },
    updateOneStatusGeneric: (state, { payload }) => {
      state.data = state.data.map((link) =>
        link.id === payload.id ? { ...link, status: payload.status } : link
      );
    },
    deleteOneGeneric: (state, { payload }: PayloadAction<number>) => {
      state.data = state.data.filter((link) => link.id !== payload);
    },
  },
});

export const {
  addOneGeneric,
  localGenericsStore,
  deleteOneGeneric,
  updateOneStatusGeneric,
  updateOneGeneric,
} = genericsSlice.actions;

export default genericsSlice.reducer;
