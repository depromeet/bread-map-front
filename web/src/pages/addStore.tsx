import React from 'react';
import styled from '@emotion/styled';
import { ArrowPrev, Close } from '@/components/icons';
import OnBoardStore from '@/components/addStore/StoreOnBoard';

const AddBread = () => {
  return (
    <AddStoreLayout>
      <TopHeader>
        <ArrowPrev />
        <Close />
      </TopHeader>
      <OnBoardStore />
    </AddStoreLayout>
  );
};

export default AddBread;

const AddStoreLayout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 16px 20px;
  overflow-x: hidden;
  min-height: 100vh;
  height: 100%;
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
