import fetchBase from '@/remotes/network/fetchBase';

interface GetBakeryMenuReviewPayload {
  bakeryId: number;
  limit: number;
  page: number;
}

interface MenuReview {
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

interface GetBakeryMenuReviewResponse {
  content: MenuReview[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    offset: number;
    pageNumber: number;
    paged: boolean;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    unpaged: boolean;
  };
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
}

const requestGetBakeryMenuReview = async ({
  bakeryId,
  limit,
  page,
}: GetBakeryMenuReviewPayload): Promise<GetBakeryMenuReviewResponse> => {
  const resp = await fetchBase(
    `/bakery/${bakeryId}/menu-review?page=${page}&limit=${limit}`
  );
  const data = await resp.json();
  return data;
};

export default requestGetBakeryMenuReview;
