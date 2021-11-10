import fetchBase from '@/remotes/network/fetchBase';
import type { SocialProvider, LoginResponse } from './types';

interface SocialLoginPayload {
  accessToken: string;
  provider: SocialProvider;
}

const requestSocialLogin = async ({
  accessToken,
  provider,
}: SocialLoginPayload): Promise<LoginResponse> => {
  const resp = await fetchBase(`/auth/${provider}`, {
    method: 'POST',
    body: JSON.stringify({ accessToken }),
  });
  const data = await resp.json();

  return data;
};

export default requestSocialLogin;
