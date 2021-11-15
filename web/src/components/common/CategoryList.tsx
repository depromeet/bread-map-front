import * as React from 'react';
import styled from '@emotion/styled';
import { categoryItems } from '@/constants/breadCategories';
import type { BreadCategory } from '@/constants/breadCategories';

interface CategoryListProps {
  selectedItems: BreadCategory[];
  onChange: (item: BreadCategory) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  selectedItems,
  onChange,
}) => {
  return (
    <Base>
      {categoryItems.map(({ Icon, category, text }) => (
        <Item
          isSelected={selectedItems.find((el) => el === category) !== undefined}
          onClick={() => onChange(category)}
          key={category}
        >
          <Icon width={48} height={48} />
          <span>{text}</span>
        </Item>
      ))}
    </Base>
  );
};

export default CategoryList;

const Base = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  list-style: none;
  margin-block-start: 24px;
  margin-block-end: 0;
  padding-inline: 20px;
  height: calc(100% - 140px);
  overflow-y: auto;
`;

const Item = styled.li<{ isSelected: boolean }>`
  width: 100px;
  height: 100px;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primary100 : theme.color.white};
  border: 1px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.color.primary500 : theme.color.gray200};
  border-radius: 10px;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primary500 : theme.color.gray400};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    margin-top: 8px;
  }
`;
