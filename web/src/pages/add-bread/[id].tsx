import React from 'react';
import styled from '@emotion/styled';
import { AddBreadReview } from '@/components/AddBreadReview';
import { Header } from '@/components/common';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

interface AddBreadProps {
  id: number;
}

const AddBread = ({ id }: AddBreadProps) => {
  const router = useRouter();
  if (isNaN(+id)) router.replace('/map');

  return (
    <>
      <AddBreadLayout>
        <AddBreadHeader />
        <AddBreadReview bakeryId={+id} />
      </AddBreadLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  return {
    props: {
      id,
    },
  };
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
