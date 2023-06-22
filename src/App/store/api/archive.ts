import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const archiveApi = createApi({
  reducerPath: "api/archive",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3000/archive",

    baseUrl: "https://link-saver.herokuapp.com/archive",
  }),
  tagTypes: ["Transition"],
  endpoints: (builder) => ({
    getArchive: builder.query({
      query: (user_id) => ({ url: `/${user_id}` }),
    }),
    restoreArchive: builder.mutation({
      query: (body) => ({
        url: "/restore",
        method: "PUT",
        body,
      }),
    }),
    deleteArchive: builder.mutation({
      query: (body) => ({
        url: "/delete",
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useLazyGetArchiveQuery,
  useRestoreArchiveMutation,
  useDeleteArchiveMutation,
} = archiveApi;
