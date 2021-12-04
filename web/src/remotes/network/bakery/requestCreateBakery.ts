import { BakeryBaseCategoryTextEng } from '@/constants/bakeryBaseCategories';
import { fetchWithToken } from '@/remotes/network/fetchBase';

interface CreateBakeryPayload {
  address: string;
  bakeryName?: string | null;
  basicInfoList?: BakeryBaseCategoryTextEng[];
  businessHour?: string;
  imgPathList?: string[];
  latitude: number;
  longitude: number;
  telNumber?: string;
  websiteUrlList?: string[];
}

interface CreateBakeryResponse extends Response {
  message: string | undefined;
}

const requestCreateBakery = async (
  payload: CreateBakeryPayload
): Promise<CreateBakeryResponse> => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  return (await fetchWithToken('/bakery', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers,
  })) as CreateBakeryResponse;
};

export default requestCreateBakery;
