import { fetchWithToken } from '@/remotes/network/fetchBase';

interface DeleteBakeryMenuReviewPayload {
  bakeryId: number;
  menuReviewId: number;
}

const requestDeleteBakeryMenuReview = async ({
  bakeryId,
  menuReviewId,
}: DeleteBakeryMenuReviewPayload): Promise<void> => {
  await fetchWithToken(`/bakery/${bakeryId}/menu-review/${menuReviewId}`, {
    method: 'DELETE',
  });
  return;
};

export default requestDeleteBakeryMenuReview;
