import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ITopic } from "../../../interfaces/topic";

const initialState: { current: ITopic } = {
  current: {
    id: 0,
    user_id: 0,
    topic_title: "",
    created_at: "",
  },
};

export const activeTopicSlice = createSlice({
  name: "active-topic",
  initialState,
  reducers: {
    activeTopic: (state, { payload }: PayloadAction<ITopic>) => {
      state.current = payload;
    },
  },
});

export const { activeTopic } = activeTopicSlice.actions;

export default activeTopicSlice.reducer;
