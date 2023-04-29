import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  IUserLogin,
  IAuthResponse,
  IUserToken,
  IUserTokenResponse,
} from "../../../interfaces/user";

export const loginAPI = createApi({
  reducerPath: "api/login",
  baseQuery: fetchBaseQuery({ baseUrl: "https://link-saver.herokuapp.com/" }),
  // baseQuery: fetchBaseQuery({
  //   baseUrl: "http://localhost:3000/",
  // }),
  tagTypes: ["Login"],
  endpoints: (builder) => ({
    getUsersProfile: builder.query<any, number>({
      query: (user_id) => ({ url: `/profile/${user_id}` }),
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
  useGetUsersProfileQuery,
  useLoginMutation,
  useLoginByTokenMutation,
} = loginAPI;
