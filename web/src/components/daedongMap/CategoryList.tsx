import * as React from 'react';
import styled from '@emotion/styled';
import {
  BreadBeganKitoIcon,
  BreadCakeIcon,
  BreadCaneleIcon,
  BreadCookieIcon,
  BreadCreamIcon,
  BreadCroissantIcon,
  BreadDonutIcon,
  BreadHotdogIcon,
  BreadMacaronIcon,
  BreadMealIcon,
  BreadMemoryIcon,
  BreadPieTartIcon,
  BreadPretzelIcon,
} from '@/components/icons';
import type { Bread } from './types';

interface CategoryItem {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  item: Bread;
  text: string;
}

const categoryItems: CategoryItem[] = [
  {
    Icon: BreadMealIcon,
    item: '식사빵',
    text: '식사빵',
  },
  {
    Icon: BreadBeganKitoIcon,
    item: '비건/키토',
    text: '비건·키토',
  },
  {
    Icon: BreadCroissantIcon,
    item: '크로와상',
    text: '크로와상'
  },
  {
    Icon: BreadCaneleIcon,
    item: '구움과자류',
    text: '구움과자류',
  },
  {
    Icon: BreadCakeIcon,
    item: '케이크',
    text: '케이크'
  },
  {
    Icon: BreadPieTartIcon,
    item: '파이/타르트',
    text: '파이/타르트',
  },
  {
    Icon: BreadMacaronIcon,
    item: '마카롱',
    text: '마카롱',
  },
  {
    Icon: BreadDonutIcon,
    item: '도넛',
    text: '도넛',
  },
  {
    Icon: BreadCookieIcon,
    item: '쿠키',
    text: '쿠키',
  },
  {
    Icon: BreadCreamIcon,
    item: '크림빵',
    text: '크림빵',
  },
  {
    Icon: BreadPretzelIcon,
    item: '과자류',
    text: '과자류',
  },
  {
    Icon: BreadMemoryIcon,
    item: '추억의빵',
    text: '추억의 빵',
  },
  {
    Icon: BreadHotdogIcon,
    item: '기타',
    text: '기타',
  },
];

interface CategoryListProps {
  selectedItems: Bread[];
  onChange: (item: Bread) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  selectedItems,
  onChange,
}) => {
  return (
    <Base>
      {categoryItems.map(({
        Icon,
        item,
        text,
      }) => (
        <Item
          isSelected={selectedItems.find((el) => el === item) !== undefined}
          onClick={() => onChange(item)}
          key={item}
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

const Item = styled.li<{ isSelected: boolean; }>`
  width: 100px;
  height: 100px;
  background-color: ${({ isSelected, theme }) => isSelected
    ? theme.color.primary100
    : theme.color.white};
  border: 1px solid ${({ isSelected, theme }) => isSelected
    ? theme.color.primary500
    : theme.color.gray200};
  border-radius: 10px;
  color: ${({ isSelected, theme }) => isSelected 
    ? theme.color.primary500
    : theme.color.gray400};
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
