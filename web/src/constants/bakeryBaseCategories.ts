import {
  InfoParkingIcon,
  InfoDeliveryIcon,
  InfoPetIcon,
  InfoWifiIcon,
  BoxIcon,
} from '@/components/icons';

type BakeryBaseCategoryText =
  | '주차 가능'
  | '와이파이'
  | '배달'
  | '반려동물'
  | '택배';

type BakeryBaseCategoryTextEng =
  | 'PARKING'
  | 'WIFI'
  | 'DELIVERY'
  | 'PET'
  | 'PARCEL';

export interface BakeryBaseCategoryInfo {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  category: BakeryBaseCategoryTextEng;
  text: BakeryBaseCategoryText;
}

const BakeryBaseCategory: BakeryBaseCategoryInfo[] = [
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

export default BakeryBaseCategory;
