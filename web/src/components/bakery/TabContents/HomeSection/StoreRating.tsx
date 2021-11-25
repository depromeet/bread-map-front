/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from '@emotion/styled';
import { UserCircle } from '@/components/icons';
import StarScore from '@/components/common/StarScoreSlider';
import { Button } from '@/components/common';

type StoreRatingProps = {
  userName: string;
  userImage?: string;
  bakeryName: string;
  personalRating: number;
  ratingCount: number;
  avgRating: number;
};

const StoreRating = ({
  userName,
  userImage,
  bakeryName,
  personalRating,
  ratingCount,
  avgRating,
}: StoreRatingProps) => {
  const [score, setScore] = React.useState(0);
  //TODO score FETCH;

  return (
    <Container>
      {isNaN(personalRating) ? (
        <>
          <img
            src={userImage || '/images/noProfileImg.png'}
            alt={'noprofile'}
          />
          <Title>
            <b>{userName}</b>님 빵집 어떠셨어요?
          </Title>
          <StarScore submitScore={setScore} />
          {score > 0 && (
            <ReviewSubmitButton size={'small'}>평가하기</ReviewSubmitButton>
          )}
        </>
      ) : (
        <div>
          <Title>{bakeryName}</Title>
          <ReviewCount>
            <UserCircle />
            {ratingCount}명이 평가했어요!
          </ReviewCount>
          <AvgRating>{avgRating}</AvgRating>

          <div> star</div>
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
