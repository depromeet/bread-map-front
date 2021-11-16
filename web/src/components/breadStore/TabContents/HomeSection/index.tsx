import React from 'react';
import styled from '@emotion/styled';
import { Tabs } from '@/components/breadStore/StoreDetailTabs';
import { Button } from '@/components/common';
import { useGetBakery } from '@/remotes/hooks';
import { useRouter } from 'next/router';
import MenuCardList from './MenuCardList';
import StoreRating from './StoreRating';
import ReviewCardList from './ReviewCardList';

const HomeSection = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useGetBakery(id ? +id : 0);

  if (error) return <div>에러</div>;
  if (!data) return <div>로딩중이지롱</div>;

  const toMenuTab = () => router.push({ query: { id, tab: 'menu' } });
  const toReviewTab = () => router.push({ query: { id, tab: 'review' } });

  return (
    <Container>
      <Section>
        <SectionHeader>
          <Title>
            메뉴 <b>5</b>
          </Title>
          <AddButtonStyle styleType={'primary'} rounded size="small">
            메뉴 입력
          </AddButtonStyle>
        </SectionHeader>
        <MenuCardList menus={data.bakeryMenuListResponseList} />
        {data.bakeryMenuListResponseList?.length && (
          <Button onClick={toMenuTab} styleType={'none'}>
            전체 메뉴 보기
          </Button>
        )}
      </Section>

      <Section>
        <StoreRating
          userName={'소빵이'}
          bakeryName={data.bakeryName}
          personalRating={data.personalRating}
          ratingCount={data.ratingCount}
          avgRating={data.avgRating}
        />
      </Section>

      <Section>
        <SectionHeader>
          <Title>
            리뷰 <b>{data.menuReviewsCount}</b>
          </Title>
          <AddButtonStyle styleType={'primary'} rounded size="small">
            리뷰 작성
          </AddButtonStyle>
        </SectionHeader>
        <ReviewCardList reviews={data.menuReviewsResponseList} />
        {data.menuReviewsResponseList?.length && (
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
`;

const Section = styled.div`
  background: ${({ theme }) => theme.color.white};
  padding: 18px 12px;
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
