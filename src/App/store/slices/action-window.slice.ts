import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IShortLink } from "../../../interfaces/link";

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
    status: "0",
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
        state.activeLink = {
          id: -1,
          link_title: "",
          link_url: "",
          status: "0",
        };
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
    activateLink: (state, { payload }: PayloadAction<IShortLink>) => {
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
