import React from 'react';
import styled from '@emotion/styled';
import { LeftArrow } from '@/components/icons';
import CategoryCard from './CategoryCard';

interface CategorySideProps {
  isCategorySideOpen: boolean;
  closeCategorySide: () => void;
}

const MOCK_DATA = [
  {
    name: '식사빵',
    checked: false,
  },
  {
    name: '비건/키토 베이킹',
    checked: false,
  },
  {
    name: '구움과자류',
    checked: false,
  },
  {
    name: '파이/타르트',
    checked: false,
  },
  {
    name: '케이크',
    checked: false,
  },
  {
    name: '크림빵',
    checked: false,
  },
  {
    name: '도넛',
    checked: false,
  },
  {
    name: '추억의 빵',
    checked: false,
  },
  {
    name: '과자류',
    checked: false,
  },
  {
    name: '기타',
    checked: false,
  },
  {
    name: '쿠키',
    checked: false,
  },
  {
    name: '크로와상',
    checked: false,
  },
];

const CategorySide = ({
  isCategorySideOpen,
  closeCategorySide,
}: CategorySideProps) => {
  const Cards = MOCK_DATA.map((category, idx) => {
    return (
      <CategoryCard key={idx} name={category.name} checked={category.checked} />
    );
  });

  return (
    <Container className={isCategorySideOpen ? 'open' : ''}>
      <Header>
        <LeftArrow onClick={closeCategorySide} />
        <div>빵종류 모아보기</div>
      </Header>
      <Contents>
        <ContentsTitle>
          모든 먹부림에는
          <br />
          주종목이 있죠!
        </ContentsTitle>
        <CardsWrapper>{Cards}</CardsWrapper>
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
  }
`;

const Contents = styled.div``;

const ContentsTitle = styled.div`
  font-size: 1.3rem;
  margin: 1em 0;
  font-weight: 700;
  line-height: 1.3;
`;

const CardsWrapper = styled.div`
  display: grid;
  overflow: scroll;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5em;
`;
