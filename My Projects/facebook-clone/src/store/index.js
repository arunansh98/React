import { configureStore } from '@reduxjs/toolkit';
import { homeApi } from './apis/homeApi';
import { postsApi } from './apis/postsApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => {
    return getDefaultMiddleWare().concat(homeApi.middleware);
  },
});

setupListeners(store.dispatch);

export { homeApi };
export { useLoginMutation, useSignupMutation } from './apis/homeApi';

export { useFetchPostsQuery } from './apis/postsApi';
export { postsApi };