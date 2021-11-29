import React from 'react';
import styled from '@emotion/styled';
import { Construction } from '@/components/icons';
import { Header } from '@/components/common';

const Building = () => {
  return (
    <Base>
      <HeaderContainer>
        <Header>공사중</Header>
      </HeaderContainer>
      <Layout>
        <Content>
          <Construction />
          <Title>대빵이는 준비중!</Title>
          <Description>
            앗, 아직 없는 페이지예요!
            <br />
            대동빵팀이 열심히 만들고 있어요!
            <br />
            조금만 기다려주세요!
          </Description>
        </Content>
      </Layout>
    </Base>
  );
};

export default Building;

const Base = styled.div`
  height: calc(100vh - ${({ theme }) => theme.height.footer}px);
  display: flex;
  flex-direction: column;
`;
const HeaderContainer = styled.div`
  padding: 0 12px;
  font-weight: bold;

  svg {
    cursor: pointer;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #c4c4c4;
  line-height: 1.3rem;
`;
