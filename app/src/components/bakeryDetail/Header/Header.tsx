import React from 'react';
import styled from '@emotion/native';
import { ChevronDownIcon, ShareIcon } from '../../shared/icons';

type tabMenuProps = {
  name: string;
};

const Tabs: React.FC<tabMenuProps> = ({ name }) => (
  <TabButton>
    <TabText>{name}</TabText>
  </TabButton>
);

type HeaderProps = {
  bakeryName: string;
};

const Header: React.FC<HeaderProps> = ({ bakeryName }) => (
  <Container>
    <NameWithIcons>
      <HeaderIcon>
        <ChevronDownIcon />
      </HeaderIcon>
      <BakeryName>{bakeryName}</BakeryName>
      <HeaderIcon>
        <ShareIcon />
      </HeaderIcon>
    </NameWithIcons>
    <TabContainer>
      <Tabs name={'홈'} />
      <Tabs name={'메뉴'} />
      <Tabs name={'리뷰'} />
      <Tabs name={'정보'} />
    </TabContainer>
  </Container>
);

export { Header };

const TabButton = styled.TouchableOpacity`
  padding: 16px 20px;
`;

const TabText = styled.Text`
  font-weight: bold;
`;

const Container = styled.View``;

const NameWithIcons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.color.gray100};
`;

const HeaderIcon = styled.View`
  padding: 12px;
`;

const BakeryName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const TabContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 24px;
`;
