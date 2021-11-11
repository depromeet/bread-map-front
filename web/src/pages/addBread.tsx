import React from 'react';
import styled from '@emotion/styled';
import AddBreadReview from '@/components/AddBreadReview';
import { Header } from '@/components/common';

const AddBread = () => {
  return (
    <AddBreadLayout>
      <Header />
      <AddBreadReview />
    </AddBreadLayout>
  );
};

export default AddBread;

const AddBreadLayout = styled.section`
  position: relative;
  padding: 16px 20px;
  overflow-x: hidden;
  min-height: 100vh;
`;