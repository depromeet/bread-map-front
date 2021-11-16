import React from 'react';
import styled from '@emotion/styled';
import { Tabs } from '../StoreDetailTabs';
import HomeSection from './HomeSection';
import MenuSection from './MenuSection';
import ReviewSection from './ReviewSection';
import InfoSection from './InfoSection';

const TabContents = ({ tab }: { tab: Tabs }) => {
  return (
    <Container>
      {tab === 'home' && <HomeSection />}
      {tab === 'menu' && <MenuSection tab={tab} />}
      {tab === 'review' && <ReviewSection tab={tab} />}
      {tab === 'info' && <InfoSection tab={tab} />}
    </Container>
  );
};

export default TabContents;

const Container = styled.div`
  padding: 9px 0 0;
  flex-grow: 1;
  overflow: scroll;
  background-color: ${({ theme }) => theme.color.gray200};
`;
