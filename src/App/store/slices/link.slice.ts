import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ILinkData {
  link_title: string;
  link_url: string;
}

const linkSlice = createSlice({
  name: 'links',
  initialState: [] as ILinkData[],
  reducers: {
    addLink: (state, action: PayloadAction<ILinkData>) => {
      state.push(action.payload);
    },
  },
});

export const { addLink } = linkSlice.actions;
export default linkSlice.reducer;