type MenuReviewEntity = {
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
};

export type BakeryEntity = {
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
};
