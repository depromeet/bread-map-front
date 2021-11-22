import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

//TODO button 타입 변경필요
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  type?: 'none' | 'primary' | 'secondery';
  styleType?: 'none' | 'primary' | 'secondery';
  size?: 'big' | 'large' | 'medium' | 'small' | 'tiny';
  disabled?: boolean;
}

const Button = ({
  rounded = false,
  type = 'primary',
  styleType = 'primary',
  size = 'medium',
  disabled = false,
  ...props
}: ButtonProps) => (
  <ButtonStyle
    data-size={size}
    data-rounded={rounded}
    data-type={styleType}
    className={`${type} ${props.className}`}
    disabled={disabled}
    {...props}
  />
);

export default Button;

const defaultButtonStyle = css`
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
    border-radius: 20px;
  }
  border-radius: 6px;
  font-weight: 700;
  width: 100%;
  padding: 0 15px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const ButtonStyle = styled.button`
  ${defaultButtonStyle};

  &[data-type='primary'],
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

  &[data-type='secondery'],
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

  &[data-type='none'],
  &.none {
    background: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.gray300};
    color: ${({ theme }) => theme.color.black};

    &:disabled {
      color: ${({ theme }) => theme.color.gray700}4d;
    }
  }
`;
