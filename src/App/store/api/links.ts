// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// import { ITopic, IPostTopic } from "../../../interfaces/topic";

export const linksApi = createApi({
  reducerPath: "linksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/links" }),
  tagTypes: ["Links"],
  endpoints: (builder) => ({
    getGenericLinksByTopicId: builder.query<void, number>({
      query: (topic_id) => ({ url: `generic/${topic_id}` }),
      providesTags: ["Links"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGenericLinksByTopicIdQuery } = linksApi;
