import React from 'react';
import styled from '@emotion/styled';
import { CategoryList } from '@/components/common';
import type { BreadCategoryItem } from '@/constants/breadCategories';

interface CategorySelectProps {
  setIsCategoryPage: React.Dispatch<React.SetStateAction<boolean>>;
  selectedCategory: BreadCategoryItem[] | null;
  onClickCategory: (categoryInfo: BreadCategoryItem) => void;
  onCancelCategory: () => void;
  setIsOpenFirst: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategorySelect = ({
  setIsCategoryPage,
  selectedCategory,
  onClickCategory,
  onCancelCategory,
  setIsOpenFirst,
}: CategorySelectProps) => {
  const onClickOk = () => {
    setIsCategoryPage(false);
  };

  const onClickCancel = () => {
    onCancelCategory();
    setIsCategoryPage(false);
  };

  React.useEffect(() => {
    setIsOpenFirst(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CategoryList selectedItems={[]} onChange={() => {}} />
      <BtnWrapper>
        <CancelBtn onClick={onClickCancel}>취소</CancelBtn>
        <OkBtn onClick={onClickOk}>확인</OkBtn>
      </BtnWrapper>
    </>
  );
};

export default CategorySelect;

const BtnWrapper = styled.div`
  display: flex;

  position: absolute;
  bottom: 1rem;
  left: 0;
  padding: 0 1.25rem;
  width: 100%;
`;

const CancelBtn = styled.button`
  color: ${({ theme }) => theme.color.gray700};
  border: ${({ theme }) => `1px solid ${theme.color.gray300}`};
  background: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
  padding: 1rem 0;
  width: 100%;
  margin: 0 5px;
`;

const OkBtn = styled.button`
  color: ${({ theme }) => theme.color.white};
  border: ${({ theme }) => `1px solid ${theme.color.primary500}`};
  background: ${({ theme }) => theme.color.primary500};
  border-radius: 0.5rem;
  padding: 1rem 0;
  width: 100%;
  margin: 0 5px;
`;
