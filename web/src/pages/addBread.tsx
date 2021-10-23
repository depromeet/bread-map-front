import React from 'react';
import styled from '@emotion/styled';
import { Prev, Close } from '@/components/icons';
import AddBreadReview from '@/components/AddBreadReview';

const AddBread = () => {
  return (
    <AddBreadLayout>
      <TopHeader>
        <Prev />
        <Close />
      </TopHeader>
      <AddBreadReview />
    </AddBreadLayout>
  );
};

export default AddBread;

const AddBreadLayout = styled.section`
  position: relative;
  padding: 16px 20px;
  overflow-x: hidden;
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
