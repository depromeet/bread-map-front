import React from 'react';
import styled from '@emotion/styled';
import bakeryBaseCategory, {
  BakeryBaseCategoryInfo,
} from '@/constants/bakeryBaseCategories';

interface CategoriesProps {
  selectedCategory?: BakeryBaseCategoryInfo['category'][] | null;
}

const BakeryCategories = ({ selectedCategory }: CategoriesProps) => (
  <CategoriesWrapper>
    {Object.values(bakeryBaseCategory)
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
  max-width: 550px;
  list-style: none;
  margin: 0 auto;
  gap: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Card = styled.li`
  border-radius: 8px;
  width: 100%;
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
