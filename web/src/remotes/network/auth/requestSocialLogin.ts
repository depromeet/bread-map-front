import fetchBase from '@/remotes/network/fetchBase';
import { tokenSaveLocalstorage } from './authUtil';
import type { SocialProvider, LoginResponse } from './types';

interface SocialLoginPayload {
  accessToken: string;
  provider: SocialProvider;
}

const requestSocialLogin = async ({
  accessToken,
  provider,
}: SocialLoginPayload): Promise<LoginResponse> => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', `Bearer ${accessToken}`);

  const resp = await fetchBase(`/auth/${provider}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ accessToken }),
  });
  const data = (await resp.json()) as LoginResponse;

  if (data.appToken) tokenSaveLocalstorage(data.appToken);

  return data;
};

export default requestSocialLogin;
