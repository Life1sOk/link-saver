// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  IGroupGet,
  IGroupPost,
  IGroupChange,
  IGroupDelete,
  IGroupTransaction,
} from "../../../utils/interfaces/group";

export const groupsApi = createApi({
  reducerPath: "groupsApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3000/groups",
    baseUrl: "https://link-saver.herokuapp.com/groups",
  }),
  tagTypes: ["Groups"],
  endpoints: (builder) => ({
    getGroupsByTopicId: builder.query<IGroupGet[], { user_id: number; topic_id: number }>(
      {
        query: ({ user_id, topic_id }) => ({ url: `/${user_id}&${topic_id}` }),
        providesTags: ["Groups"],
      }
    ),
    addGroup: builder.mutation<void, IGroupPost>({
      query: (body) => ({
        url: "/add",
        method: "POST",
        body,
      }),
    }),
    changeGroup: builder.mutation<void, IGroupChange>({
      query: (body) => ({
        url: "/change",
        method: "PUT",
        body,
      }),
    }),
    transactionGroup: builder.mutation<void, IGroupTransaction>({
      query: (body) => ({
        url: "/transaction",
        method: "PUT",
        body,
      }),
    }),
    deleteGroup: builder.mutation<void, IGroupDelete>({
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
  useLazyGetGroupsByTopicIdQuery,
  useAddGroupMutation,
  useChangeGroupMutation,
  useDeleteGroupMutation,
  useTransactionGroupMutation,
} = groupsApi;
