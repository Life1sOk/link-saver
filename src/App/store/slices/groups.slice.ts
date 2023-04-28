import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { IGroupGet } from "../../../interfaces/group";

const initialState: { data: IGroupGet[] } = {
  data: [],
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
    updateGroupLinks: (state, { payload }) => {
      const { group_id, links } = payload;

      state.data = state.data.map((group) =>
        group.id === group_id ? { ...group, links } : group
      );
    },
  },
});

export const { localGroupsStore, addOneGroup, updateGroupLinks } =
  groupsSlice.actions;

export default groupsSlice.reducer;
