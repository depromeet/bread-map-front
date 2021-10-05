import useSWR from 'swr';
import { fetchBakeries } from '@/lib/remotes/fetchBakeries';

type UseGetBakeriesParams = Parameters<typeof fetchBakeries>[0];

export const useGetBakeries = ({
  latitude,
  longitude,
  range,
}: UseGetBakeriesParams) => {
  return useSWR(
    ['/bakery', latitude, longitude, range],
    (_, latitude, longitude, range) => fetchBakeries({ latitude, longitude, range })
  );
};
