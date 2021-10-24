import React from 'react';
import styled from '@emotion/styled';
import { ArrowPrev, Close } from '@/components/icons';
import AddBreadReview from '@/components/AddBreadReview';
import BreadsReviewProvider from '@/components/AddBreadReview/BreadsReviewProvider';

const AddBread = () => {
  return (
    <BreadsReviewProvider>
      <AddBreadLayout>
        <TopHeader>
          <ArrowPrev />
          <Close />
        </TopHeader>
        <AddBreadReview />
      </AddBreadLayout>
    </BreadsReviewProvider>
  );
};

export default AddBread;

const AddBreadLayout = styled.section`
  position: relative;
  padding: 16px 20px;
  overflow-x: hidden;
  min-height: 100vh;
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
