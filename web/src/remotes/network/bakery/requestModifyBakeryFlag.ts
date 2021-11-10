import fetchBase from '@/remotes/network/fetchBase';

type FlagType = 'NONE' | 'PICKED' | 'GONE';

interface ModifyBakeryFlagPayload {
  bakeryId: number;
  flagType: FlagType;
}

const requestModifyBakeryFlag = async ({
  bakeryId,
  flagType,
}: ModifyBakeryFlagPayload): Promise<void> => {
  await fetchBase(`/bakery/${bakeryId}/flag`, {
    method: 'POST',
    body: JSON.stringify({ flagType }),
  });
  return;
};

export default requestModifyBakeryFlag;
