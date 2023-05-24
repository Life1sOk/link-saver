import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import { IUser, IUsersSeach } from "../../../utils/interfaces/user";

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
  }),
});

export const {
  useGetUserProfileQuery,
  useLazyGetUserProfileQuery,
  useLazyGetUsersSearchQuery,
} = userApi;
