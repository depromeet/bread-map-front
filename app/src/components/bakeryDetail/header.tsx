import React from 'react';
import styled from '@emotion/native';
import { ChevronDownIcon, ShareIcon } from '../shared/icons';

interface tabMenuProps {
  name: string;
}

const Tabs: React.FC<tabMenuProps> = ({ name }) => {
  return (
    <TabButton>
      <TabText>{name}</TabText>
    </TabButton>
  );
};

const BakeryDetailHeader = () => {
  return (
    <Container>
      <NameWithIcons>
        <HeaderIcon>
          <ChevronDownIcon />
        </HeaderIcon>
        <BakeryName>루엘드파리</BakeryName>
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
};

export default BakeryDetailHeader;

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
