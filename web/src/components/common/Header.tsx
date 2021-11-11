import React from 'react';
import styled from '@emotion/styled';
import { useRouter, withRouter } from 'next/router';
import { ArrowPrev, Close } from '@/components/icons';

const Header: React.FC = ({ children }) => {
  const nextRouter = useRouter();

  const prevClickHandler = React.useCallback(() => {
    nextRouter.back();
  }, [nextRouter]);
  const colseClickHandler = React.useCallback(() => {
    nextRouter.push('/daedong');
  }, [nextRouter]);

  return (
    <TopHeader>
      <ArrowPrev onClick={prevClickHandler} />
      {children}
      <Close onClick={colseClickHandler} />
    </TopHeader>
  );
};

export default Header;

const TopHeader = styled.div`
  position: sticky;
  padding: 16px 0;
  z-index: 9;
  background-color: ${({ theme }) => theme.color.white};
  top: 0;
  display: flex;
  justify-content: space-between;

  svg {
    color: ${({ theme }) => theme.color.black};
    path {
      stroke: ${({ theme }) => theme.color.black};
    }
  }
`;
