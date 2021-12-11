import { requestCreateBakeryMenuReview } from '../network/bakery';
import { CreateBakeryMenuReviewPayload } from '../network/bakery/requestCreateBakeryMenuReview';

interface PostResponse {
  ok: boolean;
  message: string | null;
}

const postCreateBakeryMenuReview = async ({
  bakeryId,
  reviews,
}: CreateBakeryMenuReviewPayload): Promise<PostResponse> => {
  const response = await requestCreateBakeryMenuReview({
    bakeryId,
    reviews,
  });

  if (response.status >= 400 || !response.ok)
    return {
      ok: false,
      message: response.message || '등록하는 과정에서 오류가 생겼어요 !',
    };
  else
    return {
      ok: true,
      message: null,
    };
};

export default postCreateBakeryMenuReview;
