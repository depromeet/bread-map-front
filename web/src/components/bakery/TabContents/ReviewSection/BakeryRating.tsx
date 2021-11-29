/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from '@emotion/styled';
import { UserCircle } from '@/components/icons';
import StarScoreSlider from '@/components/common/StarScoreSlider';
import { Button, StarScore } from '@/components/common';
import { mutateGetBakery } from '@/remotes/hooks/useGetBakery';
import { requestModifyBakeryRating } from '@/remotes/network/bakery';

type StoreRatingProps = {
  bakeryId: number;
  userName: string;
  userImage?: string;
  bakeryName: string;
  personalRating: number;
  ratingCount: number;
  avgRating: number;
};

const StoreRating = ({
  bakeryId,
  userName,
  userImage,
  bakeryName,
  personalRating,
  ratingCount,
  avgRating,
}: StoreRatingProps) => {
  const [submitFlag, setSubmitFlag] = React.useState(
    isNaN(personalRating) || personalRating === 0 ? false : true
  );

  const submitScore = (score: number) => {
    if (score === 0) return;
    if (!submitFlag) {
      requestModifyBakeryRating({ bakeryId, rating: score });
      mutateGetBakery(bakeryId);
    }
    setSubmitFlag(true);
  };

  return (
    <Container>
      {!submitFlag ? (
        <>
          <img
            src={userImage || '/images/noProfileImg.png'}
            alt={'noprofile'}
          />
          <Title>
            <b>{userName}</b>님 빵집 어떠셨어요?
          </Title>
          <StarScoreSlider submitScore={submitScore} />
        </>
      ) : (
        <div>
          <Title>{bakeryName}</Title>
          <ReviewCount>
            <UserCircle />
            {ratingCount}명이 평가했어요!
          </ReviewCount>
          <AvgRating>{avgRating.toFixed(1)}</AvgRating>

          <StarScore score={avgRating} />
        </div>
      )}
    </Container>
  );
};

export default StoreRating;

const Title = styled.h3`
  margin: 12px 0;
  b {
    color: ${({ theme }) => theme.color.primary500};
  }
`;

const AvgRating = styled.div`
  font-size: 3rem;
  margin: 16px;
  font-weight: bold;
`;

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReviewCount = styled.div`
  color: ${({ theme }) => theme.color.gray500};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-top: 2px;
    fill: ${({ theme }) => theme.color.gray500};
  }
`;

const ReviewSubmitButton = styled(Button)`
  width: auto;
  margin-top: 18px;
`;
