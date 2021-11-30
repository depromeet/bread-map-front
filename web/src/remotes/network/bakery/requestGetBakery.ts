import { fetchWithToken } from '@/remotes/network/fetchBase';

interface GetBakeryPayload {
  bakeryId: number;
}

interface MenuItemEntity {
  avgRating: number;
  breadCategoryId: number;
  breadCategoryName: string;
  imgPath: string;
  menuId: number;
  menuName: string;
  price: number;
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
  bakeryMenuListResponseList: MenuItemEntity[];
  menusCount: number;
  bakeryName: string;
  basicInfoList: string[]; /// ['PET']
  businessHour: string;
  flagType: 'NONE';
  flagsCount: number;
  imgPath: string;
  menuReviewsCount: number;
  menuReviewsResponseList: MenuReviewEntity[];
  personalRating: number;
  ratingCount: number;
  telNumber: string;
  websiteUrlList: string[];
}

const requestGetBakery = async ({
  bakeryId,
}: GetBakeryPayload): Promise<BakeryEntity> => {
  const resp = await fetchWithToken(`/bakery/${bakeryId}`);
  const data = await resp.json();
  return data;
};

export default requestGetBakery;
