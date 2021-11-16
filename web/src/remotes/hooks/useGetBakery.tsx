import useSWR from 'swr';
import { requestGetBakery } from '@/remotes/network/bakery';

const useGetBakery = (id: number) => {
  return useSWR(['/bakery', id], () => requestGetBakery({ bakeryId: id }));
};

export default useGetBakery;
