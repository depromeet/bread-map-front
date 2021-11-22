/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from '@emotion/styled';
import { UserCircle } from '@/components/icons';

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
  return (
    <Container>
      {!isNaN(personalRating) ? (
        <>
          <img
            src={userImage || '/images/noProfileImg.png'}
            alt={'noprofile'}
          />
          <Title>
            <b>{userName}</b>님 빵집 어떠셨어요?
          </Title>
          <div>Select-Star</div>
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
