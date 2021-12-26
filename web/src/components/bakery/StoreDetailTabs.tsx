import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import {
  HomeSection,
  InfoSection,
  MenuSection,
  ReviewSection,
} from './TabContents';
import BakeryHeader from './BakeryHeader';

export type Tabs = 'home' | 'menu' | 'review' | 'info';

const isTab = (tabName: string | string[] | undefined): tabName is Tabs => {
  const tabs = ['home', 'menu', 'review', 'info'];

  if (Array.isArray(tabName)) return false;
  if (tabName === undefined) return false;
  if (!tabs.includes(tabName)) return false;

  return true;
};

const StoreDetailTabs = () => {
  const router = useRouter();
  const { tab, id } = router.query;
  const bakeryId = id ? +id : 0;
  const currentTab = isTab(tab) ? tab : 'home';

  const tabClickHandler = (tab: Tabs) => {
    if (tab === currentTab || !isTab(currentTab)) return;
    router.push({ pathname: router.pathname, query: { ...router.query, tab } });
  };

  return (
    <>
      <BakeryHeader bakeryId={bakeryId} />
      <Container>
        <Tabs className={currentTab}>
          <li onClick={() => tabClickHandler('home')}>홈</li>
          <li onClick={() => tabClickHandler('menu')}>메뉴</li>
          <li onClick={() => tabClickHandler('review')}>리뷰</li>
          <li onClick={() => tabClickHandler('info')}>정보</li>
        </Tabs>

        <TabContainer>
          {currentTab === 'home' && <HomeSection bakeryId={bakeryId} />}
          {currentTab === 'menu' && <MenuSection bakeryId={bakeryId} />}
          {currentTab === 'review' && <ReviewSection bakeryId={bakeryId} />}
          {currentTab === 'info' && <InfoSection bakeryId={bakeryId} />}
        </TabContainer>
      </Container>
    </>
  );
};

export default StoreDetailTabs;

const Container = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  flex-grow: 1;
`;

const TabContainer = styled.div`
  padding: 9px 0 0;
  flex-grow: 1;
  overflow: scroll;
  background-color: ${({ theme }) => theme.color.gray200};
`;

const Tabs = styled.ul`
  cursor: pointer;
  margin: 0;
  background: ${({ theme }) => theme.color.white};
  border-top: 1px solid ${({ theme }) => theme.color.gray100};
  border-bottom: 1px solid ${({ theme }) => theme.color.gray300};
  padding: 0 12px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  transition: transfrom 0.5s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    height: 1px;
    transition: transform 0.2s ease-in-out;
    transform: translateX(12px);
    width: calc((100% - 24px) / 4);
    border: 0px;
    border-bottom: 2px solid;
    border-image: linear-gradient(
      to right,
      transparent 10%,
      ${({ theme }) => theme.color.primary500} 10.01%,
      ${({ theme }) => theme.color.primary500} 89.99%,
      transparent 90%,
      transparent 100%
    );
    border-image-slice: 1;
  }
  &.home {
    &::after {
      transform: translateX(calc(12px));
    }
  }
  &.menu {
    &::after {
      transform: translateX(calc(12px + ((100vw - 24px) / 4)));
    }
  }
  &.review {
    &::after {
      transform: translateX(calc(12px + ((100vw - 24px) * 2 / 4)));
    }
  }
  &.info {
    &::after {
      transform: translateX(calc(12px + (100vw - 24px) * 3 / 4));
    }
  }

  li {
    width: 100%;
    text-align: center;
    padding: 16px 0;
    font-size: 14px;
    font-weight: 800;
  }
`;
