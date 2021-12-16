import React from 'react';
import styled from '@emotion/styled';
import { GrayStar, OrangeStar } from '@/components/icons';

interface ScoreInputProps {
  rating: number;
  editScore: (rating: number) => void;
}

const ScoreInput = ({ rating, editScore }: ScoreInputProps) => {
  return (
    <>
      <Text>별점</Text>
      <StarArea>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <StarBtn key={i} onClick={() => editScore(i)}>
              {i <= rating ? <OrangeStar /> : <GrayStar />}
            </StarBtn>
          ))}
      </StarArea>
    </>
  );
};

export default ScoreInput;

const Text = styled.span<{ isRequired?: boolean }>`
  position: relative;
  display: inline-block;
  margin-bottom: 0.75rem;
  font-weight: bold;
  font-size: 0.87rem;
  color: ${({ theme }) => theme.color.gray800};
  &::before {
    content: '';
    position: absolute;
    right: -6px;
    top: -2px;
    width: 4px;
    height: 4px;
    background-color: ${({ theme }) => theme.color.primary500};
    border-radius: 50%;
    opacity: ${({ isRequired }) => (isRequired ? 1 : 0)};
  }
`;

const StarArea = styled.div`
  display: block;
`;

const StarBtn = styled.div`
  display: inline-block;
`;
