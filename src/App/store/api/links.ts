// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IShortLink, ILink, ILinkStatus } from "../../../interfaces/link";
import { IGroupLink } from "../../../interfaces/group";

export const linksApi = createApi({
  reducerPath: "linksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/links",
  }),
  tagTypes: ["Links", "Groups"],
  endpoints: (builder) => ({
    getGenericLinksByUserId: builder.query<IShortLink[], number>({
      query: (user_id) => ({ url: `generic/${user_id}` }),
      providesTags: ["Links"],
    }),
    getGroupsLinksById: builder.query<IShortLink[], IGroupLink>({
      query: ({ user_id, group_id }) => ({
        url: `groups/${user_id}&${group_id}`,
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
    changeLinkGroupTitle: builder.mutation<
      void,
      { id: number; group_id: number | null }
    >({
      query: (body) => ({
        url: "/change/group",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Links", "Groups"],
    }),
    changeLinkTitleOrUrl: builder.mutation<
      void,
      { id: number; link_title?: string; link_url?: string }
    >({
      query: (body) => ({
        url: "/change",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Links", "Groups"],
    }),
    changeLinkStatus: builder.mutation<void, ILinkStatus>({
      query: (body) => ({
        url: "/change/status",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Links", "Groups"],
    }),
    deleteLinkSnapshot: builder.mutation<void, { id: number }>({
      query: (body) => ({
        url: "/delete",
        method: "DELETE",
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
  useGetGroupsLinksByIdQuery,
  useLazyGetGroupsLinksByIdQuery,
  useChangeLinkTitleOrUrlMutation,
  useChangeLinkGroupTitleMutation,
  useChangeLinkStatusMutation,
  useDeleteLinkSnapshotMutation,
} = linksApi;
