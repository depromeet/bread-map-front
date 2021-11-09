import fetchBase from '@/remotes/network/fetchBase';

interface ModifyBakeryFlagPayload {
  bakeryId: number;
  createFlagsRequest: 'NONE' | 'PICKED' | 'GONE';
}

const requestModifyBakeryFlag = async ({
  bakeryId,
  createFlagsRequest,
}: ModifyBakeryFlagPayload): Promise<void> => {
  const resp = await fetchBase(`/bakery/${bakeryId}/flag`, {
    method: 'POST',
    body: JSON.stringify({ createFlagsRequest }),
  });
  return;
};

export default requestModifyBakeryFlag;
