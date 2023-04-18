import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SettingsState = {
  isOpen: boolean;
  data: any;
};

const initialState: SettingsState = {
  isOpen: false,
  data: null,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    updateSettings: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { openModal, closeModal, updateSettings } = settingsSlice.actions;

export default settingsSlice.reducer;