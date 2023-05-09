import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser, IUserRegistration } from "../../../utils/interfaces/user";

export const registrationAPI = createApi({
  reducerPath: "api/registraion",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
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
