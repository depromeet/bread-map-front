import React from 'react';
import styled from '@emotion/styled';
import { AddBreadReview } from '@/components/AddBreadReview';
import { Header } from '@/components/common';

const AddBread = () => {
  return (
    <>
      <AddBreadLayout>
        <AddBreadHeader />
        <AddBreadReview bakeryId={5} />
      </AddBreadLayout>
    </>
  );
};

export default AddBread;

const AddBreadLayout = styled.section`
  position: relative;
  padding: 0 20px 16px;
  overflow-x: hidden;
  height: 100vh;
`;

const AddBreadHeader = styled(Header)`
  position: sticky;
  top: 16px;
`;
