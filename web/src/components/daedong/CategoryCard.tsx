import React from 'react';
import styled from '@emotion/styled';
import { Check } from '@/components/icons';

interface CategortCardProps {
  name: string;
  checked: boolean;
}

const CategoryCard = ({ name, checked }: CategortCardProps) => {
  const [isCheck, setCheck] = React.useState(checked);

  return (
    <Container
      onClick={() => {
        setCheck(!isCheck);
      }}
      id={name}
    >
      {isCheck ? <Check /> : <div>{name}</div>}
    </Container>
  );
};

export default CategoryCard;

const Container = styled.div`
  border-radius: 0.5em;
  width: 100%;
  display: flex;
  padding: 0.8em;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
  background: ${({ theme }) => theme.color.gray300};

  &::-webkit-scrollbar {
    display: none;
  }

  &::after {
    display: block;
    content: '';
    padding-bottom: 100%;
  }
`;
