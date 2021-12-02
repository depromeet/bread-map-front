import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@/components/common';
import {
  ClockIcon,
  EarthIcon,
  FileTextIcon,
  MapPinIcon,
  PhoneIcon,
} from '@/components/icons';
import BakeryCategories from './BakeryCategories';
import { useGetBakery } from '@/remotes/hooks';

type ReviewSectionProps = {
  bakeryId: number;
};

const InfoSection = ({ bakeryId }: ReviewSectionProps) => {
  const { data, error } = useGetBakery(bakeryId);

  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      <Section>
        <InfoList>
          <li>
            <MapPinIcon />
            <div>{data.address}</div>
          </li>
          <li>
            <ClockIcon />
            <div>{data.businessHour || '제공된 정보가 없습니다.'}</div>
          </li>
          <li>
            <EarthIcon />
            <WebSiteList>
              {data.websiteUrlList?.map((url, idx) => (
                <UrlLink href={url} key={idx}>
                  {url}
                </UrlLink>
              ))}
            </WebSiteList>
          </li>
          <li>
            <PhoneIcon />
            <div>{data.telNumber}</div>
          </li>
        </InfoList>
        <EditButtonStyle styleType={'none'} size={'tiny'} rounded>
          <FileTextIcon />
          빵집 정보 수정하기
        </EditButtonStyle>
      </Section>
      <Section className={'grow'}>
        <SectionHeader>
          <Title>시설정보</Title>
        </SectionHeader>
        <BakeryCategories selectedCategory={data.basicInfoList as any} />
      </Section>
    </Container>
  );
};

export default InfoSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.white};
  padding: 18px 12px;

  &.grow {
    flex-grow: 1;
  }
`;

const InfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.color.gray500};
  font-size: 12px;
  gap: 3px;
  li {
    line-height: 1;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const UrlLink = styled.a`
  color: ${({ theme }) => theme.color.primary500};
  text-decoration: none;
`;

const WebSiteList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Divider = styled.hr`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.color.gray300};
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3``;

const EditButtonStyle = styled(Button)`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  gap: 5px;
  margin: 20px 0 24px;
`;
