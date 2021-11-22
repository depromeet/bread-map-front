import useSWR from 'swr';
import { requestGetBakeryMenu } from '@/remotes/network/bakery';

const useGetBakeryMenu = (id: number, page: number, limit: number) => {
  return useSWR(
    ['/bakery', id, 'menu', page],
    () => requestGetBakeryMenu({ bakeryId: id, limit, page }),
    {
      revalidateIfStale: false,
    }
  );
};

export default useGetBakeryMenu;
