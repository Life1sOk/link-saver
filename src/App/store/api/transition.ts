import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { currentUrl } from "../../../utils/urls";

export const transitionApi = createApi({
  reducerPath: "api/transition",
  baseQuery: fetchBaseQuery({ baseUrl: currentUrl + "/transition" }),
  tagTypes: ["Transition"],
  endpoints: (builder) => ({
    getTransition: builder.query({
      query: (user_id) => ({ url: `/${user_id}` }),
    }),
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
        method: "PUT",
        body,
      }),
    }),
    cancelTransition: builder.mutation<void, { transition_id: number }>({
      query: (body) => ({
        url: "/cancel",
        method: "DELETE",
        body,
      }),
    }),
  }),
});

export const {
  useLazyGetTransitionQuery,
  useAddTransitionMutation,
  useAcceptTransitionMutation,
  useCancelTransitionMutation,
} = transitionApi;
