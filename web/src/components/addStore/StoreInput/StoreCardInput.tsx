import React from 'react';
import styled from '@emotion/styled';
import { Categories } from '@/components/common/CategoryList';
import storeBaseInfo from '@/constants/storeBaseInfo';
import { StoreInputBaseProps } from './StoreInput';
import { CategoryInfo } from '@/constants/breadCategory';

type StoreMultiInputProps = Omit<StoreInputBaseProps, 'changeHandler'> & {
  changeHandler: (categoryInfo: CategoryInfo) => void;
  value: CategoryInfo[] | undefined;
};

const StoreCardInput = ({
  isRequired = false,
  label,
  alertText,
  isSubmit = false,
  value,
  changeHandler,
}: StoreMultiInputProps) => (
  <Row>
    <Text isRequired={isRequired}>{label}</Text>
    {isSubmit && isRequired && value?.length === 0 && (
      <AlertText>{alertText}</AlertText>
    )}
    <Categories
      categortKind={storeBaseInfo}
      selectedCategory={value}
      onClickCategory={changeHandler}
    />
  </Row>
);

export default StoreCardInput;

const AlertText = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color.primary500};
`;

const Row = styled.div`
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
