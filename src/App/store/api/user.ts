import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { IUser, IUsersSeach } from "../../../utils/interfaces/user";

export const userApi = createApi({
  reducerPath: "api/registraion",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3000/profile",
    baseUrl: "https://link-saver.herokuapp.com/profile",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUserProfile: builder.query<any, number>({
      query: (user_id) => ({ url: `/${user_id}` }),
    }),
    updateUserName: builder.mutation({
      query: (body) => ({
        url: "/update/username",
        method: "PUT",
        body,
      }),
    }),
    updateUserEmail: builder.mutation({
      query: (body) => ({
        url: "/update/email",
        method: "PUT",
        body,
      }),
    }),
    updateUserPassword: builder.mutation({
      query: (body) => ({
        url: "/update/password",
        method: "PUT",
        body,
      }),
    }),
    updateUserPasswordByToken: builder.mutation({
      query: (body) => ({
        url: "/update/passwordbytoken",
        method: "PUT",
        body,
      }),
    }),
    getUsersSearch: builder.query<IUser[], IUsersSeach>({
      query: ({ user, value }) => ({ url: `/search/${user}&${value}` }),
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useUpdateUserNameMutation,
  useUpdateUserEmailMutation,
  useUpdateUserPasswordMutation,
  useUpdateUserPasswordByTokenMutation,
  useLazyGetUsersSearchQuery,
} = userApi;
