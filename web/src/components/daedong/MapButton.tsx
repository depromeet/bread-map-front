import React from 'react';
import styled from '@emotion/styled';

const MapButton = ({ ...props }: React.HTMLAttributes<HTMLButtonElement>) => {
  return <Button {...props} />;
};

export default MapButton;

const Button = styled.button`
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  padding: 0.625rem;
  border: none;
  box-shadow: 0 3px 3px ${({ theme }) => theme.color.gray300};

  &::after {
    display: block;
    content: '';
    padding-bottom: 100%;
  }
`;
