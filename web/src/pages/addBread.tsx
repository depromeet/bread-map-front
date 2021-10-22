import React from 'react';
import styled from '@emotion/styled';
import { Prev, Close } from '@/components/icons';
import AddBread from '@/components/addBread';

const addBread = () => {
  return (
    <AddBreadLayout>
      <TopHeader>
        <Prev />
        <Close />
      </TopHeader>
      <AddBread />
    </AddBreadLayout>
  );
};

export default addBread;

const AddBreadLayout = styled.section`
  position: relative;
  padding: 16px 20px;
  overflow-x: hidden;
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
