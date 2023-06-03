import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isReportWindow: false,
  isFaqWindow: false,
};

export const repfaqSlice = createSlice({
  name: "repfaq",
  initialState,
  reducers: {
    toggleReport: (state) => {
      state.isReportWindow = !state.isReportWindow;
    },
    toggleFaq: (state) => {
      state.isFaqWindow = !state.isFaqWindow;
    },
  },
});

export const { toggleReport, toggleFaq } = repfaqSlice.actions;

export default repfaqSlice.reducer;
