import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser, IUserRegistration } from "../../../utils/interfaces/user";

import {
  IUserLogin,
  IAuthResponse,
  IUserToken,
  IUserTokenResponse,
} from "../../../utils/interfaces/user";

export const userApi = createApi({
  reducerPath: "api/registraion",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Registration"],
  endpoints: (builder) => ({
    getUsersProfile: builder.query<any, number>({
      query: (user_id) => ({ url: `/profile/${user_id}` }),
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
    getCheckMessage: builder.query({
      query: () => ({ url: "/get-share" }),
    }),
    checkMessage: builder.mutation<any, any>({
      query: (message) => ({
        url: "/post-share",
        method: "POST",
        body: message,
      }),
    }),
  }),
});

export const {
  useGetUsersProfileQuery,
  useRegisterMutation,
  useLoginMutation,
  useLoginByTokenMutation,
  useLazyGetCheckMessageQuery,
  useCheckMessageMutation,
} = userApi;
