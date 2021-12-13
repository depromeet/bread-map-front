import { fetchWithToken } from '@/remotes/network/fetchBase';

interface GetUserFlagBakeriesPayload {
  avgRating: number;
  bakeryId: number;
  bakeryName: string;
  flagType: 'GONE' | 'PICKED';
  flagsCount: number;
  imgPath: string;
  menuReviewContentList: string[];
  menuReviewsCount: number;
}

const requestGetUserFlagBakeries = async (): Promise<
  GetUserFlagBakeriesPayload[]
> => {
  const resp = await fetchWithToken(`/user?type=flags`);
  const data = await resp.json();
  return data;
};

export default requestGetUserFlagBakeries;
