import {
  InfoParkingIcon,
  InfoDeliveryIcon,
  InfoPetIcon,
  InfoWifiIcon,
} from '@/components/icons';

export type StoreBaseCategoryText =
  | null
  | '주차 가능'
  | '와이파이'
  | '배달'
  | '반려동물';

export interface StoreBaseInfo {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: StoreBaseCategoryText;
}

interface StoreBaseCategory {
  [key: string]: StoreBaseInfo;
}

const storeBaseInfo: StoreBaseCategory = {
  Parking: {
    id: 1,
    icon: InfoParkingIcon,
    text: '주차 가능',
  },
  Wifi: {
    id: 2,
    icon: InfoWifiIcon,
    text: '와이파이',
  },
  Delivery: {
    id: 3,
    icon: InfoDeliveryIcon,
    text: '배달',
  },
  Pet: {
    id: 4,
    icon: InfoPetIcon,
    text: '반려동물',
  },
};

export default storeBaseInfo;
