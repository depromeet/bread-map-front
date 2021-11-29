import { fetchWithToken } from '@/remotes/network/fetchBase';

interface GetUserPayload {
  email: string;
  nickName: string;
  profileImage: string;
  error?: string;
}
const requestGetUser = async (): Promise<GetUserPayload> => {
  const resp = await fetchWithToken(`/user/info`);
  const data = await resp.json();
  return data;
};

export default requestGetUser;
