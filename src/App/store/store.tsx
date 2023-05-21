import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/user.slice";
import genericsReducer from "./slices/generics.slice";
import processReducer from "./slices/process.slice";
import groupsReducer from "./slices/groups.slice";
import topicsReducer from "./slices/topics.slice";
import themeReducer from "./slices/theme.slice";
import friendsReducer from "./slices/friends.slice";
import receivingBoxReducer from "./slices/receivingBox.slice";

import { topicsApi } from "./api/topics";
import { linksApi } from "./api/links";
import { groupsApi } from "./api/groups";
import { userApi } from "./api/user";
import { friendsApi } from "./api/friends";

export const store = configureStore({
  reducer: {
    user: userReducer,
    genericsLocal: genericsReducer,
    groupsLocal: groupsReducer,
    topicsLocal: topicsReducer,
    process: processReducer,
    theme: themeReducer,
    friends: friendsReducer,
    receivingBox: receivingBoxReducer,
    [topicsApi.reducerPath]: topicsApi.reducer,
    [linksApi.reducerPath]: linksApi.reducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [friendsApi.reducerPath]: friendsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      topicsApi.middleware,
      linksApi.middleware,
      groupsApi.middleware,
      userApi.middleware,
      friendsApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
