import useSWR from 'swr';
import { requestGetBakery } from '@/remotes/network/bakery';

const useGetBakery = (id: number) => {
  return useSWR(['/bakery', id], () => requestGetBakery({ bakeryId: id }), {
    revalidateIfStale: false,
  });
};

export default useGetBakery;
