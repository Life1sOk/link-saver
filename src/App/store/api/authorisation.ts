import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import {
  IUserRegistration,
  IUserLogin,
  IUserToken,
  IUserTokenResponse,
} from "../../../utils/interfaces/user";

import { IAuthResponse } from "../../../utils/interfaces/auth";

export const authorisationApi = createApi({
  reducerPath: "api/authorisation",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3000/",
    baseUrl: "https://link-saver.herokuapp.com",
  }),
  tagTypes: ["Authorisation"],
  endpoints: (builder) => ({
    confirmUser: builder.query<any, string>({
      query: (token) => ({ url: `/confirm/${token}` }),
    }),
    register: builder.mutation<{ emailConf: boolean }, IUserRegistration>({
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
  useConfirmUserQuery,
  useRegisterMutation,
  useLoginMutation,
  useLoginByTokenMutation,
} = authorisationApi;
