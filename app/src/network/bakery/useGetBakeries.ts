import { useQuery } from 'react-query';
import { fetcher } from '../fetcher';
import { BakeryEntity } from './types';

type UseGetBakeriesProps = {
  latitude: number;
  longitude: number;
  range: number;
};

const requestGetBakeries = async ({ latitude, longitude, range }: UseGetBakeriesProps): Promise<BakeryEntity[]> => {
  const resp = await fetcher.get<BakeryEntity[]>(`/bakery?latitude=${latitude}&longitude=${longitude}&range=${range}`);
  return resp.data;
};

const useGetBakeries = ({ latitude, longitude, range }: UseGetBakeriesProps) => {
  const { data, isLoading, isError, refetch } = useQuery(
    ['useGetBakeries', { latitude, longitude, range }] as const,
    () => requestGetBakeries({ latitude, longitude, range })
  );

  return {
    bakeries: data,
    loading: isLoading,
    error: isError,
    refetch,
  };
};

export { useGetBakeries };
