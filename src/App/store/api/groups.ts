// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IGroupGet, IGroupPost } from "../../../interfaces/group";

export const groupsApi = createApi({
  reducerPath: "groupsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/groups" }),
  tagTypes: ["Groups"],
  endpoints: (builder) => ({
    getGroupsByTopicId: builder.query<IGroupGet[], number>({
      query: (topic_id) => ({ url: `/${topic_id}` }),
      providesTags: ["Groups"],
    }),
    addGroup: builder.mutation<void, IGroupPost>({
      query: (body) => ({
        url: "/add",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Groups"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGroupsByTopicIdQuery, useAddGroupMutation } = groupsApi;
