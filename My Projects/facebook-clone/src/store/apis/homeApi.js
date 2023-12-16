import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAccessToken, getUserId } from '../../utils/sessionStorageUtils';
import { LOGIN, REGISTER, POSTS } from '../../constants/apiConstants';

const homeApi = createApi({
  reducerPath: 'home',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  endpoints(builder) {
    return {
      login: builder.mutation({
        invalidatesTags: ['fetchPosts'],
        query: (body) => {
          return {
            url: LOGIN,
            method: 'POST',
            body: { ...body },
          };
        },
      }),
      signup: builder.mutation({
        query: (body) => {
          return {
            url: REGISTER,
            method: 'POST',
            body: { ...body },
          };
        },
      }),
      fetchPosts: builder.query({
        providesTags: ['fetchPosts'],
        query: () => {
          return {
            url: POSTS,
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + getAccessToken(),
            },
            params: {
              userId: getUserId(),
            },
          };
        },
      }),
    };
  },
});

export const { useLoginMutation, useSignupMutation, useFetchPostsQuery } =
  homeApi;
export { homeApi };
