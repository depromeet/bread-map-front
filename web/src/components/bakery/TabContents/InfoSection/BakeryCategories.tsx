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
        <Card key={value.category}>
          <div>
            <value.icon />
            <span>{value.text}</span>
          </div>
        </Card>
      ))}
  </CategoriesWrapper>
);

export default BakeryCategories;

const CategoriesWrapper = styled.ul`
  display: flex;
  padding: 0;
  width: 100%;
  list-style: none;
  margin: 0 auto;
  gap: 0.5em;
`;

const Card = styled.li`
  border-radius: 0.5em;
  width: 100%;
  max-width: 130px;
  position: relative;
  background: ${({ theme }) => theme.color.gray50};
  border: 1px solid ${({ theme }) => theme.color.gray50};

  &::-webkit-scrollbar {
    display: none;
  }

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  > div {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
  }
`;
