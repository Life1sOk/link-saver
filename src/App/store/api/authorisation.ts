import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import {
  IUser,
  IUserRegistration,
  IUserLogin,
  IAuthResponse,
  IUserToken,
  IUserTokenResponse,
} from "../../../utils/interfaces/user";

export const authorisationApi = createApi({
  reducerPath: "api/authorisation",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3000/",
    baseUrl: "https://link-saver.herokuapp.com",
  }),
  tagTypes: ["Authorisation"],
  endpoints: (builder) => ({
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

export const { useRegisterMutation, useLoginMutation, useLoginByTokenMutation } =
  authorisationApi;
