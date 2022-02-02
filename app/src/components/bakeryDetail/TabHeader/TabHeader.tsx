import React from 'react';
import styled from '@emotion/native';

type TabHeaderProps = {
  title: string;
  totalCount: number;
  addBtnText: string;
};

const TabHeader: React.FC<TabHeaderProps> = ({ title, totalCount, addBtnText }) => (
  <Container>
    <Header>
      <TabTitle>{title}</TabTitle>
      <TabTotalCount>{totalCount}</TabTotalCount>
    </Header>
    <AddButton>
      <ButtonText>{addBtnText}</ButtonText>
    </AddButton>
  </Container>
);

export { TabHeader };

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

const TabTitle = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TabTotalCount = styled.Text`
  color: ${({ theme }) => theme.color.primary500};
  font-weight: bold;
  font-size: 16px;
  margin-left: 3px;
`;

const AddButton = styled.TouchableOpacity`
  background: ${({ theme }) => theme.color.primary500};
  justify-content: center;
  border-radius: 30px;
  padding: 8px 12px;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.color.white};
  font-size: 14px;
  font-weight: bold;
`;
