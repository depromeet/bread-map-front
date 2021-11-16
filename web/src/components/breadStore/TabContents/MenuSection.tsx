import React from 'react';
import styled from '@emotion/styled';
import { Tabs } from '../StoreDetailTabs';

const TabContents = ({ tab }: { tab: Tabs }) => {
  return <div>{tab}</div>;
};

export default TabContents;
