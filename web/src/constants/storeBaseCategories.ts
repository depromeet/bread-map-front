import {
  InfoParkingIcon,
  InfoDeliveryIcon,
  InfoPetIcon,
  InfoWifiIcon,
  BoxIcon,
} from '@/components/icons';

type StoreBaseCategoryText =
  | '주차 가능'
  | '와이파이'
  | '배달'
  | '반려동물'
  | '택배';

type StoreBaseCategoryTextEng =
  | 'PARKING'
  | 'WIFI'
  | 'DELIVERY'
  | 'PET'
  | 'PARCEL';

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
  {
    icon: BoxIcon,
    category: 'PARCEL',
    text: '택배',
  },
];

export default storeBaseCategory;
