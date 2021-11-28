import { fetchWithToken } from '@/remotes/network/fetchBase';

interface ModifyBakeryRatingPayload {
  bakeryId: number;
  rating: number;
}

const requestModifyBakeryRating = async ({
  bakeryId,
  rating,
}: ModifyBakeryRatingPayload): Promise<void> => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  await fetchWithToken(`/bakery/${bakeryId}/rating`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ rating }),
  });
  return;
};

export default requestModifyBakeryRating;
