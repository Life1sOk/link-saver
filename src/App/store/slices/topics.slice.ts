import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITopic } from "../../../interfaces/topic";

const initialState: { data: ITopic[] } = {
  data: [],
};

export const topicsSlice = createSlice({
  name: "local-topics",
  initialState,
  reducers: {
    addTopics: (state, { payload }: PayloadAction<ITopic[]>) => {
      state.data = payload;
    },
    addOneTopic: (state, { payload }: PayloadAction<ITopic>) => {
      state.data.push(payload);
    },
    updateOneTopic: (
      state,
      { payload }: PayloadAction<{ index: number; title: string }>
    ) => {
      const { index, title } = payload;
      state.data[index] = { ...state.data[index], topic_title: title };
    },
    removeOneTopic: (state, { payload }: PayloadAction<number>) => {
      state.data = state.data.filter((topic) => topic.id !== payload);
    },
  },
});

export const { addTopics, addOneTopic, updateOneTopic, removeOneTopic } =
  topicsSlice.actions;

export default topicsSlice.reducer;
