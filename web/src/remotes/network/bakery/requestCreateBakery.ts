import { fetchWithToken } from '@/remotes/network/fetchBase';

interface CreateBakeryPayload {
  address: string;
  bakeryName: string;
  basicInfoList: string[];
  businessHour: string;
  imgPathList: string[];
  latitude: number;
  lognitude: number;
  telNumber: string;
  websiteUrlList: string[];
}

const requestCreateBakery = async (
  payload: CreateBakeryPayload
): Promise<void> => {
  await fetchWithToken('/bakery', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  return;
};

export default requestCreateBakery;
