import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const homeApi = createApi({
  reducerPath: 'home',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  endpoints(builder) {
    return {
      login: builder.mutation({
        query: (body) => {
          return {
            url: 'login',
            method: 'POST',
            body: { ...body },
          };
        },
      }),
      signup: builder.mutation({
        query: (body) => {
          return {
            url: 'register',
            method: 'POST',
            body: { ...body },
          };
        },
      }),
    };
  },
});

export const { useLoginMutation, useSignupMutation } = homeApi;
export { homeApi };
