import { createSlice } from "@reduxjs/toolkit";

import { ITopic } from "../../../interfaces/topic";

const initialState: { current: ITopic } = {
  current: {
    id: 0,
    user_id: 17,
    topic_title: "Main",
  },
};

export const activeTopicSlice = createSlice({
  name: "active-topic",
  initialState,
  reducers: {
    activeTopic: (state, { payload }) => {
      const { data } = payload;

      if (data) {
        state.current = data;
      } else {
        state.current = payload;
      }
    },
    defaultState: (state) => {
      state.current = {
        id: 0,
        user_id: 17,
        topic_title: "Main",
      };
    },
  },
});

export const { activeTopic, defaultState } = activeTopicSlice.actions;

export default activeTopicSlice.reducer;
