import { atom } from 'jotai';

type StoreAddState = {
  address: string;
  addressDetail?: string;
  latitude: string;
  longitude: string;
};

const addStoreAddress = atom<StoreAddState>({
  address: '',
  addressDetail: '',
  latitude: '',
  longitude: '',
});

export default addStoreAddress;
