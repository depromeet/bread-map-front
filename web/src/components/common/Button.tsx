import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  type?: 'none' | 'primary' | 'secondery';
  size?: 'big' | 'large' | 'medium' | 'small' | 'tiny';
}

const Button = ({
  rounded = false,
  type = 'primary',
  size = 'medium',
  ...props
}: ButtonProps) => (
  <ButtonStyle
    data-size={size}
    data-rounded={rounded}
    className={type}
    {...props}
  />
);

export default Button;

const DefaultButtonStyle = css`
  font-size: 14px;
  &[data-size='big'] {
    height: 52px;
    font-size: 16px;
  }
  &[data-size='large'] {
    height: 44px;
  }
  &[data-size='medium'] {
    height: 40px;
  }
  &[data-size='small'] {
    height: 36px;
  }
  &[data-size='tiny'] {
    height: 32px;
    font-size: 12px;
  }
  &[data-rounded='true'] {
    border-radius: 1.5rem;
  }
  border-radius: '.4rem';
  font-weight: 700;
  width: 100%;
  padding: 0 15px;

  &:focus {
    outline: none;
  }
`;

const ButtonStyle = styled.button`
  ${DefaultButtonStyle};

  &.primary {
    background: ${({ theme }) => theme.color.primary500};
    border: 1px solid ${({ theme }) => theme.color.primary500};
    color: ${({ theme }) => theme.color.white};

    &:disabled {
      background: ${({ theme }) => theme.color.gray400};
      border: 1px solid ${({ theme }) => theme.color.gray400};
      color: ${({ theme }) => theme.color.white};
    }
  }

  &.secondery {
    background: ${({ theme }) => theme.color.primary100};
    border: 1px solid ${({ theme }) => theme.color.primary100};
    color: ${({ theme }) => theme.color.primary500};

    &:disabled {
      background: ${({ theme }) => theme.color.gray400};
      border: 1px solid ${({ theme }) => theme.color.gray400};
      color: ${({ theme }) => theme.color.white};
    }
  }

  &.none {
    background: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.gray300};
    color: ${({ theme }) => theme.color.gray700};

    &:disabled {
      color: ${({ theme }) => theme.color.gray700}4d;
    }
  }
`;
