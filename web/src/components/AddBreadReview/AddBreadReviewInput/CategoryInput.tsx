import React from 'react';
import styled from '@emotion/styled';
import { ArrowDown } from '@/components/icons';
import { Review } from '..';
import CategorySelect from '../CategorySelect';
import { BreadCategory } from '@/constants/breadCategories';

interface CategoryInputProps {
  isSubmitted: boolean;
  categoryName: BreadCategory | null;
  setCurrentReview: React.Dispatch<React.SetStateAction<Review>>;
}

const CategoryInput = ({
  isSubmitted,
  categoryName,
  setCurrentReview,
}: CategoryInputProps) => {
  const [isCategoryPage, setIsCategoryPage] = React.useState<boolean>(false);

  return (
    <>
      {isCategoryPage && (
        <CategorySelect
          setIsCategoryPage={setIsCategoryPage}
          selected={categoryName}
          setSingleReview={setCurrentReview}
        />
      )}
      <Text isRequired>빵 종류</Text>
      <SelectArea onClick={() => setIsCategoryPage(true)}>
        <SelectBreadBtn>
          {!!categoryName ? categoryName : '빵 종류 선택'}
        </SelectBreadBtn>
        <ArrowDown />
      </SelectArea>
      {isSubmitted && !categoryName && (
        <AlertText>빵 종류를 선택해주세요.</AlertText>
      )}
    </>
  );
};

export default CategoryInput;

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
const SelectArea = styled.div`
  position: relative;
  > svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
  }
`;

const SelectBreadBtn = styled.button`
  border: 1px solid ${({ theme }) => theme.color.gray200};
  background: ${({ theme }) => theme.color.gray200};
  width: 100%;
  border-radius: 8px;
  color: ${({ theme }) => theme.color.gray500};
  text-align: left;
  padding: 0.875rem;
`;

const AlertText = styled.p`
  font-size: 0.75rem;
  position: absolute;
  bottom: 0;
  margin: 0;
  transform: translateY(100%);
  color: ${({ theme }) => theme.color.primary500};
`;
