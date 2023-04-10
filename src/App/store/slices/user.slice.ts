import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "user",
};

// dont use this slice;
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
