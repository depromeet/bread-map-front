import React from 'react';
import styled from '@emotion/styled';
import { Setting, Construction } from '@/components/icons';
import { Footer } from '@/components/common';

const Search = () => {
  return (
    <Base>
      <TopHeader>
        <Blank />
        <PageTitle>탐색</PageTitle>
        <Setting />
      </TopHeader>

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
      <Footer />
    </Base>
  );
};

export default Search;

const Base = styled.div`
  height: calc(100vh - ${({ theme }) => theme.height.footer}px);
  display: flex;
  flex-direction: column;
`;

const Blank = styled.div`
  width: 24px;
`;

const PageTitle = styled.header`
  font-size: 18px;
  font-weight: 700;
`;

const TopHeader = styled.div`
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
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
