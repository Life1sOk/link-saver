// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IShortLink, ILink, ILinkStatus } from "../../../utils/interfaces/link";

export const linksApi = createApi({
  reducerPath: "linksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://link-saver.herokuapp.com/links",
  }),
  tagTypes: ["Links", "Groups"],
  endpoints: (builder) => ({
    getGenericLinksByUserId: builder.query<IShortLink[], number>({
      query: (user_id) => ({ url: `generic/${user_id}` }),
      providesTags: ["Links"],
    }),
    addGenericLink: builder.mutation<void, ILink>({
      query: (body) => ({
        url: "/add",
        method: "POST",
        body,
      }),
    }),
    transitionTo: builder.mutation<void, { id: number; group_id: number | null }>({
      query: (body) => ({
        url: "/change/group",
        method: "PUT",
        body,
      }),
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
    }),
    changeLinkStatus: builder.mutation<void, ILinkStatus>({
      query: (body) => ({
        url: "/change/status",
        method: "PUT",
        body,
      }),
    }),
    deleteLinkSnapshot: builder.mutation<void, { id: number }>({
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
  useGetGenericLinksByUserIdQuery,
  useAddGenericLinkMutation,
  useChangeLinkTitleOrUrlMutation,
  useTransitionToMutation,
  useChangeLinkStatusMutation,
  useDeleteLinkSnapshotMutation,
} = linksApi;
