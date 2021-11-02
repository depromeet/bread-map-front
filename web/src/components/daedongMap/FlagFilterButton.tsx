import * as React from 'react';
import styled from '@emotion/styled';
import { Flag } from '@/components/icons';

const FlagFilterButton: React.FC = () => {
  return (
    <Button>
      <Flag />
    </Button>
  );
};

export default FlagFilterButton;

const Button = styled.button`
  position: absolute;
  top: 114px;
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
