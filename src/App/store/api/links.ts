// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IShortLink, ILink } from "../../../interfaces/link";
import { IGroupLink } from "../../../interfaces/group";

export const linksApi = createApi({
  reducerPath: "linksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/links" }),
  tagTypes: ["Links", "Groups"],
  endpoints: (builder) => ({
    getGenericLinksByUserId: builder.query<IShortLink[], number>({
      query: (user_id) => ({ url: `generic/${user_id}` }),
      providesTags: ["Links"],
    }),
    getGroupsLinksByTitle: builder.query<IShortLink[], IGroupLink>({
      query: ({ user_id, group_title }) => ({
        url: `groups/${user_id}&${group_title}`,
      }),
      providesTags: ["Groups"],
    }),
    addGenericLink: builder.mutation<void, ILink>({
      query: (body) => ({
        url: "/add",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Links"],
    }),
    changeGenericLinkGroup: builder.mutation<
      void,
      { id: number; group_title: string | null }
    >({
      query: (body) => ({
        url: "/change/group",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Links", "Groups"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetGenericLinksByUserIdQuery,
  useAddGenericLinkMutation,
  useGetGroupsLinksByTitleQuery,
  useChangeGenericLinkGroupMutation,
} = linksApi;
