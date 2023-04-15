import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IUser } from "../../../interfaces/user";


export const loginAPI = createApi({
    reducerPath:'api/login',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000/login'}),
    tagTypes: ["Login"],
    endpoints: (builder) => ({
        login: builder.mutation<IUser[], any>({
          query: (user) => ({
            url: '/login',
            method: 'POST',
            body: user,
          }),
        }),
      }),
    });
    
    export const { useLoginMutation } = loginAPI;