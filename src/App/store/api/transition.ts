import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const transitionApi = createApi({
  reducerPath: "api/transition",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/transition" }),
  tagTypes: ["Transition"],
  endpoints: (builder) => ({
    addTransition: builder.mutation({
      query: (body) => ({
        url: "/add",
        method: "POST",
        body,
      }),
    }),
    acceptTransition: builder.mutation({
      query: (body) => ({
        url: "/accept",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddTransitionMutation, useAcceptTransitionMutation } = transitionApi;
