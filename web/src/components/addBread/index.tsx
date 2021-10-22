import styled from '@emotion/styled';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import MoreAdd from './MoreAdd';
import StartAdd from './StartAdd';

export interface Review {
  name: string;
  price: number;
  text: string;
  star: number;
}

interface BreadsReview {
  [key: number]: Review;
}

const initialStar = [0, 0, 0, 0, 0];

const initialSingleReview = {
  name: '',
  price: 0,
  text: '',
  star: 0,
};

const initialBreadsReview = {};

const AddBread = () => {
  const [progress, setProgress] = useState(1);
  const [stars, setStars] = useState<number[]>(initialStar);
  const [breadsReview, setBreadsReview] =
    useState<BreadsReview>(initialBreadsReview);
  const [singleReview, setSingleReview] = useState<Review>(initialSingleReview);

  const editScore = (clickedIndex: number) => {
    setStars((stars) =>
      stars.map((_, i) => {
        if (clickedIndex < i) return 0;
        return 1;
      })
    );
  };

  const editContent = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSingleReview({
      ...singleReview,
      [name]: value,
    });
  };

  useEffect(() => {
    setSingleReview({
      ...singleReview,
      star: stars.reduce((acc, cur) => acc + cur, 0),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stars]);

  useEffect(() => {
    setBreadsReview({
      ...breadsReview,
      [progress]: singleReview,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleReview]);

  const initializeSingleReview = () => {
    setStars(initialStar);
    setSingleReview(initialSingleReview);
  };

  const nextProgress = () => {
    setProgress((prev) => prev + 1);
    initializeSingleReview();
    console.log(breadsReview);
  };

  return (
    <>
      {progress === 1 && <StartAdd {...{ stars, editScore, editContent }} />}
      {progress >= 2 && (
        <MoreAdd
          {...{
            progress,
            stars,
            singleReview,

            editScore,
            editContent,
          }}
        />
      )}
      <BtnWrapper>
        <Btn bg={'#FFF1EC'} onClick={nextProgress}>
          + 다른 빵 리뷰 추가
        </Btn>
        <Btn bg={'#FF6E40'}>확인</Btn>
      </BtnWrapper>
    </>
  );
};

export default AddBread;

const BtnWrapper = styled.div`
  width: 100%;
`;

const Btn = styled.button<{ bg: string }>`
  width: 100%;
  display: block;
  background-color: ${({ bg }) => (bg ? `${bg}` : `white`)};
  border-radius: 0.5rem;
  border: none;
  padding: 1rem 0;

  &:first-child {
    margin-bottom: 8px;
  }
`;
