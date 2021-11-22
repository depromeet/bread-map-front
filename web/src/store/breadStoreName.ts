import { atom } from 'jotai';

type StoreName = {
  name: string;
};

const breadStoreName = atom<StoreName>({
  name: '',
});

export default breadStoreName;
