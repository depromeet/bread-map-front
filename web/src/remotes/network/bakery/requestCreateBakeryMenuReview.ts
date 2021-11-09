import fetchBase from '@/remotes/network/fetchBase';

interface CreateBakeryMenuReviewPayload {
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

const requestCreateBakeryMenuReview = async ({
  bakeryId,
  reviews,
}: CreateBakeryMenuReviewPayload): Promise<void> => {
  const resp = await fetchBase(`/bakery/${bakeryId}/menu-review`, {
    method: 'POST',
    body: JSON.stringify(reviews),
  });
  const data = await resp.json();
  return data;
};

export default requestCreateBakeryMenuReview;
