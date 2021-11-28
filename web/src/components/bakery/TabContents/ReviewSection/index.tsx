import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@/components/common';
import BakeryRating from './BakeryRating';
import ReviewCardList from '../HomeSection/ReviewCardList';
import useGetBakeryMenuReivew from '@/remotes/hooks/useGetBakeryMenuReivew';
import { useGetBakery } from '@/remotes/hooks';

type ReviewSectionProps = {
  bakeryId: number;
};

const ReviewSection = ({ bakeryId }: ReviewSectionProps) => {
  const { data: bakeryData, error: bakeryError } = useGetBakery(bakeryId);
  const { data: bakeryMenuData, error: bakeryMenuError } =
    useGetBakeryMenuReivew(bakeryId, 1, 10);

  if (!bakeryMenuData || !bakeryData) return <div>Loading...</div>;
  if (bakeryMenuError || bakeryError) return <div>Error</div>;

  return (
    <Container>
      <Section>
        <BakeryRating
          userName={'소빵이'}
          bakeryId={bakeryData.bakeryId}
          bakeryName={bakeryData.bakeryName}
          personalRating={bakeryData.personalRating}
          ratingCount={bakeryData.ratingCount}
          avgRating={bakeryData.avgRating}
        />
      </Section>

      <Section className={'grow'}>
        <SectionHeader>
          <Title>
            리뷰 <b>{bakeryMenuData.numberOfElements}</b>
          </Title>
          <AddButtonStyle styleType={'primary'} rounded size="small">
            리뷰 작성
          </AddButtonStyle>
        </SectionHeader>
        <ReviewCardList reviews={bakeryMenuData.content} />
      </Section>
    </Container>
  );
};

export default ReviewSection;

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
