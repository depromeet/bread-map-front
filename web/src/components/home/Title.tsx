import * as React from 'react';
import styled from '@emotion/styled';

const Title: React.FC = () => {
  return (
    <Base>
      Welcome to <a href={'https://nextjs.org'}>Next.js!</a>
    </Base>
  );
};

export default Title;

const Base = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
`;

const Anchor = styled.a`
  color: #0070f3;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
  }
`;
