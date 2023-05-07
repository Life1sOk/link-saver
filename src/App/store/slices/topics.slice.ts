import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITopic } from "../../../interfaces/topic";

interface IWindowTopic {
  isAddTopic: boolean;
  activeTopic: {
    id: number;
    user_id: number;
    topic_title: string;
  };
}

const initialState: { data: ITopic[]; window: IWindowTopic } = {
  data: [],
  window: {
    isAddTopic: false,
    activeTopic: {
      id: 0,
      user_id: 0,
      topic_title: "Main",
    },
  },
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
    // Window
    toggleTopicWindowHandler: (state) => {
      const snap = state.window;

      snap.isAddTopic = !snap.isAddTopic;
    },
    activeTopicStore: (state, { payload }) => {
      const snap = state.window;
      const { data } = payload;

      if (data) {
        snap.activeTopic = data;
      } else {
        snap.activeTopic = payload;
      }
    },
    defaultState: (state) => {
      const snap = state.window;

      snap.activeTopic = {
        id: 0,
        user_id: 0,
        topic_title: "Main",
      };
    },
  },
});

export const {
  addTopics,
  addOneTopic,
  updateOneTopic,
  removeOneTopic,
  // Window
  toggleTopicWindowHandler,
  activeTopicStore,
  defaultState,
} = topicsSlice.actions;

export default topicsSlice.reducer;
