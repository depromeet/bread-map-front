import React from 'react';
import styled from '@emotion/styled';
import { StoreBaseCategoryInfo } from '@/constants/storeBaseCategories';

export interface StoreInputBaseProps {
  isRequired?: boolean;
  value: unknown;
  label: string;
  placeholder?: string;
  alertText?: string;
  isSubmit?: boolean;
  name: string;
  changeHandler?: (
    name: string,
    value: string | string[] | StoreBaseCategoryInfo[] | null
  ) => void;
}

interface StoreInputProps
  extends StoreInputBaseProps,
    React.HTMLAttributes<HTMLInputElement> {
  readOnly?: boolean;
  value: string | undefined;
}

const StoreInput = ({
  isRequired = false,
  label,
  alertText,
  isSubmit = false,
  changeHandler,
  ...props
}: StoreInputProps) => {
  const { name, value, onChange } = props;
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) return onChange(e);
    else if (changeHandler) return changeHandler(name, e.currentTarget.value);
  };

  return (
    <Row>
      <Text isRequired={isRequired}>{label}</Text>
      <Input {...props} onChange={inputChangeHandler} autoComplete={'off'} />
      {!!!value && isSubmit && <AlertText>{alertText}</AlertText>}
    </Row>
  );
};

export default StoreInput;

const AlertText = styled.p`
  font-size: 0.75rem;
  position: absolute;
  bottom: 0;
  margin: 0;
  transform: translateY(100%);
  color: ${({ theme }) => theme.color.primary500};
`;

const Row = styled.div`
  position: relative;
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 4.5rem;
  }
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
    background-color: #ff6e40;
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
