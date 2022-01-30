import { fetcher } from './index';

interface GetBakeriesPayload {
  latitude: number;
  longitude: number;
  range: number;
}

interface MenuReviewEntity {
  breadCategoryId: number;
  contents: string;
  imgPathList: string[];
  lastModifiedDateTime: string;
  memberId: number;
  memberName: string;
  menuId: number;
  menuName: string;
  menuReviewId: number;
  rating: number;
}

export interface BakeryEntity {
  address: string;
  avgRating: number;
  bakeryId: number;
  bakeryName: string;
  breadCategoryList: string[];
  flagsCount: number;
  imgPath: string;
  latitude: number;
  longitude: number;
  menuReviewList: MenuReviewEntity[];
  menuReviewsCount: number;
  ratingCount: number;
}

const requestGetBakeries = async (): Promise<BakeryEntity[]> => {
  const args = { latitude: 37.6799006, longitude: 127.0549781, range: 100000 };

  const resp = await fetcher(`/bakery?latitude=${args.latitude}&longitude=${args.longitude}&range=${args.range}`);

  return resp.data;
};

export default requestGetBakeries;
