import React from 'react';
import styled from '@emotion/styled';
import storeBaseCategory, {
  StoreBaseCategoryInfo,
} from '@/constants/storeBaseCategories';

interface CategoriesProps {
  selectedCategory?: StoreBaseCategoryInfo['category'][] | null;
}

const BakeryCategories = ({ selectedCategory }: CategoriesProps) => (
  <CategoriesWrapper>
    {Object.values(storeBaseCategory)
      .filter((value) => selectedCategory?.includes(value.category))
      .map((value) => (
        <Category key={value.category}>
          <value.icon />
          <span>{value.text}</span>
        </Category>
      ))}
  </CategoriesWrapper>
);

export default BakeryCategories;

const CategoriesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5em;
`;

const Category = styled.div`
  border-radius: 0.5em;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.8em;
  justify-content: center;
  text-align: center;
  align-items: center;
  background: ${({ theme }) => theme.color.gray50};
  border: 1px solid ${({ theme }) => theme.color.gray50};

  &::-webkit-scrollbar {
    display: none;
  }

  > span {
    color: ${({ theme }) => theme.color.primary500};
    margin-top: 0.5rem;
  }

  svg {
    path {
      fill: ${({ theme }) => theme.color.primary500};
    }
    &.nofill {
      path {
        stroke: ${({ theme }) => theme.color.primary500};
        fill: none;
      }
    }
  }
`;
