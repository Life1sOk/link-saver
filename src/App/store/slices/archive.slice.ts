import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IShortLink } from "../../../utils/interfaces/link";
import { IGroupGet } from "../../../utils/interfaces/group";

interface IArchive {
  isWindowOpen: boolean;
  activeArchive: "links" | "groups";
  links: IShortLink[];
  groups: { topic_title: string; group: IGroupGet }[];
}

const initialState: IArchive = {
  isWindowOpen: false,
  activeArchive: "links",
  links: [],
  groups: [],
};

const archiveSlice = createSlice({
  name: "archive",
  initialState,
  reducers: {
    toggleArchiveWindow: (state) => {
      state.isWindowOpen = !state.isWindowOpen;
    },
    toggleActiveArchive: (state, { payload }: PayloadAction<"links" | "groups">) => {
      state.activeArchive = payload;
    },
    addLinkIntoArchive: (state, { payload }: PayloadAction<IShortLink>) => {
      state.links.push(payload);
    },
    deleteLinkFromArchive: (state, { payload }: PayloadAction<number>) => {
      state.links = state.links.filter((link) => link.id === payload);
    },
    addGroupIntoArchive: (
      state,
      { payload }: PayloadAction<{ topic_title: string; group: IGroupGet }>
    ) => {
      state.groups.push(payload);
    },
    deleteGroupsFromArchive: (state, { payload }: PayloadAction<number>) => {
      state.groups = state.groups.filter((data) => data.group.id === payload);
    },
  },
});

export const {
  toggleArchiveWindow,
  addLinkIntoArchive,
  addGroupIntoArchive,
  deleteLinkFromArchive,
  deleteGroupsFromArchive,
  toggleActiveArchive,
} = archiveSlice.actions;
export default archiveSlice.reducer;
