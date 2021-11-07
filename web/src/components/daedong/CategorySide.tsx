import React from 'react';
import styled from '@emotion/styled';
import { ArrowPrev, Close } from '@/components/icons';
import { useAtom } from 'jotai';
import {
  breadMapCategorySlideAtom,
  breadMapSelectedCategotyItem,
} from '@/store';
import { Categories, useCategories } from '../common/CategoryList';

const CategorySide = () => {
  const [mapCategories, setMapCategories] = useAtom(
    breadMapSelectedCategotyItem
  );
  const { selectedCategory, onClickCategory } = useCategories(
    true,
    mapCategories
  );
  const [isOpen, setIsOpen] = useAtom(breadMapCategorySlideAtom);

  return (
    <Container className={isOpen ? 'open' : ''}>
      <Header>
        <ArrowPrev
          onClick={() => {
            setMapCategories(selectedCategory);
            setIsOpen(false);
          }}
        />
        <div>빵종류 모아보기</div>
        <Close
          width={18}
          height={18}
          onClick={() => {
            setMapCategories(selectedCategory);
            setIsOpen(false);
          }}
        />
      </Header>
      <Contents>
        <ContentsTitle>
          모든 먹부림에는
          <br />
          주종목이 있죠!
        </ContentsTitle>

        <Categories
          selectedCategory={selectedCategory}
          onClickCategory={onClickCategory}
        />
      </Contents>
    </Container>
  );
};

export default CategorySide;

const Container = styled.aside`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  padding: 0.8em;
  background: ${({ theme }) => theme.color.white};
  min-height: 100vh;
  z-index: 100;
  top: 0;
  right: 0;
  transform: translateX(100%);
  transition: transform 0.5s ease-in-out;

  &.open {
    transform: translateX(0);
  }
`;

const Header = styled.div`
  display: grid;
  padding: 0.3em 0;
  grid-template-columns: 50px 1fr 50px;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  align-items: center;
  text-align: center;

  svg {
    cursor: pointer;

    &:first-child {
      justify-self: flex-start;
    }
    &:last-child {
      justify-self: flex-end;
    }
  }
`;

const Contents = styled.div`
  overflow: scroll;
`;

const ContentsTitle = styled.div`
  font-size: 1.3rem;
  margin: 1em 0;
  font-weight: 700;
  line-height: 1.3;
`;
