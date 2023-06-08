import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const friendsApi = createApi({
  reducerPath: "api/friends",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/friends" }),
  tagTypes: ["Friends"],
  endpoints: (builder) => ({
    getFriendLists: builder.query<any, number>({
      query: (user_id) => ({ url: `/${user_id}` }),
    }),
    inviteFriend: builder.mutation<any, { from: number; to: number }>({
      query: (data) => ({
        url: "/invite",
        method: "POST",
        body: data,
      }),
    }),
    acceptFriend: builder.mutation<any, { friend_id: number }>({
      query: (data) => ({
        url: "/accept",
        method: "POST",
        body: data,
      }),
    }),
    cancelFriend: builder.mutation<any, { friend_id: number }>({
      query: (data) => ({
        url: "/cancle",
        method: "DELETE",
        body: data,
      }),
    }),
    deleteFriend: builder.mutation<
      any,
      { friend_id: number; from_id: number; to_id: number }
    >({
      query: (data) => ({
        url: "/delete",
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const {
  useLazyGetFriendListsQuery,
  useInviteFriendMutation,
  useAcceptFriendMutation,
  useCancelFriendMutation,
  useDeleteFriendMutation,
} = friendsApi;
