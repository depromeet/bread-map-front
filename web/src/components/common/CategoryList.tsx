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
          <div>
            <Icon width={48} height={48} />
            <span>{text}</span>
          </div>
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
  margin: 24px auto;
  padding: 0 20px;
  max-width: 550px;
  width: 100%;
  overflow-y: auto;
`;

const Item = styled.li<{ isSelected: boolean }>`
  position: relative;
  cursor: pointer;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primary100 : theme.color.white};
  border: 1px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.color.primary500 : theme.color.gray200};
  border-radius: 10px;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primary500 : theme.color.gray400};

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
  > div {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  span {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    margin-top: 8px;
  }
`;
