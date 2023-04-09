// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ITopic, IPostTopic } from "../../../interfaces/topic";

export const topicsApi = createApi({
  reducerPath: "topicsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/topics" }),
  tagTypes: ["Topics"],
  endpoints: (builder) => ({
    getTopicsByUserId: builder.query<ITopic[], number>({
      query: (user_id) => ({ url: `/${user_id}` }),
      providesTags: ["Topics"],
    }),
    addTopicByUserId: builder.mutation<void, IPostTopic>({
      query: (body) => ({
        url: "/add",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Topics"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTopicsByUserIdQuery, useAddTopicByUserIdMutation } =
  topicsApi;
