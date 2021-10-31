import React from 'react';
import styled from '@emotion/styled';
import breadCategory, { CategoryInfo } from '@/constants/breadCategory';

interface CategoriesProps {
  selectedCategory: CategoryInfo[] | null;
  onClickCategory: (category: CategoryInfo) => void;
}

const Categories = ({ selectedCategory, onClickCategory }: CategoriesProps) => {
  const isSelected = (id: number): boolean => {
    if (selectedCategory === null) return false;
    return selectedCategory.some((s) => s.id === id);
  };

  return (
    <CategoriesWrapper>
      {Object.values(breadCategory).map((value) => (
        <Category
          key={value.id}
          onClick={() => onClickCategory(value)}
          isSelected={isSelected(value.id)}
        >
          <value.icon />
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
  background-color: ${({ isSelected }) => (isSelected ? '#FFF1EC' : '#fff')};
  border-color: ${({ isSelected, theme }) =>
    isSelected ? '#FF6E40' : theme.color.gray300};
  border-width: 1px;
  border-style: solid;

  &::-webkit-scrollbar {
    display: none;
  }

  > span {
    color: ${({ isSelected }) => (isSelected ? '#FF6E40' : '#bdbdbd')};
    margin-top: 0.5rem;
  }

  path {
    fill: ${({ isSelected }) => (isSelected ? '#FF6E40' : '#bdbdbd')};
  }
`;
