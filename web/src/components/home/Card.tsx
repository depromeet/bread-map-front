import * as React from 'react';
import styled from '@emotion/styled';

export interface CardProps {
  href: string;
  title: string;
  body: string;
}

const Card: React.FC<CardProps> = ({ href, title, body }) => {
  return (
    <Anchor href={href}>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Anchor>
  );
};

export default Card;

const Anchor = styled.a`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15 ease;
  width: 45%;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;

const Title = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`;

const Body = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
`;
