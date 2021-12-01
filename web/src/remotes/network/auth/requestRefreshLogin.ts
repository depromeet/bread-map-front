import { fetchWithToken } from '@/remotes/network/fetchBase';
import { tokenSaveLocalstorage } from './authUtil';
import type { LoginResponse } from './types';

const requestRefreshLogin = async (): Promise<LoginResponse> => {
  const resp = await fetchWithToken('/auth/refresh');
  const data = (await resp.json()) as LoginResponse;

  if (data.appToken) tokenSaveLocalstorage(data.appToken);

  return data;
};

export default requestRefreshLogin;
