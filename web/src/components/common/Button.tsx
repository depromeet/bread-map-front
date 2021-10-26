import * as React from 'react';
import styled from '@emotion/styled';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  bgColor?: 'none' | 'primary' | 'secondery';
  size?: 'big' | 'large' | 'medium' | 'small' | 'tiny';
}

const Button = ({
  children,
  rounded = false,
  bgColor = 'primary',
  size = 'medium',
  ...props
}: ButtonProps) => {
  switch (bgColor) {
    case 'none':
      return (
        <NoneButtonStyle size={size} rounded={rounded} {...props}>
          {children}
        </NoneButtonStyle>
      );
    case 'secondery':
      return (
        <SeconderyButtonStyle size={size} rounded={rounded} {...props}>
          {children}
        </SeconderyButtonStyle>
      );
    default:
      return (
        <PrimaryButtonStyle size={size} rounded={rounded} {...props}>
          {children}
        </PrimaryButtonStyle>
      );
  }
};

export default Button;

const DefaultButtonStyle = styled.button<ButtonProps>`
  height: ${({ size }) =>
    size === 'big'
      ? '52px'
      : size === 'large'
      ? '44px'
      : size === 'medium'
      ? '40px'
      : size === 'small'
      ? '36px'
      : '32px'};
  font-size: ${({ size }) =>
    size === 'big' ? '16px' : size === 'tiny' ? '12px' : '14px'};
  border-radius: ${({ rounded }) => (rounded ? '1.5rem' : '.4rem')};
  font-weight: 700;
  width: 100%;
  padding: 0 15px;

  &:focus {
    outline: none;
  }
`;

const PrimaryButtonStyle = styled(DefaultButtonStyle)`
  background: ${({ theme }) => theme.color.primary500};
  border: 1px solid ${({ theme }) => theme.color.primary500};
  color: ${({ theme }) => theme.color.white};

  &:disabled {
    background: ${({ theme }) => theme.color.gray400};
    border: 1px solid ${({ theme }) => theme.color.gray400};
    color: ${({ theme }) => theme.color.white};
  }
`;

const SeconderyButtonStyle = styled(DefaultButtonStyle)`
  background: ${({ theme }) => theme.color.primary100};
  border: 1px solid ${({ theme }) => theme.color.primary100};
  color: ${({ theme }) => theme.color.primary500};

  &:disabled {
    background: ${({ theme }) => theme.color.gray400};
    border: 1px solid ${({ theme }) => theme.color.gray400};
    color: ${({ theme }) => theme.color.white};
  }
`;

const NoneButtonStyle = styled(DefaultButtonStyle)`
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray300};
  color: ${({ theme }) => theme.color.gray700};

  &:disabled {
    color: ${({ theme }) => theme.color.gray700}4d;
  }
`;
