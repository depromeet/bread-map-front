import React from 'react';
import styled from '@emotion/native';
import { Menus } from '../shared/menus';
import TabHeader from './tabHeader';
import { Devider } from '.';

interface MenuItem {
  name: string;
  price: number;
  rating: number;
}

interface MenuSectionProps {
  bakeryMenu: MenuItem[];
}

const MenuSection: React.FC<MenuSectionProps> = ({ bakeryMenu }) => {
  return (
    <Container>
      <Devider />
      <TabHeader title={'메뉴'} totalCount={6} addBtnText={'메뉴 입력'} />
      <Content>
        <Menus bakeryMenu={bakeryMenu} />
      </Content>
    </Container>
  );
};

export default MenuSection;

const Container = styled.ScrollView``;

const Content = styled.View`
  padding: 0 20px;
`;
