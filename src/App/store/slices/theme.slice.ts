import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  // currentTheme: typeof light | typeof dark;
  currentTheme: string;
}

const initialState: ThemeState = {
  currentTheme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, { payload }) => {
      state.currentTheme = payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
