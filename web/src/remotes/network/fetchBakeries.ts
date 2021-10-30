import fetchBase from './fetchBase';

export interface FetchBakeriesPayload {
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
  menuReviewList: MenuReviewEntity[],
  menuReviewsCount: number;
  ratingCount: number;
}

export const fetchBakeries = async ({
  latitude,
  longitude,
  range,
}: FetchBakeriesPayload): Promise<BakeryEntity[]> => {
  const resp = await fetchBase(
    `/bakery?latitude=${latitude}&longitude=${longitude}&range=${range}`
  );
  const data = await resp.json();

  return data;
};
