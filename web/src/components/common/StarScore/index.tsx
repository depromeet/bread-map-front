import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import GrayStar from '@/components/icons/GrayStar';
import GradientStar from '@/components/icons/GradientStar';
import OrangeStar from '@/components/icons/OrangeStar';

type StarScoreProps = {
  score: number;
} & React.HTMLAttributes<HTMLDivElement>;

const StarScore = ({ score, ...props }: StarScoreProps) => (
  <Container percent={40} {...props}>
    {Array(5)
      .fill(0)
      .map((_, idx) => {
        let check = score - idx;
        if (check >= 1) return <OrangeStar key={idx} />;
        if (check <= 0) return <GrayStar key={idx} />;

        return <GradientStar key={idx} start={check} />;
      })}
  </Container>
);
export default StarScore;

const Container = styled.div<{ percent: number }>`
  width: 100%;

  svg {
    width: 1em;
    height: 1em;
  }
`;
