import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import {
  HomeSection,
  InfoSection,
  MenuSection,
  ReviewSection,
} from './TabContents';
import { useGetBakery } from '@/remotes/hooks';
import BakeryHeader from './BakeryHeader';

export type Tabs = 'home' | 'menu' | 'review' | 'info';

const isTab = (tabName: string | string[] | undefined): tabName is Tabs => {
  const tabs = ['home', 'menu', 'review', 'info'];

  if (Array.isArray(tabName) || !tabName || !tabs.includes(tabName)) {
    return false;
  }
  return true;
};

const StoreDetailTabs = () => {
  const router = useRouter();
  const { tab, id } = router.query;
  const { data, error } = useGetBakery(id ? +id : 0);
  const _currentTab = isTab(tab) ? tab : 'home';

  const tabClickHandler = (tab: Tabs) => {
    if (tab === _currentTab || !isTab(_currentTab)) return;
    router.push({ pathname: router.pathname, query: { ...router.query, tab } });
  };

  if (!data) return <div>Loading...</div>;
  if (error) return <div>Error!!</div>;

  return (
    <>
      <BakeryHeader bakeryName={data?.bakeryName} />
      <Container>
        <Tabs className={_currentTab}>
          <li onClick={() => tabClickHandler('home')}>홈</li>
          <li onClick={() => tabClickHandler('menu')}>메뉴</li>
          <li onClick={() => tabClickHandler('review')}>리뷰</li>
          <li onClick={() => tabClickHandler('info')}>정보</li>
        </Tabs>

        <TabContainer>
          {_currentTab === 'home' && <HomeSection bakeryData={data} />}
          {_currentTab === 'menu' && <MenuSection />}
          {_currentTab === 'review' && <ReviewSection bakeryData={data} />}
          {_currentTab === 'info' && <InfoSection bakeryData={data} />}
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
  &::-webkit-scrollbar {
    display: none;
  }
  background-color: ${({ theme }) => theme.color.gray200};
`;

const Tabs = styled.div`
  cursor: pointer;
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
    border-bottom: 2px solid ${({ theme }) => theme.color.primary500};
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
    padding: 12px 0;
  }
`;
