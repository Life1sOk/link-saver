import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IShortLink } from "../../../utils/interfaces/link";

interface IArchive {
  archive: { data: IShortLink; deleted: Date }[];
}

const initialState: IArchive = {
  archive: [],
};

const archiveSlice = createSlice({
  name: "archive",
  initialState,
  reducers: {},
});

export const {} = archiveSlice.actions;
export default archiveSlice.reducer;
