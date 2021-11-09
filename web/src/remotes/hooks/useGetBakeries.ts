import useSWR from 'swr';
import { requestGetBakeries } from '@/remotes/network/bakery';

type UseGetBakeriesParams = Parameters<typeof fetchBakeries>[0];

const useGetBakeries = ({
  latitude,
  longitude,
  range,
}: UseGetBakeriesParams) => {
  return useSWR(
    ['/bakery', latitude, longitude, range],
    (_, latitude, longitude, range) =>
      requestGetBakeries({ latitude, longitude, range })
  );
};

export default useGetBakeries;
