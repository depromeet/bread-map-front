import React from 'react';
import { FlatList } from 'react-native';
import styled from '@emotion/native';
import {
  ClockIcon,
  EarthIcon,
  FileTextIcon,
  InfoDeliveryIcon,
  InfoParkingIcon,
  InfoPetIcon,
  InfoShippingIcon,
  InfoWifiIcon,
  MapPinIcon,
  PhoneIcon,
} from '../../shared/icons';
import Devider from '../Devider';
import InfoRow from './InfoRow';

interface BakeryInfo {
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
}

interface InfoProps {
  info: BakeryInfo;
}

const facilities = [
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

const InfoSection: React.FC<InfoProps> = ({ info }) => (
  <Container>
    <Devider />
    <BakeryInfo>
      <InfoRow icon={<MapPinIcon />} text={info.address} />
      <InfoRow icon={<ClockIcon />} text={info.businessHour} />
      <InfoRow icon={<EarthIcon />} text={info.websiteUrlList[0]} />
      <InfoRow icon={<PhoneIcon />} text={info.telNumber} />
      <EditBtn>
        <FileTextIcon />
        <BtnText>빵집 정보 수정하기</BtnText>
      </EditBtn>
    </BakeryInfo>
    <Devider />
    <FacilityInfo>
      <Title>시설정보</Title>
      <Facilityies>
        <FlatList
          data={facilities.filter(facility => info.basicInfoList?.includes(facility.category))}
          keyExtractor={item => item.text}
          renderItem={({ item }) => (
            <Item>
              <item.icon strokeColor={'orange'} />
              <FacilityText>{item.text}</FacilityText>
            </Item>
          )}
          numColumns={3}
        />
      </Facilityies>
    </FacilityInfo>
  </Container>
);

export { InfoSection };

const Container = styled.ScrollView``;

const BakeryInfo = styled.View`
  padding: 24px 20px;
`;

const EditBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-self: flex-start;
  padding: 8px 12px;
  border-radius: 100px;
  border: ${({ theme }) => `1px solid ${theme.color.gray500}`};
  margin-top: 12px;
`;

const BtnText = styled.Text`
  color: ${({ theme }) => theme.color.gray800};
  font-weight: bold;
  font-size: 12px;
  margin-left: 4px;
`;

const FacilityInfo = styled.View`
  padding: 0 20px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
  margin: 24px 0;
`;

const Facilityies = styled.View``;

const Item = styled.View`
  background-color: ${({ theme }) => theme.color.gray50};
  border-radius: 10px;
  width: 30%;
  height: 100px;
  justify-content: space-evenly;
  align-items: center;
  margin: 5px;
`;

const FacilityText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary500};
`;
