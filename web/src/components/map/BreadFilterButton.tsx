import * as React from 'react';
import styled from '@emotion/styled';
import { useAtom } from 'jotai';
import { BreadDefaultIcon } from '@/components/icons';
import { currentFilterAtom } from '@/store/map';
import BreadFilterSelect from './BreadFilterSelect';

const BreadFilterButton: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const toggleOpen = () => setOpen((prev) => !prev);
  const [currentFilter] = useAtom(currentFilterAtom);

  return (
    <>
      <Button onClick={toggleOpen} isFiltered={currentFilter.length > 0}>
        {currentFilter.length > 0 && (
          <FilteredCount>{currentFilter.length}</FilteredCount>
        )}
        <BreadDefaultIcon width={30} height={30} />
      </Button>
      <BreadFilterSelect open={open} onClose={toggleOpen} />
    </>
  );
};

export default BreadFilterButton;

const Button = styled.button<{ isFiltered: boolean }>`
  position: absolute;
  top: 30px;
  right: 22px;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme, isFiltered }) =>
    isFiltered ? theme.color.black : theme.color.white};
  color: ${({ theme, isFiltered }) =>
    isFiltered ? theme.color.white : theme.color.black};
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const FilteredCount = styled.span`
  position: absolute;
  left: -4px;
  top: -4px;

  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.primary500};
  color: ${({ theme }) => theme.color.white};
  font-size: 12px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
