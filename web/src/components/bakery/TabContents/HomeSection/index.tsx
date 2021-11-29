import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@/components/common';
import { useRouter } from 'next/router';
import MenuCardList from './MenuCardList';
import BakeryRating from './BakeryRating';
import ReviewCardList from './ReviewCardList';
import { useGetBakery } from '@/remotes/hooks';
import useGetUser from '@/remotes/hooks/useUser';

type HomeSectionProps = {
  bakeryId: number;
};

const HomeSection = ({ bakeryId }: HomeSectionProps) => {
  const router = useRouter();
  const { data: bakeryData, error: bakeryError } = useGetBakery(bakeryId);
  const { data: userData, error: userError } = useGetUser();

  const toMenuTab = React.useCallback(
    () => router.push({ query: { ...router.query, tab: 'menu' } }),
    [router]
  );
  const toReviewTab = React.useCallback(
    () => router.push({ query: { ...router.query, tab: 'review' } }),
    [router]
  );
  const createReviewButtonClickHandler = React.useCallback(
    () => router.push('/building-page'),
    [router]
  );
  const createMenuButtonClickHandler = React.useCallback(
    () => router.push('/building-page'),
    [router]
  );

  if (bakeryError || userError) return <div>Error!!</div>;
  if (!bakeryData || !userData) return <div>Loading...</div>;

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
          <AddButtonStyle
            onClick={createMenuButtonClickHandler}
            styleType={'primary'}
            rounded
            size="small"
          >
            메뉴 입력
          </AddButtonStyle>
        </SectionHeader>
        <MenuCardList menus={bakeryData.bakeryMenuListResponseList} />
        {bakeryData.bakeryMenuListResponseList?.length ? (
          <Button onClick={toMenuTab} styleType={'none'}>
            전체 메뉴 보기
          </Button>
        ) : (
          ''
        )}
      </Section>

      <Section>
        <BakeryRating
          bakeryId={bakeryData.bakeryId}
          userName={userData.nickName}
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
          <AddButtonStyle
            onClick={createReviewButtonClickHandler}
            styleType={'primary'}
            rounded
            size="small"
          >
            리뷰 작성
          </AddButtonStyle>
        </SectionHeader>
        <ReviewCardList reviews={bakeryData.menuReviewsResponseList} />
        {bakeryData.menuReviewsResponseList?.length ? (
          <Button onClick={toReviewTab} styleType={'none'}>
            전체 리뷰 보기
          </Button>
        ) : (
          ''
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
