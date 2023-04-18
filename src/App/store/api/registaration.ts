import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser, IUserRegistration } from "../../../interfaces/user";

export const registrationAPI = createApi({
  reducerPath: "api/registraion",
  baseQuery: fetchBaseQuery({ baseUrl: "https://link-saver.herokuapp.com" }),
  tagTypes: ["Registration"],
  endpoints: (builder) => ({
    register: builder.mutation<IUser, IUserRegistration>({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registrationAPI;