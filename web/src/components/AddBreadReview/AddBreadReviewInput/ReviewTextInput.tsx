import React from 'react';
import styled from '@emotion/styled';

export interface ReviewTextInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  alertText?: string;
  isSubmit?: boolean;
}

const ReviewTextInput = ({
  required,
  label,
  alertText,
  isSubmit = false,
  onChange,
  ...props
}: ReviewTextInputProps) => {
  return (
    <>
      <Text isRequired={required}>{label}</Text>
      <Input {...props} onChange={onChange} autoComplete={'off'} />
      {isSubmit && !!!props.value && <AlertText>{alertText}</AlertText>}
    </>
  );
};

export default ReviewTextInput;

const AlertText = styled.p`
  font-size: 0.75rem;
  position: absolute;
  bottom: 0;
  margin: 0;
  transform: translateY(100%);
  color: ${({ theme }) => theme.color.primary500};
`;

const Text = styled.span<{ isRequired?: boolean }>`
  position: relative;
  display: inline-block;
  margin-bottom: 0.75rem;
  font-weight: bold;
  font-size: 0.87rem;
  color: ${({ theme }) => theme.color.gray800};

  &::before {
    content: '';
    position: absolute;
    right: -6px;
    top: -2px;
    width: 4px;
    height: 4px;
    background-color: ${({ theme }) => theme.color.primary500};
    border-radius: 50%;
    opacity: ${({ isRequired }) => (isRequired ? 1 : 0)};
  }
`;

const Input = styled.input`
  display: block;
  height: 2rem;
  width: 100%;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.color.gray600};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray400};
  }
  &:focus {
    outline: none;
  }
`;
