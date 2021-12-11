import useSWR from 'swr';
import { requestGetUserFlagBakeries } from '../network/member';

const useGetUserFlagBakeries = () => {
  return useSWR(['/user?type=flags'], () => requestGetUserFlagBakeries(), {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
};

export default useGetUserFlagBakeries;
