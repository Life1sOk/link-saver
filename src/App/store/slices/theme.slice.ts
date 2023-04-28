import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { themes } from '../../themes';

interface ThemeState {
  currentTheme: typeof themes.light | typeof themes.dark;
}

const initialState: ThemeState = {
  currentTheme: themes.light,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.currentTheme = state.currentTheme === themes.light ? themes.dark : themes.light;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;