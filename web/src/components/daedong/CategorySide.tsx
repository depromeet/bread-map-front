import React from 'react';
import styled from '@emotion/styled';
import LeftArrow from '@assets/leftArrow.svg';
import CategoryCard from './CategoryCard';

interface IProps {
  isCategorySideOpen: boolean;
  closeCategorySide: () => void;
}

const MOCK_DATA = [
  {
    name: '크루아상',
    checked: false,
  },
  {
    name: '식빵',
    checked: false,
  },
  {
    name: '치아바타',
    checked: false,
  },
  {
    name: '에그타르트',
    checked: false,
  },
  {
    name: '앙버터',
    checked: false,
  },
  {
    name: '크로플',
    checked: false,
  },
  {
    name: '노밀가루',
    checked: false,
  },
  {
    name: '케이크',
    checked: false,
  },
];

const CategorySide = ({ isCategorySideOpen, closeCategorySide }: IProps) => {
  const Cards = MOCK_DATA.map((Category, idx) => {
    return <CategoryCard key={idx} category={Category} />;
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

const Container = styled.div`
  position: absolute;
  width: 100%;
  padding: 0.8em;
  background: ${({ theme }) => theme.color.background};
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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5em;
`;
