import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IGroupGet } from "../../../utils/interfaces/group";
import { ITransRece } from "../../../utils/interfaces/transition";

interface IInitBox {
  pull: boolean;
  isReceivingWindow: boolean;
  isSendWindow: boolean;
  prepare: IGroupGet | null;
  sendFor: number | null;
  receivingBox: ITransRece[];
}

const initialState: IInitBox = {
  pull: true,
  isReceivingWindow: false,
  isSendWindow: false,
  prepare: null,
  sendFor: null,
  receivingBox: [],
};

// dont use this slice;
export const boxSlice = createSlice({
  name: "box",
  initialState,
  reducers: {
    toggleReceivingWindow: (state) => {
      state.isReceivingWindow = !state.isReceivingWindow;
    },
    toggleSendWindow: (state) => {
      state.isSendWindow = !state.isSendWindow;
    },
    addToPrepare: (state, { payload }: PayloadAction<IGroupGet>) => {
      state.prepare = payload;
    },
    pickSendFor: (state, { payload }: PayloadAction<number>) => {
      state.sendFor = payload;
    },
    addToReceivingAll: (state, { payload }) => {
      state.receivingBox = payload;
      state.pull = false;
    },
    addToReceiving: (state, { payload }: PayloadAction<ITransRece>) => {
      state.receivingBox.unshift(payload);
    },
    removeReceivingBox: (state, { payload }: PayloadAction<number>) => {
      state.receivingBox = state.receivingBox.filter(
        (trans) => trans.transition_id !== payload
      );
    },
  },
});

export const {
  toggleReceivingWindow,
  toggleSendWindow,
  addToPrepare,
  pickSendFor,
  addToReceivingAll,
  addToReceiving,
  removeReceivingBox,
} = boxSlice.actions;

export default boxSlice.reducer;
