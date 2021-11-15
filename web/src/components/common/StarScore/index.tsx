import React from 'react';
import styled from '@emotion/styled';
import GrayStar from '@/components/icons/GrayStar';
import OrangeStar from '@/components/icons/OrangeStar';
import useSlider from './useSlider';

const StarScore = () => {
  const ref = React.useRef(null);
  const { isSliding, value, pos, length } = useSlider(ref);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    clickStar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const clickStar = () => {
    const percent = Math.round(value * 100);
    if (percent === 0) return;
    else if (percent >= 0 && percent < 16) setScore(1);
    else if (percent >= 16 && percent < 36) setScore(2);
    else if (percent >= 36 && percent < 56) setScore(3);
    else if (percent >= 56 && percent < 75) setScore(4);
    else setScore(5);
  };

  const renderStar = () => {
    const arr = [...Array(score).fill(1), ...Array(5 - score).fill(0)];
    return arr.map((item, i) =>
      item === 1 ? <OrangeStar key={i} /> : <GrayStar key={i} />
    );
  };

  return (
    <StarWrapper ref={ref}>
      <ScoreText>{score}</ScoreText>
      <FiveStars left={pos}>{renderStar()}</FiveStars>
    </StarWrapper>
  );
};

export default StarScore;

const StarWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 160px;
`;

const ScoreText = styled.p`
  text-align: center;
`;

const FiveStars = styled.div<{ left: number }>`
  position: absolute;
  left: ${({ left }) => (left ? left : 0)};
`;
