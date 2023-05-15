import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSendWindow: false,
  isInviteWindow: false,
  friends: [],
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    toggleSendWindow: (state) => {
      state.isSendWindow = !state.isSendWindow;
    },
    toggleInviteWindow: (state) => {
      state.isInviteWindow = !state.isInviteWindow;
    },
  },
});

export const { toggleSendWindow, toggleInviteWindow } = friendsSlice.actions;

export default friendsSlice.reducer;
