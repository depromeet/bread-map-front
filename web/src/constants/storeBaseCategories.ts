import {
  InfoParkingIcon,
  InfoDeliveryIcon,
  InfoPetIcon,
  InfoWifiIcon,
} from '@/components/icons';

type StoreBaseCategoryText =
  | null
  | '주차 가능'
  | '와이파이'
  | '배달'
  | '반려동물';

type StoreBaseCategoryTextEng = null | 'PARKING' | 'WIFI' | 'DELIVERY' | 'PET';

export interface StoreBaseCategoryInfo {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  category: StoreBaseCategoryTextEng;
  text: StoreBaseCategoryText;
}

const storeBaseCategory: StoreBaseCategoryInfo[] = [
  {
    icon: InfoParkingIcon,
    category: 'PARKING',
    text: '주차 가능',
  },
  {
    icon: InfoWifiIcon,
    category: 'WIFI',
    text: '와이파이',
  },
  {
    icon: InfoDeliveryIcon,
    category: 'DELIVERY',
    text: '배달',
  },
  {
    icon: InfoPetIcon,
    category: 'PET',
    text: '반려동물',
  },
];

export default storeBaseCategory;
