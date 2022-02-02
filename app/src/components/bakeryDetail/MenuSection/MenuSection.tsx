import React from 'react';
import styled from '@emotion/native';
import { Menus } from '@shared/Menus';
import Divider from '../Divider';
import { TabHeader } from '../TabHeader';

type MenuItem = {
  name: string;
  price: number;
  rating: number;
};

type MenuSectionProps = {
  bakeryMenu: MenuItem[];
};

const MenuSection: React.FC<MenuSectionProps> = ({ bakeryMenu }) => (
  <Container>
    <Divider />
    <TabHeader title={'메뉴'} totalCount={6} addBtnText={'메뉴 입력'} />
    <Content>
      <Menus bakeryMenu={bakeryMenu} />
    </Content>
  </Container>
);

export { MenuSection };

const Container = styled.View``;

const Content = styled.View`
  padding: 0 20px;
`;
