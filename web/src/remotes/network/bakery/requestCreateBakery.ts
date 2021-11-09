import fetchBase from '@/remotes/network/fetchBase';

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
  const resp = await fetchBase('/bakery', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  return;
};

export default requestCreateBakery;
