import { fetchWithToken } from '@/remotes/network/fetchBase';

interface GetBakeryMenuPayload {
  bakeryId: number;
  limit: number;
  page: number;
}

interface Menu {
  avgRating: number;
  breadCategoryId: number;
  breadCategoryName: string;
  imgPath: string;
  menuId: number;
  menuName: string;
  price: number;
}

interface GetBakeryMenuResponse {
  content: Menu[];
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

const requestGetBakeryMenu = async ({
  bakeryId,
  limit,
  page,
}: GetBakeryMenuPayload): Promise<GetBakeryMenuResponse> => {
  const resp = await fetchWithToken(
    `/bakery/${bakeryId}/menu?limit=${limit}&page=${page}`
  );
  const data = await resp.json();
  return data;
};

export default requestGetBakeryMenu;
