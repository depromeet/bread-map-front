import React from 'react';
import styled from '@emotion/styled';
import { withRouter } from 'next/router';
import { AddBakeryOnBoard, AddBakeryAddress, AddBakeryInfo } from '@/components/addBakery';
import { WithRouterProps } from 'next/dist/client/with-router';
import { NextComponentType, NextPageContext } from 'next';
import { Header } from '@/components/common';

const AddBread: NextComponentType<NextPageContext, any, WithRouterProps> = ({
  router,
}) => {
  const {
    query: { tab },
  } = router;
  
  return (
    <AddStoreLayout>
      <Header />
      {(tab === '1' || !tab) && <AddBakeryOnBoard />}
      {tab === '2' && <AddBakeryAddress />}
      {tab === '3' && <AddBakeryInfo />}
    </AddStoreLayout>
  );
};

export default withRouter(AddBread);

const AddStoreLayout = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 0 20px;
  overflow-x: hidden;
  min-height: 100vh;
  height: 100%;
  max-height: 100vh;
`;
