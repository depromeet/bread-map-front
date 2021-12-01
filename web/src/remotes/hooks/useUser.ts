import useSWR from 'swr';
import { requestGetUser } from '../network/member';

const useGetUser = () => {
  return useSWR(['/user/info'], () => requestGetUser(), {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
};

export default useGetUser;
