import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../../../interfaces/user";


export const userAPI = createApi({
    reducerPath: 'api/user',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/user' }),
    endpoints:(builder) => ({
        register: builder.mutation<IUser, Partial<IUser>>({
          query: (credentials) => ({
            url: '/user',
            method: 'POST',
            body: credentials,
          }),
        }),
      }),
    });

export const { useRegisterMutation } = userAPI