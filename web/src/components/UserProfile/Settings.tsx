import React from 'react';
import styled from '@emotion/styled';
import { ProfileTitle } from '.';
import { ArrowPrev } from '../icons';

const settingMenu = [
  { name: '오픈소스', link: '' },
  { name: '문의하기', link: '' },
  { name: '요청하기', link: '' },
  { name: '대동빵지도팀', link: '' },
  { name: '로그아웃', link: '' },
];

interface SettingsProps {
  pageTitle: ProfileTitle;
  setPageTitle: React.Dispatch<React.SetStateAction<ProfileTitle>>;
}

const Settings = ({ pageTitle, setPageTitle }: SettingsProps) => {
  return (
    <SettingsWrapper>
      <TopHeader>
        <h1>{pageTitle}</h1>
        <ArrowPrev onClick={() => setPageTitle('프로필')} />
      </TopHeader>
      <MenuList>
        {settingMenu.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </MenuList>
    </SettingsWrapper>
  );
};

export default Settings;

const SettingsWrapper = styled.div``;

const TopHeader = styled.div`
  position: relative;
  padding: 14px 0;

  > h1 {
    text-align: center;
    font-size: 1.12rem;
    margin: 0;
  }

  > svg {
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
  }
`;

const MenuList = styled.ul`
  padding: 0;
  margin-bottom: 13px;

  li {
    list-style: none;
    padding: 20px;
    font-weight: bold;
    border-bottom: ${({ theme }) => `1px solid ${theme.color.gray200}`};
  }
`;
