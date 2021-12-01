import React from 'react';
import styled from '@emotion/styled';
import { categoryItems, BreadCategoryItem } from '@/constants/breadCategories';

interface CategoriesProps {
  selectedCategory?: BreadCategoryItem[] | null;
  onClickCategory: (category: BreadCategoryItem) => void;
}

const Categories = ({ selectedCategory, onClickCategory }: CategoriesProps) => {
  const isSelected = (id: string): boolean => {
    if (!selectedCategory) return false;
    return selectedCategory.some((s) => s.category === id);
  };

  return (
    <CategoriesWrapper>
      {Object.values(categoryItems).map((value, idx) => (
        <Category
          key={idx}
          onClick={() => onClickCategory(value)}
          isSelected={isSelected(value.category)}
        >
          <value.Icon />
          <span>{value.text}</span>
        </Category>
      ))}
    </CategoriesWrapper>
  );
};

export default Categories;

const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5em;
`;

const Category = styled.div<{ isSelected: boolean }>`
  border-radius: 0.5em;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.8em;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primary100 : theme.color.white};
  border-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primary500 : theme.color.gray300};
  border-width: 1px;
  border-style: solid;

  &::-webkit-scrollbar {
    display: none;
  }

  > span {
    color: ${({ isSelected, theme }) =>
      isSelected ? theme.color.primary500 : theme.color.gray400};
    margin-top: 0.5rem;
  }

  svg {
    path {
      fill: ${({ isSelected, theme }) =>
        isSelected ? theme.color.primary500 : theme.color.gray400};
    }
    &.nofill {
      path {
        stroke: ${({ isSelected, theme }) =>
          isSelected ? theme.color.primary500 : theme.color.gray400};
        fill: none;
      }
    }
  }
`;
