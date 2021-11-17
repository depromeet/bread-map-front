import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { ArrowPrev, ShareIcon } from '../icons';
import { useGetBakery } from '@/remotes/hooks';

const BakeryHeader = ({ bakeryId }: { bakeryId: number }) => {
  const { data } = useGetBakery(bakeryId);
  const router = useRouter();
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
    <Container>
      <ArrowPrev onClick={toDaedong} />
      <BakeryName>{data?.bakeryName}</BakeryName>
      <ShareIcon onClick={shareClickHandler} />
    </Container>
  );
};

export default BakeryHeader;

const BakeryName = styled.div`
  font-weight: 600;
`;

const Container = styled.div`
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
