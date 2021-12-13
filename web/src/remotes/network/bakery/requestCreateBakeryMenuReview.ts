import { fetchWithToken } from '@/remotes/network/fetchBase';

export interface CreateBakeryMenuReviewPayload {
  bakeryId: number;
  reviews: {
    categoryName: string;
    contents: string;
    imgPathList: string[];
    menuName: string;
    price: number;
    rating: number;
  }[];
}

interface CreateBakeryMenuReviewResponse extends Response {
  message: string | undefined;
}

const requestCreateBakeryMenuReview = async ({
  bakeryId,
  reviews,
}: CreateBakeryMenuReviewPayload): Promise<CreateBakeryMenuReviewResponse> => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const resp = await fetchWithToken(`/bakery/${bakeryId}/menu-review`, {
    method: 'POST',
    body: JSON.stringify(reviews),
    headers,
  });
  const data = await resp.json();
  return data;
};

export default requestCreateBakeryMenuReview;
