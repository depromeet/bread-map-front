import * as React from 'react';
import styled from '@emotion/styled';

const Description: React.FC = () => {
  return (
    <Base>
      Get started by editing{' '}
      <Code>pages/index.js</Code>
    </Base>
  );
};

export default Description;

const Base = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

const Code = styled.code`
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;
