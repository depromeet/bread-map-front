import useSWR from 'swr';
import { requestGetBakeryMenuReview } from '@/remotes/network/bakery';

const useGetBakeryMenu = (id: number, page: number, limit: number) => {
  return useSWR(
    ['/bakery', id, 'menu-review', page],
    () => requestGetBakeryMenuReview({ bakeryId: id, limit, page }),
    {
      revalidateIfStale: false,
    }
  );
};

export default useGetBakeryMenu;
