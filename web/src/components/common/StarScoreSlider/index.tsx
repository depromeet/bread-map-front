import React from 'react';
import styled from '@emotion/styled';
import GrayStar from '@/components/icons/GrayStar';
import OrangeStar from '@/components/icons/OrangeStar';
import useSlider from './useSlider';

type StarScoreSliderProps = {
  submitScore?: (score: number) => void;
};

const StarScoreSlider = ({ submitScore }: StarScoreSliderProps) => {
  const ref = React.useRef(null);
  const { value } = useSlider(ref);
  const [score, setScore] = React.useState(0);

  const clickStar = React.useCallback(() => {
    const persent = Math.round(value * 100);
    if (persent === 0) return;

    const pos = Math.floor(persent / 20) + 1;
    if (score != pos) setScore(pos);
  }, [value, score]);

  React.useEffect(() => {
    clickStar();
  }, [clickStar]);

  React.useEffect(() => {
    if (submitScore) submitScore(score);
  }, [score, submitScore]);

  const renderStar = React.useCallback(() => {
    return Array(5)
      .fill(0)
      .map((_, i) =>
        i < score ? <OrangeStar key={i} /> : <GrayStar key={i} />
      );
  }, [score]);

  return (
    <StarWrapper>
      <FiveStars ref={ref}>{renderStar()}</FiveStars>
    </StarWrapper>
  );
};

export default StarScoreSlider;

const StarWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const FiveStars = styled.div``;
