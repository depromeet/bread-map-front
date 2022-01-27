import React from 'react';
import styled from '@emotion/native';
import { StarGradientIcon, StarIcon } from '../icons';

type TextPosition = 'top' | 'right';

interface RatingProps {
  rating: number;
  textPosition: TextPosition | 'none';
  size?: number;
}

const Rating: React.FC<RatingProps> = ({ rating, textPosition, size, ...props }) => {
  const starSize = size ?? 18;

  return (
    <Container percent={40} textPosition={textPosition} {...props}>
      {textPosition === 'top' && <TopScore>{rating}</TopScore>}
      <Stars>
        {Array(5)
          .fill(0)
          .map((_, idx) => {
            let check = rating - idx;
            if (check >= 1) {
              return <StarIcon width={starSize} height={starSize} fillColor={'orange'} key={idx} />;
            }
            if (check <= 0) {
              return <StarIcon width={starSize} height={starSize} fillColor={'gray'} key={idx} />;
            }

            return <StarGradientIcon width={starSize} height={starSize} start={check} key={idx} />;
          })}
      </Stars>
      {textPosition === 'right' && <RightScore>{rating}</RightScore>}
    </Container>
  );
};

export default Rating;

const Container = styled.View<{ percent: number; textPosition: TextPosition | 'none' }>`
  width: 100%;
  align-items: center;
  flex-direction: ${({ textPosition }) => (textPosition === 'right' ? 'row' : 'column')};
`;

const Stars = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TopScore = styled.Text`
  font-size: 48px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
`;

const RightScore = styled.Text`
  font-size: 14px;
  margin-left: 4px;
  color: ${({ theme }) => theme.color.black};
`;
