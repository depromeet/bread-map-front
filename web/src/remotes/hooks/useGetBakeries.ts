import useSWR, { mutate } from 'swr';
import { requestGetBakeries } from '@/remotes/network/bakery';

interface UseGetBakeriesParams {
  latitude: number;
  longitude: number;
  range: number;
}

const useGetBakeries = ({
  latitude,
  longitude,
  range,
}: UseGetBakeriesParams) => {
  return useSWR(
    ['/bakeries'],
    () => requestGetBakeries({ latitude, longitude, range }),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
};

const mutateGetBakeries = ({
  latitude,
  longitude,
  range,
}: UseGetBakeriesParams) => {
  mutate(
    ['/bakeries'],
    requestGetBakeries({ latitude, longitude, range }),
    false
  );
};

export default useGetBakeries;
export { mutateGetBakeries };
