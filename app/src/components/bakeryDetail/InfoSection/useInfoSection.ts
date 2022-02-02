import React from 'react';
import { SvgProps } from 'react-native-svg';
import { InfoParkingIcon, InfoWifiIcon, InfoDeliveryIcon, InfoPetIcon, InfoShippingIcon } from '@shared/Icons';
import type { InfoIconProps } from '@shared/Icons';

type FacilityCategory = 'PARKING' | 'WIFI' | 'DELIVERY' | 'PET' | 'SHIPPING';
type FacilityText = '주차 가능' | '와이파이' | '배달' | '반려동물' | '택배';

type FacilityItem = {
  icon: React.FC<SvgProps & InfoIconProps>;
  category: FacilityCategory;
  text: FacilityText;
};

const facilityList: FacilityItem[] = [
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
    icon: InfoShippingIcon,
    category: 'SHIPPING',
    text: '택배',
  },
];

type BakeryInfo = {
  address: string;
  //avgRating: number;
  bakeryId: number;
  //menusCount: number;
  bakeryName: string;
  basicInfoList: string[]; /// ['PET']
  businessHour: string;
  //flagType: 'NONE';
  //flagsCount: number;
  //imgPath: string;
  //menuReviewsCount: number;
  //personalRating: number;
  //ratingCount: number;
  telNumber: string;
  websiteUrlList: string[];
};

type UseInfoProps = {
  info: BakeryInfo;
};

export const useInfoSection = ({ info }: UseInfoProps) => {
  const [facilities, setFacilities] = React.useState<FacilityItem[] | null>(null);

  React.useEffect(() => {
    const filtered = facilityList.filter(facility => info.basicInfoList?.includes(facility.category));
    setFacilities(filtered);
  }, [info]);

  return {
    info,
    facilities,
  };
};
