import { useFetchPostsQuery } from '../../store';

function Posts() {
  const { data, error, isFetching } = useFetchPostsQuery();
  console.log('data', data);
  return 'Posts works!';
}

export default Posts;
