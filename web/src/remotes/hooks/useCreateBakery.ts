import { requestCreateBakery } from '../network/bakery';
import { CreateBakeryPayload } from '../network/bakery/requestCreateBakery';

interface PostResponse {
  ok: boolean;
  message: string | null;
}

const postCreateBakery = async ({
  imgPathList = null,
  websiteUrlList = null,
  ...params
}: CreateBakeryPayload): Promise<PostResponse> => {
  const response = await requestCreateBakery({
    ...params,
    imgPathList,
    websiteUrlList,
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

export default postCreateBakery;
