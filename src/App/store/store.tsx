import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/user.slice";
import activeTopicReducer from "./slices/active-topic.slice";
import actionWindowReducer from "./slices/action-window.slice";
import genericsReducer from "./slices/generics.slice";
import processReducer from "./slices/process.slice";
import groupsReducer from "./slices/groups.slice";
import themeReducer from "./slices/theme.slice";

import { topicsApi } from "./api/topics";
import { linksApi } from "./api/links";
import { groupsApi } from "./api/groups";
import { registrationAPI } from "./api/registaration";
import { loginAPI } from "./api/login";

export const store = configureStore({
  reducer: {
    user: userReducer,
    activeTopic: activeTopicReducer,
    actionWindow: actionWindowReducer,
    genericsLocal: genericsReducer,
    groupsLocal: groupsReducer,
    process: processReducer,
    theme: themeReducer,
    [topicsApi.reducerPath]: topicsApi.reducer,
    [linksApi.reducerPath]: linksApi.reducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
    [registrationAPI.reducerPath]: registrationAPI.reducer,
    [loginAPI.reducerPath]: loginAPI.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      topicsApi.middleware,
      linksApi.middleware,
      groupsApi.middleware,
      registrationAPI.middleware,
      loginAPI.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
