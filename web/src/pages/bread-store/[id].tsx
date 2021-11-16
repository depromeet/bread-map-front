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

  const toDaedong = () => router.push('/daedong');
  const shareClickHandler = () => {
    if (navigator && 'share' in navigator) {
      navigator.share({
        title: data?.bakeryName,
        text: `${data?.bakeryName}정보를 확인하세요 !`,
        url: router.asPath,
      });
    }
  };

  return (
    <>
      <Container>
        <TopHeader>
          <ArrowPrev onClick={toDaedong} />
          <BakeryName>{data?.bakeryName}</BakeryName>
          <Share onClick={shareClickHandler} />
        </TopHeader>
        <StoreDetailTabs currentTab={tab} />
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
