import React from 'react';
import SettingIcon from '@/components/icons/SettingIcon';
import styled from '@emotion/styled';
import { ProfileTitle } from '.';

interface MainProfileProps {
  pageTitle: ProfileTitle;
  setPageTitle: React.Dispatch<React.SetStateAction<ProfileTitle>>;
}

enum TabType {
  Wish = 'wish',
  Went = 'went',
  Review = 'review',
}

const MainProfile = ({ pageTitle, setPageTitle }: MainProfileProps) => {
  const [tab, setTab] = React.useState<TabType>(TabType.Wish);

  const changeTab = (tabType: TabType) => {
    setTab(tabType);
  };

  return (
    <MainProfileWrapper>
      <TopHeader>
        <h1>{pageTitle}</h1>
        <SettingIcon onClick={() => setPageTitle('설정')} />
      </TopHeader>
      <UserInfo>
        <Avatar src="https://via.placeholder.com/48" />
        <NameAndEmail>
          <NameArea>
            <span>빵순이님</span>
            <button onClick={() => setPageTitle('프로필 수정')}>수정</button>
          </NameArea>
          <Email>ig87346@gmail.com</Email>
        </NameAndEmail>
      </UserInfo>
      <MyContentSection>
        <Tabs>
          <Tab
            data-tab={TabType.Wish}
            active={TabType.Wish === tab}
            onClick={() => changeTab(TabType.Wish)}
          >
            가보고 싶어요
          </Tab>
          <Tab
            data-tab={TabType.Went}
            active={TabType.Went === tab}
            onClick={() => changeTab(TabType.Went)}
          >
            가봤어요
          </Tab>
          <Tab
            data-tab={TabType.Review}
            active={TabType.Review === tab}
            onClick={() => changeTab(TabType.Review)}
          >
            리뷰
          </Tab>
        </Tabs>
        <Content></Content>
      </MyContentSection>
    </MainProfileWrapper>
  );
};

export default MainProfile;

const MainProfileWrapper = styled.div``;

const TopHeader = styled.div`
  position: relative;
  padding: 14px 16px;
  margin-bottom: 20px;

  > h1 {
    text-align: center;
    font-size: 1.12rem;
    margin: 0;
  }

  > svg {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
`;

const UserInfo = styled.div`
  display: flex;
  margin-left: 16px;
`;

const Avatar = styled.img`
  border-radius: 8px;
  margin-right: 15px;
`;

const NameAndEmail = styled.div``;

const NameArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  > span {
    font-size: 1.12rem;
    font-weight: bold;
    margin-right: 8px;
    margin-bottom: 2px;
  }

  > button {
    padding: 5px 6.5px;
    background-color: ${({ theme }) => theme.color.white};
    border: ${({ theme }) => `1px solid ${theme.color.gray300}`};
    border-radius: 5px;
    font-size: 0.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.color.gray700};
  }
`;

const Email = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color.gray500};
  margin: 0;
`;

const MyContentSection = styled.div``;

const Content = styled.div``;

const Tabs = styled.div`
  margin-top: 2rem;
  border-top: ${({ theme }) => `1px solid ${theme.color.gray100}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.color.gray300}`};
  display: flex;
  padding: 0 15px;
`;

const Tab = styled.a<{ active: boolean }>`
  position: relative;
  display: block;
  width: 100%;
  padding: 15px 0;
  text-align: center;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.color.primary500};
    opacity: ${({ active }) => (active ? '1' : '0')};
  }
`;
