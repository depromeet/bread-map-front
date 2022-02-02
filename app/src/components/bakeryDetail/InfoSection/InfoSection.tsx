import React from 'react';
import { bindHook } from '@/utils';
import styled from '@emotion/native';
import { ClockIcon, EarthIcon, FileTextIcon, MapPinIcon, PhoneIcon } from '@shared/Icons';
import Divider from '../Divider';
import InfoRow from './InfoRow';
import { useInfoSection } from './useInfoSection';

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

type InfoProps = {
  info: BakeryInfo;
};

const InfoSection: React.FC<InfoProps> = bindHook(useInfoSection, ({ info, facilities }) => (
  <Container>
    <Divider />
    <BakeryInformation>
      <InfoRow icon={<MapPinIcon />} text={info.address} />
      <InfoRow icon={<ClockIcon />} text={info.businessHour} />
      <InfoRow icon={<EarthIcon />} text={info.websiteUrlList[0]} />
      <InfoRow icon={<PhoneIcon />} text={info.telNumber} />
      <EditBtn>
        <FileTextIcon />
        <BtnText>빵집 정보 수정하기</BtnText>
      </EditBtn>
    </BakeryInformation>
    <Divider />
    <FacilityInfo>
      <Title>시설정보</Title>
      <Facilityies>
        {facilities?.map(facility => (
          <Item key={facility.category}>
            {<facility.icon strokeColor={'orange'} />}
            <FacilityText>{facility.text}</FacilityText>
          </Item>
        ))}
      </Facilityies>
    </FacilityInfo>
  </Container>
));

export { InfoSection };

const Container = styled.View``;

const BakeryInformation = styled.View`
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

const Facilityies = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

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
