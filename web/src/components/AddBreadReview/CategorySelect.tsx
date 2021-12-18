import React from 'react';
import styled from '@emotion/styled';
import {
  Categories,
  useCategories,
} from '@/components/common/BreadCategoryList';
import { BreadCategory, categoryItems } from '@/constants/breadCategories';
import { Review } from '.';
import { Button } from '../common';
import { ArrowPrev } from '../icons';

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
        <CategoryHeader>
          <ArrowPrev onClick={onClickCancel} />
          빵종류
        </CategoryHeader>
        <Categories
          selectedCategory={
            selectedCategory[0] ? [selectedCategory[0].category] : []
          }
          onClickCategory={onClickCategory}
        />
        <BtnWrapper>
          <Button styleType={'none'} onClick={onClickCancel}>
            취소
          </Button>
          <Button styleType={'primary'} onClick={onClickOk}>
            확인
          </Button>
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
  height: 100vh;
  overflow: scroll;
  width: 100%;
  z-index: 9;
`;

const CategoryWrapper = styled.div`
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px;
  height: 100%;
`;

const CategoryHeader = styled.div`
  position: sticky;
  padding: 16px 0;
  font-weight: bold;
  z-index: 9;
  background-color: ${({ theme }) => theme.color.white};
  top: 0;
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  text-align: center;
  svg {
    color: ${({ theme }) => theme.color.black};
    path {
      stroke: ${({ theme }) => theme.color.black};
    }
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  margin: auto 0 0;
  gap: 10px;
  width: 100%;
  padding-bottom: 16px;
`;
