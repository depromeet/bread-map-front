import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@/components/common';
import StoreRating from './StoreRating';
import ReviewCardList from '../HomeSection/ReviewCardList';
import { BakeryEntity } from '@/remotes/network/bakery/requestGetBakery';
import useGetBakeryMenuReivew from '@/remotes/hooks/useGetBakeryMenuReivew';
import { useRouter } from 'next/router';

type ReviewSectionProps = {
  bakeryData: BakeryEntity;
};

const ReviewSection = ({ bakeryData }: ReviewSectionProps) => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useGetBakeryMenuReivew(id ? +id : 0, 0, 10);

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <Container>
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
            리뷰 <b>{data.numberOfElements}</b>
          </Title>
          <AddButtonStyle styleType={'primary'} rounded size="small">
            리뷰 작성
          </AddButtonStyle>
        </SectionHeader>
        <ReviewCardList reviews={data.content} />
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
