import { fetchWithToken } from '@/remotes/network/fetchBase';

type FlagType = 'NONE' | 'PICKED' | 'GONE';

interface ModifyBakeryFlagPayload {
  bakeryId: number;
  flagType: FlagType;
}

const requestModifyBakeryFlag = async ({
  bakeryId,
  flagType,
}: ModifyBakeryFlagPayload): Promise<void> => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  await fetchWithToken(`/bakery/${bakeryId}/flag`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ flagType }),
  });
  return;
};

export default requestModifyBakeryFlag;
