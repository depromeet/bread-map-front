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
  padding: 10px;
  border: none;
  box-shadow: 0 3px 3px ${({ theme }) => theme.color.gray300};

  &::after {
    display: block;
    content: '';
    padding-bottom: 100%;
  }

  &.black {
    position: relative;
    background: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};

    svg.white {
      fill: ${({ theme }) => theme.color.white};
      path {
        fill: ${({ theme }) => theme.color.white};
      }
    }

    &::before {
      content: attr(data-count);
      border-radius: 9999px;
      font-size: 12px;
      padding: 2px;
      width: 20px;
      height: 20px;
      position: absolute;
      top: -5px;
      left: -5px;
      background-color: ${({ theme }) => theme.color.primary500};
    }
  }
`;
