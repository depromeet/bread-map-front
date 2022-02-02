import React from 'react';
import styled from '@emotion/native';
import { StarGradientIcon, StarIcon } from '../Icons';

type TextPosition = 'top' | 'right';

type RatingProps = {
  rating: number;
  textPosition: TextPosition;
  size?: number;
};

const Rating: React.FC<RatingProps> = ({ rating, textPosition, size, ...props }) => (
  <Container textPosition={textPosition} {...props}>
    {textPosition === 'top' && <TopScore>{rating}</TopScore>}
    <Stars textPosition={textPosition}>
      {Array(5)
        .fill(0)
        .map((_, idx) => {
          let check = rating - idx;
          if (check >= 1) {
            return <StarIcon size={size} fillColor={'orange'} key={idx} />;
          }
          if (check <= 0) {
            return <StarIcon size={size} fillColor={'gray'} key={idx} />;
          }

          return <StarGradientIcon size={size} start={check} key={idx} />;
        })}
    </Stars>
    {textPosition === 'right' && <RightScore>{rating}</RightScore>}
  </Container>
);

export { Rating };

const Container = styled.View<{ textPosition: TextPosition }>`
  width: 100%;
  align-items: center;
  flex-direction: ${({ textPosition }) => (textPosition === 'right' ? 'row' : 'column')};
`;

const Stars = styled.View<{ textPosition: TextPosition }>`
  flex-direction: row;
  align-items: center;
  transform: ${({ textPosition }) => (textPosition === 'top' ? 'scale(1.3)' : 'scale(1)')};
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
