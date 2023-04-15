import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../../../interfaces/user";


export const registrationAPI = createApi({
    reducerPath: 'api/registraion',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/registraion' }),
    tagTypes: ["Registration"],
    endpoints:(builder) => ({
        register: builder.mutation<IUser, Partial<IUser>>({
          query: (credentials) => ({
            url: '/registraion',
            method: 'POST',
            body: credentials,
          }),
        }),
      }),
    });

export const { useRegisterMutation } = registrationAPI