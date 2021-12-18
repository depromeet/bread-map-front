import { BreadCategory } from '@/constants/breadCategories';
import { fetchWithToken } from '@/remotes/network/fetchBase';

export interface CreateBakeryMenuReviewPayload {
  bakeryId: number;
  reviews: {
    categoryName: BreadCategory | null;
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

  return resp as CreateBakeryMenuReviewResponse;
};

export default requestCreateBakeryMenuReview;
