// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ITopic, IPostTopic } from "../../../utils/interfaces/topic";

export const topicsApi = createApi({
  reducerPath: "topicsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/topics",
  }),
  tagTypes: ["Topics"],
  endpoints: (builder) => ({
    getTopicsByUserId: builder.query<ITopic[], number>({
      query: (user_id) => ({ url: `/${user_id}` }),
      providesTags: ["Topics"],
    }),
    getTopicsGroupCount: builder.query<{}, { user_id: number; topic_id: number }>({
      query: ({ user_id, topic_id }) => ({ url: `/group_count/${user_id}&${topic_id}` }),
    }),
    addTopicByUserId: builder.mutation<void, IPostTopic>({
      query: (body) => ({
        url: "/add",
        method: "POST",
        body,
      }),
    }),
    changeTopicTitle: builder.mutation<void, { id: number; topic_title: string }>({
      query: (body) => ({
        url: "/change",
        method: "PUT",
        body,
      }),
    }),
    deleteTopic: builder.mutation<void, { id: number; user_id: number }>({
      query: (body) => ({
        url: "/delete",
        method: "DELETE",
        body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTopicsByUserIdQuery,
  useLazyGetTopicsGroupCountQuery,
  useAddTopicByUserIdMutation,
  useChangeTopicTitleMutation,
  useDeleteTopicMutation,
} = topicsApi;
