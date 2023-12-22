import { FETCH_POSTS } from '../../constants/apiConstants';
import { getBearerToken, getUserId } from '../../utils/sessionStorageUtils';
import { landingApi } from './landingApi';

const homeApi = landingApi.injectEndpoints({
  endpoints(builder) {
    return {
      fetchPosts: builder.query({
        providesTags: ['fetchPosts'],
        query: () => {
          return {
            url: FETCH_POSTS,
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
