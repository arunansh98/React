import { setAccessToken } from '../../../utils/sessionStorageUtils';
import { POSTS } from '../../../constants/routeConstants';
import { useNavigate } from 'react-router-dom';

function useNavigateHook(results) {
  const navigate = useNavigate();
  if (results.status === 'fulfilled') {
    setAccessToken(results.data.accessToken);
    navigate('/' + POSTS);
  }
}

export default useNavigateHook;
