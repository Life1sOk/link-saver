import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const archiveApi = createApi({
  reducerPath: "api/archive",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/archive",
    // baseUrl: "https://link-saver.herokuapp.com/transition",
  }),
  tagTypes: ["Transition"],
  endpoints: (builder) => ({
    getArchive: builder.query({
      query: (user_id) => ({ url: `/${user_id}` }),
    }),
    deleteArchive: builder.mutation({
      query: (body) => ({
        url: "/clear",
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const { useLazyGetArchiveQuery, useDeleteArchiveMutation } = archiveApi;
