import React from 'react';
import { View, Text } from 'react-native';
import styled from '@emotion/native';

interface MenuProps {
  name: string;
  price: number;
  score: number;
}

const Menu: React.FC<MenuProps> = ({ name, price, score }) => {
  return (
    <Container>
      <Img source={{ uri: 'https://via.placeholder.com/100' }} />
      <MenuInfo>
        <MenuName>{name}</MenuName>
        <ScoreArea>
          <View>
            <Text>별</Text>
          </View>
          <Text>{score}</Text>
        </ScoreArea>
        <Price>{price.toLocaleString()}원</Price>
      </MenuInfo>
    </Container>
  );
};

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
`;

const ScoreArea = styled.View`
  flex-direction: row;
`;

const Price = styled.Text`
  color: ${({ theme }) => theme?.color.primary500};
  font-weight: bold;
  margin-top: 16px;
`;
