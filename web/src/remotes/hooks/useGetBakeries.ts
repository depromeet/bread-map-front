import useSWR from 'swr';
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
    ['/bakery', latitude, longitude, range],
    (_, latitude, longitude, range) =>
      requestGetBakeries({ latitude, longitude, range })
  );
};

export default useGetBakeries;
