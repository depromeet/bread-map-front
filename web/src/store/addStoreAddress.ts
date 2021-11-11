import { atom } from 'jotai';

type StoreAddState = {
  address: string;
  addressDetail?: string;
};

const addStoreAddress = atom<StoreAddState>({
  address: '',
  addressDetail: '',
});

export default addStoreAddress;
