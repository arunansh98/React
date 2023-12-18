import { getUserId, getBearerToken } from '../../utils/sessionStorageUtils';
import { POSTS } from '../../constants/apiConstants';
import { homeApi } from './homeApi';

const postsApi = homeApi.injectEndpoints({
  endpoints(builder) {
    return {
      fetchPosts: builder.query({
        providesTags: ['fetchPosts'],
        query: () => {
          return {
            url: POSTS,
            method: 'GET',
            headers: {
              Authorization: getBearerToken(),
            },
            params: {
              userId: getUserId(),
            },
          };
        },
      }),
    };
  },
  overrideExisting: false,
});

export const { useFetchPostsQuery } = postsApi;
export { postsApi };
