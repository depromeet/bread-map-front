import useSWR, { mutate } from 'swr';
import requestGeocode from '../network/bakery/requestGeocode';

const useGeocode = (address: string | null) => {
  return useSWR(
    address ? ['/geocode', address] : null,
    (_, address) => requestGeocode({ address }),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
};

const mutateGeocode = (address: string) => {
  return mutate(address ? ['/geocode', address] : null, requestGeocode({ address }));
};

export default useGeocode;
export { mutateGeocode };
