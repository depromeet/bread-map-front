import router from 'next/router';
import { requestRefreshLogin } from '.';

const EXPIRE_GAP = 5 * 24 * 60 * 60 * 60;
const EXPIRE = 30 * 24 * 60 * 60 * 60; // 예시 expire time 30일
let REFRESH_TIME_OUT: NodeJS.Timeout | null = null;

/**
 * 로그인 했을때, 리프레시를 진행했을때.
 * @param token access Token
 */

function tokenSaveLocalstorage(token: string) {
  const expire = new Date().getTime() + EXPIRE * 1000;

  if (window !== undefined) {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('expire', expire.toString());
  }

  if (REFRESH_TIME_OUT) clearTimeout(REFRESH_TIME_OUT);
  REFRESH_TIME_OUT = setTimeout(() => {
    requestRefreshLogin();
  }, EXPIRE - EXPIRE_GAP * 1000);
}

/**
 * url 직접접근시 refresh timeOut 설정
 * 현재 진행중인 refresh timeOut이 있으면 그냥 return
 */
function setRefreshTime() {
  if (REFRESH_TIME_OUT) return;

  const expire = localStorage.getItem('expire');
  if (!expire) router.push('auth/signin');

  const refreshTime = Number(expire) - new Date().getTime() - EXPIRE_GAP * 1000;

  REFRESH_TIME_OUT = setTimeout(() => {
    requestRefreshLogin();
  }, refreshTime);
}

export { tokenSaveLocalstorage, setRefreshTime };
