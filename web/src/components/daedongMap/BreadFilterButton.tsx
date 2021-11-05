import * as React from 'react';
import styled from '@emotion/styled';
import { Bread } from '@/components/icons';

const BreadFilterButton: React.FC = () => {
  return (
    <Button>
      <Bread />
    </Button>
  );
};

export default BreadFilterButton;

const Button = styled.button`
  position: absolute;
  top: 60px;
  right: 22px;

  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
