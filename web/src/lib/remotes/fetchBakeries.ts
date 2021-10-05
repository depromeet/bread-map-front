import fetchBase from './fetchBase';

export interface FetchBakeriesPayload {
  latitude: number;
  longitude: number;
  range: number;
}

export interface BakeryEntity {
  bakeryId: number;
  bakeryName: string;
  flagsCount: number;
  latitude: number;
  longitude: number;
  address: string;
}

export const fetchBakeries = async ({
  latitude,
  longitude,
  range,
}: FetchBakeriesPayload): Promise<BakeryEntity[]> => {
  const resp = await fetchBase(`/bakery?latitude=${latitude}&longitude=${longitude}&range=${range}`);
  const data = await resp.json();

  return data;
};
