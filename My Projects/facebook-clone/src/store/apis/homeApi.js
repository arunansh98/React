import {
  FETCH_POSTS,
  UPDATE_POST,
  ADD_POST,
} from "../../constants/apiConstants";
import { DELETE, GET, POST, PUT } from "../../constants/methodTypes";
import { getBearerToken, getUserId } from "../../utils/sessionStorageUtils";
import { landingApi } from "./landingApi";

const homeApi = landingApi.injectEndpoints({
  endpoints(builder) {
    return {
      fetchPosts: builder.query({
        providesTags: ["fetchPosts"],
        query: () => {
          return {
            url: FETCH_POSTS,
            method: GET,
            headers: {
              Authorization: getBearerToken(),
            },
            params: {
              userId: getUserId(),
            },
          };
        },
      }),
      addPost: builder.mutation({
        invalidatesTags: ["fetchPosts"],
        query: (post) => {
          return {
            url: ADD_POST,
            method: POST,
            headers: {
              Authorization: getBearerToken(),
            },
            body: {
              ...post,
            },
          };
        },
      }),
      updatePost: builder.mutation({
        invalidatesTags: ["fetchPosts"],
        query: (post) => {
          const { id, ...body } = post;
          return {
            url: `${UPDATE_POST}/${id}`,
            method: PUT,
            headers: {
              Authorization: getBearerToken(),
            },
            body: {
              ...body,
            },
          };
        },
      }),
      deletePost: builder.mutation({
        invalidatesTags: ["fetchPosts"],
        query: (post) => {
          const { id } = post;
          return {
            url: `${UPDATE_POST}/${id}`,
            method: DELETE,
            headers: {
              Authorization: getBearerToken(),
            },
          };
        },
      }),
    };
  },
  overrideExisting: false,
});

export const {
  useFetchPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = homeApi;
export { homeApi };
