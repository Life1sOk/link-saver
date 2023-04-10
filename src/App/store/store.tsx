import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/user.slice";
import activeTopicReducer from "./slices/active-topic.slice";
import actionWindowReducer from "./slices/action-window.slice";

import { topicsApi } from "./api/topics";
import { linksApi } from "./api/links";

export const store = configureStore({
  reducer: {
    user: userReducer,
    activeTopic: activeTopicReducer,
    actionWindow: actionWindowReducer,
    [topicsApi.reducerPath]: topicsApi.reducer,
    [linksApi.reducerPath]: linksApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(topicsApi.middleware, linksApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
