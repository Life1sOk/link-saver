import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const friendsApi = createApi({
  reducerPath: "api/friends",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/friends" }),
  tagTypes: ["Friends"],
  endpoints: (builder) => ({
    getUserFriends: builder.query<any, number>({
      query: (user_id) => ({ url: `/profile/${user_id}` }),
    }),
    // For check - will need new api
    inviteUser: builder.mutation<any, any>({
      query: (data) => ({
        url: "/invite",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetUserFriendsQuery, useInviteUserMutation } = friendsApi;
