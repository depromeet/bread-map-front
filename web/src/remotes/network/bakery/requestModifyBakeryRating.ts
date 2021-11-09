import fetchBase from '@/remotes/network/fetchBase';

interface ModifyBakeryRatingPayload {
  bakeryId: number;
  rating: number;
}

const requestModifyBakeryRating = async ({
  bakeryId,
  rating,
}: ModifyBakeryRatingPayload): Promise<void> => {
  const resp = await fetchBase(`/bakery/${bakeryId}/rating`, {
    method: 'POST',
    body: JSON.stringify({ rating }),
  });
  return;
};

export default requestModifyBakeryRating;
