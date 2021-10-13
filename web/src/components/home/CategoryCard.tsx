import React from 'react';
import styled from '@emotion/styled';
import Check from '@assets/check.svg';

interface IProps {
  category: {
    name: string;
    checked: boolean;
  };
}

const CategoryCard = ({ category }: IProps) => {
  const [isCheck, setCheck] = React.useState(category.checked);

  return (
    <Container
      onClick={() => {
        setCheck(!isCheck);
      }}
    >
      {isCheck ? (
        <div>
          <Check />
        </div>
      ) : (
        <div>{category.name}</div>
      )}
    </Container>
  );
};

export default CategoryCard;

const Container = styled.div`
  border-radius: 0.5em;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
  background: ${({ theme }) => theme.color.gray};

  &::after {
    display: block;
    content: '';
    padding-bottom: 100%;
  }
`;
