import React from 'react';
import { FlatList } from 'react-native';
import Menu from './menu';

interface MenuInfo {
  name: string;
  price: number;
  rating: number;
}

interface MenuProps {
  bakeryMenu: MenuInfo[];
}

const Menus: React.FC<MenuProps> = ({ bakeryMenu }) => {
  return (
    <FlatList
      data={bakeryMenu}
      keyExtractor={menu => menu.name}
      renderItem={({ item }) => {
        return <Menu name={item.name} price={item.price} rating={item.rating} />;
      }}
    />
  );
};

export default Menus;
