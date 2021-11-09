import fetchBase from '@/remotes/network/fetchBase';
import type { LoginResponse } from './types';

const requestRefreshLogin = async (): Promise<LoginResponse> => {
  const resp = await fetchBase('/auth/refresh');
  const data = await resp.json();

  return data;
};

export default requestRefreshLogin;
