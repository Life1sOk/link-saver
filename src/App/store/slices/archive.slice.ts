import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IShortLink } from "../../../utils/interfaces/link";

interface IArchive {
  isWindowOpen: boolean;
  archive: { data: IShortLink; deleted: Date }[];
}

const initialState: IArchive = {
  isWindowOpen: false,
  archive: [],
};

const archiveSlice = createSlice({
  name: "archive",
  initialState,
  reducers: {
    toggleArchiveWindow: (state) => {
      state.isWindowOpen = !state.isWindowOpen;
    },
  },
});

export const { toggleArchiveWindow } = archiveSlice.actions;
export default archiveSlice.reducer;
