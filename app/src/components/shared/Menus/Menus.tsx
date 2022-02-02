import React from 'react';
import { FlatList } from 'react-native';
import Menu from './Menu';

type MenuInfo = {
  name: string;
  price: number;
  rating: number;
};

interface MenuProps {
  bakeryMenu: MenuInfo[];
}

const Menus: React.FC<MenuProps> = ({ bakeryMenu }) => (
  <FlatList
    data={bakeryMenu}
    keyExtractor={menu => menu.name}
    renderItem={({ item }) => <Menu name={item.name} price={item.price} rating={item.rating} />}
  />
);

export default Menus;
