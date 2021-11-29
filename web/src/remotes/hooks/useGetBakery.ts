import useSWR, { mutate } from 'swr';
import { requestGetBakery } from '@/remotes/network/bakery';

const useGetBakery = (id: number) => {
  return useSWR(['/bakery', id], () => requestGetBakery({ bakeryId: id }), {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
};

const mutateGetBakery = async (id: number) => {
  await mutate(['/bakery', id], requestGetBakery({ bakeryId: id }));
};

export default useGetBakery;
export { mutateGetBakery };
