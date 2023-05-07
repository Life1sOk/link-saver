import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { IGroupGet } from "../../../interfaces/group";

interface IWindowGroup {
  isAddGroup: boolean;
  activeGroup: {
    isActive: boolean;
    id: number;
    group_index: number;
    title: string;
  };
}

const initialState: { data: IGroupGet[]; window: IWindowGroup } = {
  data: [],
  window: {
    isAddGroup: false,
    activeGroup: {
      isActive: false,
      id: -1,
      group_index: -1,
      title: "",
    },
  },
};

export const groupsSlice = createSlice({
  name: "local-groups",
  initialState,
  reducers: {
    localGroupsStore: (state, { payload }: PayloadAction<IGroupGet[]>) => {
      state.data = payload;
    },
    addOneGroup: (state, { payload }: PayloadAction<IGroupGet>) => {
      state.data.unshift(payload);
    },
    updateGroupTitle: (state, { payload }) => {
      const { id, new_title } = payload;
      state.data = state.data.map((group) =>
        group.id === id ? { ...group, group_title: new_title } : group
      );
    },
    deleteGroup: (state, { payload }) => {
      state.data = state.data.filter((group) => group.id !== payload);
    },
    removeCurrentLink: (state, { payload }) => {
      const { link_id, index } = payload;

      state.data[index].links = state.data[index].links.filter(
        (link) => link.id !== link_id
      );
    },
    addCurrentLink: (state, { payload }) => {
      const { link_data, index } = payload;

      state.data[index].links.push(link_data);
    },
    updateGroupLink: (state, { payload }) => {
      const { link_data, index } = payload;

      state.data[index].links = state.data[index].links.map((link) =>
        link.id === link_data.id ? link_data : link
      );
    },
    updateGroupLinkStatus: (state, { payload }) => {
      const { link_data, index } = payload;

      state.data[index].links = state.data[index].links.map((link) =>
        link.id === link_data.id ? { ...link, status: link_data.status } : link
      );
    },
    // Window
    toggleGroupWindowHandler: (state) => {
      const snap = state.window;
      snap.isAddGroup = !snap.isAddGroup;
    },
    activateGroup: (
      state,
      { payload }: PayloadAction<{ title: string; id: number; group_index: number }>
    ) => {
      state.window.activeGroup = {
        isActive: true,
        id: payload.id,
        group_index: payload.group_index,
        title: payload.title,
      };
    },
    deactivateGroup: (state) => {
      state.window.activeGroup = {
        isActive: false,
        id: -1,
        group_index: -1,
        title: "",
      };
    },
  },
});

export const {
  localGroupsStore,
  addOneGroup,
  updateGroupTitle,
  addCurrentLink,
  deleteGroup,
  updateGroupLink,
  updateGroupLinkStatus,
  removeCurrentLink,
  // Window
  toggleGroupWindowHandler,
  activateGroup,
  deactivateGroup,
} = groupsSlice.actions;

export default groupsSlice.reducer;
