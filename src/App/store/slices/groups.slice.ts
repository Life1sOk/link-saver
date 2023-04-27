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
  },
});

export const { localGroupsStore, addOneGroup } = groupsSlice.actions;

export default groupsSlice.reducer;
