import React from 'react';
import styled from '@emotion/styled';
import AddBreadReview from '@/components/AddBreadReview';
import { Header } from '@/components/common';
import { useRouter } from 'next/router';

const AddBread = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <>
      <AddBreadLayout>
        <AddBreadHeader />
        <AddBreadReview bakeryId={+id} />
      </AddBreadLayout>
    </>
  );
};

export default AddBread;

const AddBreadLayout = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 20px 16px;
  overflow-x: hidden;
  height: 100vh;
`;

const AddBreadHeader = styled(Header)`
  position: sticky;
  top: 16px;
`;
