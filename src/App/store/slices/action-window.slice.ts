import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isAddGroup: false,
  isAddLink: false,
  activeGroup: {
    isActive: false,
    id: -1,
    title: "",
  },
  activeLink: {
    id: -1,
    link_title: "",
    link_url: "",
  },
};

// dont use this slice;
export const actionWindowSlice = createSlice({
  name: "action-window",
  initialState,
  reducers: {
    toggleGroupWindowHandler: (state) => {
      state.isAddGroup = !state.isAddGroup;
    },
    toggleLinkWindowHandler: (state) => {
      if (!state.isAddLink) {
        state.isAddLink = !state.isAddLink;
        state.activeLink = { id: -1, link_title: "", link_url: "" };
      } else {
        state.isAddLink = !state.isAddLink;
      }
    },
    activateGroup: (
      state,
      { payload }: PayloadAction<{ title: string; id: number }>
    ) => {
      state.activeGroup = {
        isActive: true,
        id: payload.id,
        title: payload.title,
      };
    },
    deactivateGroup: (state) => {
      state.activeGroup = {
        isActive: false,
        id: -1,
        title: "",
      };
    },
    activateLink: (
      state,
      {
        payload,
      }: PayloadAction<{ id: number; link_title: string; link_url: string }>
    ) => {
      state.activeLink = payload;
      state.isAddLink = true;
    },
  },
});

export const {
  toggleGroupWindowHandler,
  toggleLinkWindowHandler,
  activateGroup,
  deactivateGroup,
  activateLink,
} = actionWindowSlice.actions;

export default actionWindowSlice.reducer;
