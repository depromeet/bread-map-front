import React from 'react';
import styled from '@emotion/styled';
import { BakeryBaseCategoryInfo } from '@/constants/bakeryBaseCategories';

export interface StoreTextAreaBaseProps {
  isRequired?: boolean;
  value: unknown;
  label: string;
  placeholder?: string;
  alertText?: string;
  isSubmit?: boolean;
  name: string;
  changeHandler?: (
    name: string,
    value: string | string[] | BakeryBaseCategoryInfo[] | null
  ) => void;
}

interface StoreTextAreaProps
  extends StoreTextAreaBaseProps,
    React.HTMLAttributes<HTMLTextAreaElement> {
  readOnly?: boolean;
  value: string | undefined;
}

const StoreTextArea = ({
  isRequired = false,
  label,
  alertText,
  isSubmit = false,
  changeHandler,
  ...props
}: StoreTextAreaProps) => {
  const { name, value, onChange } = props;
  const TextAreaChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) return onChange(e);
    else if (changeHandler) {
      e.target.style.height = 'auto';
      e.target.style.height = e.target.scrollHeight + 'px';
      changeHandler(name, e.currentTarget.value);
    }
  };

  return (
    <Row>
      <Text isRequired={isRequired}>{label}</Text>
      <TextArea
        {...props}
        onChange={TextAreaChangeHandler}
        autoComplete={'off'}
      />
      {!!!value && isSubmit && <AlertText>{alertText}</AlertText>}
    </Row>
  );
};

export default StoreTextArea;

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
  height: auto;

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

const TextArea = styled.textarea`
  display: block;
  min-height: 2rem;
  height: fit-content;
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
