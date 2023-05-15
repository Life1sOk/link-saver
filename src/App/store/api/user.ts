import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import {
  IUser,
  IUserRegistration,
  IUsersSeach,
  IUserLogin,
  IAuthResponse,
  IUserToken,
  IUserTokenResponse,
} from "../../../utils/interfaces/user";

export const userApi = createApi({
  reducerPath: "api/registraion",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUserProfile: builder.query<any, number>({
      query: (user_id) => ({ url: `/profile/${user_id}` }),
    }),
    getUsersSearch: builder.query<IUser[], IUsersSeach>({
      query: ({ user, value }) => ({ url: `/search/${user}&${value}` }),
    }),
    register: builder.mutation<IUser, IUserRegistration>({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<IAuthResponse, IUserLogin>({
      query: (user) => ({
        url: "/signin",
        method: "POST",
        body: user,
      }),
    }),
    loginByToken: builder.mutation<IUserTokenResponse, IUserToken>({
      query: ({ token }) => ({
        url: "/signin",
        method: "POST",
        headers: {
          token,
        },
      }),
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useLazyGetUsersSearchQuery,
  useRegisterMutation,
  useLoginMutation,
  useLoginByTokenMutation,
} = userApi;
