import React from 'react';
import styled from '@emotion/native';
import { Rating } from '../Rating';

type MenuProps = {
  name: string;
  price: number;
  rating: number;
};

const Menu: React.FC<MenuProps> = ({ name, price, rating }) => (
  <Container>
    <Img source={{ uri: 'https://via.placeholder.com/100' }} />
    <MenuInfo>
      <MenuName>{name}</MenuName>
      <Rating rating={rating} textPosition={'right'} />
      <Price>{price.toLocaleString()}원</Price>
    </MenuInfo>
  </Container>
);

export default Menu;

const Container = styled.View`
  flex-direction: row;
  margin: 8px 0;
`;

const Img = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;

const MenuInfo = styled.View`
  justify-content: center;
  margin-left: 12px;
`;

const MenuName = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.color.black};
`;

const Price = styled.Text`
  color: ${({ theme }) => theme?.color.primary500};
  font-weight: bold;
  margin-top: 16px;
`;
