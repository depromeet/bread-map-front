import * as React from 'react';
import styled from '@emotion/styled';

const StartTitle: React.FC = () => {
  return (
    <Title>
      <span className={'highlight'}>어떤 빵</span>
      {'을\n'}
      먹었나요?
    </Title>
  );
};

export default StartTitle;

const Title = styled.p`
  margin: 0;
  white-space: pre;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;

  .highlight {
    color: ${({ theme }) => theme.color.primary500};
  }
`;
