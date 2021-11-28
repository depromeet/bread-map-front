import { fetchWithToken } from '@/remotes/network/fetchBase';

interface GetCategoryMenuPayload {
  bakeryId: number;
  category: string;
}

interface GetCategoryMenuResponse {
  menuList: string[];
}

const requestGetCategoryMenu = async ({
  bakeryId,
  category,
}: GetCategoryMenuPayload): Promise<GetCategoryMenuResponse> => {
  const resp = await fetchWithToken(
    `/bakery/${bakeryId}/category/menu?category=${category}`
  );
  const data = await resp.json();
  return data;
};

export default requestGetCategoryMenu;
