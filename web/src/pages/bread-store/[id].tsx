import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useGetBakery } from '@/remotes/hooks';
import Share from '@/components/icons/Share';
import { ArrowPrev } from '@/components/icons';
import { StoreDetailTabs } from '@/components/breadStore';
import { Footer } from '@/components/common';

const Store = () => {
  const router = useRouter();
  const { tab, id } = router.query;
  const { data, error } = useGetBakery(id ? +id : 2);

  return (
    <>
      <Container>
        <TopHeader>
          <ArrowPrev />
          <BakeryName>{data?.bakeryName}</BakeryName>
          <Share />
        </TopHeader>
        <StoreDetailTabs currentTab={tab} />

        {error && <div>에러발생이지롱</div>}
        {!data && <div>로딩중이지롱</div>}
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

const BakeryName = styled.div`
  font-weight: 600;
`;

const TopHeader = styled.div`
  position: sticky;
  padding: 16px 12px;
  z-index: 9;
  background-color: ${({ theme }) => theme.color.white};
  top: 0;
  display: flex;
  justify-content: space-between;

  svg {
    color: ${({ theme }) => theme.color.black};
    path {
      stroke: ${({ theme }) => theme.color.black};
    }
  }
`;
