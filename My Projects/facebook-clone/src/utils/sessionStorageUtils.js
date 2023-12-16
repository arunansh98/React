import { ACCESS_TOKEN } from '../constants/sessionStorageConstants';

function setAccessToken(accessToken) {
  sessionStorage.setItem(ACCESS_TOKEN, accessToken);
}

function getAccessToken() {
  return sessionStorage.getItem(ACCESS_TOKEN);
}

export { setAccessToken, getAccessToken };
