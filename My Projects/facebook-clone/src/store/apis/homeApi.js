import { POSTS } from '../../constants/apiConstants';
import { getBearerToken, getUserId } from '../../utils/sessionStorageUtils';
import { landingApi } from './landingApi';

const homeApi = landingApi.injectEndpoints({
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

export const { useFetchPostsQuery } = homeApi;
export { homeApi };
