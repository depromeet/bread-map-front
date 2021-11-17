import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@/components/common';
import { useRouter } from 'next/router';
import MenuCardList from './MenuCardList';
import StoreRating from './StoreRating';
import ReviewCardList from './ReviewCardList';
import { BakeryEntity } from '@/remotes/network/bakery/requestGetBakery';

type HomeSectionProps = {
  bakeryData: BakeryEntity;
};

const HomeSection = ({ bakeryData }: HomeSectionProps) => {
  const router = useRouter();

  const toMenuTab = () =>
    router.push({ query: { ...router.query, tab: 'menu' } });
  const toReviewTab = () =>
    router.push({ query: { ...router.query, tab: 'review' } });

  return (
    <Container>
      <Section className={'grow'}>
        <SectionHeader>
          <Title>
            메뉴{' '}
            <b>
              {bakeryData.bakeryMenuListResponseList
                ? bakeryData.bakeryMenuListResponseList.length
                : 0}
            </b>
          </Title>
          <AddButtonStyle styleType={'primary'} rounded size="small">
            메뉴 입력
          </AddButtonStyle>
        </SectionHeader>
        <MenuCardList menus={bakeryData.bakeryMenuListResponseList} />
        {bakeryData.bakeryMenuListResponseList?.length && (
          <Button onClick={toMenuTab} styleType={'none'}>
            전체 메뉴 보기
          </Button>
        )}
      </Section>

      <Section>
        <StoreRating
          userName={'소빵이'}
          bakeryName={bakeryData.bakeryName}
          personalRating={bakeryData.personalRating}
          ratingCount={bakeryData.ratingCount}
          avgRating={bakeryData.avgRating}
        />
      </Section>

      <Section className={'grow'}>
        <SectionHeader>
          <Title>
            리뷰 <b>{bakeryData.menuReviewsCount}</b>
          </Title>
          <AddButtonStyle styleType={'primary'} rounded size="small">
            리뷰 작성
          </AddButtonStyle>
        </SectionHeader>
        <ReviewCardList reviews={bakeryData.menuReviewsResponseList} />
        {bakeryData.menuReviewsResponseList?.length && (
          <Button onClick={toReviewTab} styleType={'none'}>
            전체 리뷰 보기
          </Button>
        )}
      </Section>
    </Container>
  );
};

export default HomeSection;

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

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  b {
    color: ${({ theme }) => theme.color.primary500};
  }
`;

const AddButtonStyle = styled(Button)`
  width: auto;
`;
