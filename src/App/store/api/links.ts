// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IShortLink, ILink } from "../../../interfaces/link";

export const linksApi = createApi({
  reducerPath: "linksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/links" }),
  tagTypes: ["Links"],
  endpoints: (builder) => ({
    getGenericLinksByTopicId: builder.query<IShortLink[], number>({
      query: (topic_id) => ({ url: `generic/${topic_id}` }),
      providesTags: ["Links"],
    }),
    addGenericLink: builder.mutation<void, ILink>({
      query: (body) => ({
        url: "/add",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Links"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGenericLinksByTopicIdQuery, useAddGenericLinkMutation } =
  linksApi;
