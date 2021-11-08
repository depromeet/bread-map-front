import useSWR from 'swr';
import { fetchBakeries } from '@/remotes/network/fetchBakeries';

type UseGetBakeriesParams = Parameters<typeof fetchBakeries>[0];

const useGetBakeries = ({
  latitude,
  longitude,
  range,
}: UseGetBakeriesParams) => {
  return useSWR(
    ['/bakery', latitude, longitude, range],
    (_, latitude, longitude, range) =>
      fetchBakeries({ latitude, longitude, range })
  );
};

export default useGetBakeries;
