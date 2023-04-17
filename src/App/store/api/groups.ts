// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  IGroupGet,
  IGroupPost,
  IGroupChange,
  IGroupDelete,
} from "../../../interfaces/group";

export const groupsApi = createApi({
  reducerPath: "groupsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://link-saver.herokuapp.com/groups",
  }),
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
    changeGroup: builder.mutation<void, IGroupChange>({
      query: (body) => ({
        url: "/change",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Groups"],
    }),
    deleteGroup: builder.mutation<void, IGroupDelete>({
      query: (body) => ({
        url: "/delete",
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["Groups"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetGroupsByTopicIdQuery,
  useAddGroupMutation,
  useChangeGroupMutation,
  useDeleteGroupMutation,
} = groupsApi;
