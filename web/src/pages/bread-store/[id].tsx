import React from 'react';
import styled from '@emotion/styled';
import { StoreDetailTabs } from '@/components/breadStore';
import { Footer } from '@/components/common';

const Store = () => {
  return (
    <>
      <Container>
        <StoreDetailTabs />
      </Container>
      <Footer />
    </>
  );
};

export default Store;

const Container = styled.div`
  height: calc(100vh - ${({ theme }) => theme.height.footer}px);
  min-height: calc(100vh - ${({ theme }) => theme.height.footer}px);
  max-height: calc(100vh - ${({ theme }) => theme.height.footer}px);
  display: flex;
  flex-direction: column;
  padding: 0;
`;
