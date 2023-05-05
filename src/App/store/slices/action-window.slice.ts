import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IShortLink } from "../../../interfaces/link";

const initialState = {
  isAddGroup: false,
  isAddLink: false,
  isAddTopic: false,
  activeGroup: {
    isActive: false,
    id: -1,
    group_index: -1,
    title: "",
  },
  activeLink: {
    link: {
      id: -1,
      link_title: "",
      link_url: "",
      status: false,
    },
    from: "",
  },
};

// dont use this slice;
export const actionWindowSlice = createSlice({
  name: "action-window",
  initialState,
  reducers: {
    toggleTopicWindowHandler: (state) => {
      state.isAddTopic = !state.isAddTopic;
    },
    toggleGroupWindowHandler: (state) => {
      state.isAddGroup = !state.isAddGroup;
    },
    toggleLinkWindowHandler: (state) => {
      if (!state.isAddLink) {
        state.isAddLink = !state.isAddLink;
        state.activeLink.link = {
          id: -1,
          link_title: "",
          link_url: "",
          status: false,
        };
        state.activeLink.from = "";
      } else {
        state.isAddLink = !state.isAddLink;
      }
    },
    activateGroup: (
      state,
      { payload }: PayloadAction<{ title: string; id: number; group_index: number }>
    ) => {
      state.activeGroup = {
        isActive: true,
        id: payload.id,
        group_index: payload.group_index,
        title: payload.title,
      };
    },
    deactivateGroup: (state) => {
      state.activeGroup = {
        isActive: false,
        id: -1,
        group_index: -1,
        title: "",
      };
    },
    activateLink: (
      state,
      { payload }: PayloadAction<{ data: IShortLink; from: string }>
    ) => {
      state.activeLink.link = payload.data;
      state.activeLink.from = payload.from;
      state.isAddLink = true;
    },
  },
});

export const {
  toggleTopicWindowHandler,
  toggleGroupWindowHandler,
  toggleLinkWindowHandler,
  activateGroup,
  deactivateGroup,
  activateLink,
} = actionWindowSlice.actions;

export default actionWindowSlice.reducer;
