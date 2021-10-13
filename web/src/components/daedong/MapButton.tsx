import React from 'react';
import styled from '@emotion/styled';

const MapButton = ({ ...props }: React.HTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props} />;
};

export default MapButton;

const Button = styled.button`
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.textColor};
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  padding: 0.625rem;
  border: none;
  box-shadow: 0 3px 3px ${({ theme }) => theme.color.placeholder};

  &::after {
    display: block;
    content: '';
    padding-bottom: 100%;
  }
`;
