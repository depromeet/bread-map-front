import React from 'react';
import styled from '@emotion/styled';
import {
  Categories,
  useCategories,
} from '@/components/common/BreadCategoryList';
import { BreadCategory, categoryItems } from '@/constants/breadCategories';
import { Review } from '.';

interface CategorySelectProps {
  setIsCategoryPage: React.Dispatch<React.SetStateAction<boolean>>;
  setSingleReview: React.Dispatch<React.SetStateAction<Review>>;
  selected?: BreadCategory | null;
}

const CategorySelect = ({
  selected,
  setIsCategoryPage,
  setSingleReview,
}: CategorySelectProps) => {
  const initCategory = React.useMemo(() => {
    const item = categoryItems.find((item) => item.category === selected);
    return item ? [item] : [];
  }, [selected]);

  const { selectedCategory, onClickCategory } = useCategories(
    false,
    initCategory
  );

  const onClickOk = () => {
    setSingleReview((prev) => ({
      ...prev,
      categoryName: selectedCategory[0].category,
    }));
    setIsCategoryPage(false);
  };

  const onClickCancel = () => {
    setIsCategoryPage(false);
  };

  return (
    <CategoryLayout>
      <CategoryWrapper>
        <Categories
          selectedCategory={
            selectedCategory[0] ? [selectedCategory[0].category] : []
          }
          onClickCategory={onClickCategory}
        />
        <BtnWrapper>
          <CancelBtn onClick={onClickCancel}>취소</CancelBtn>
          <OkBtn onClick={onClickOk}>확인</OkBtn>
        </BtnWrapper>
      </CategoryWrapper>
    </CategoryLayout>
  );
};

export default CategorySelect;

const CategoryLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  height: 100%;
  width: 100%;
  z-index: 9;
`;

const CategoryWrapper = styled.div`
  padding: 0 20px;
`;

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
