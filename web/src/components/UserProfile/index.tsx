import React from 'react';
import EditProfile from './EditProfile';
import MainProfile from './MainProfile';
import Settings from './Settings';

export type ProfileTitle = '프로필' | '프로필 수정' | '설정';

const UserProfile = () => {
  const [pageTitle, setPageTitle] = React.useState<ProfileTitle>('프로필');

  if (pageTitle === '프로필')
    return <MainProfile {...{ pageTitle, setPageTitle }} />;
  else if (pageTitle === '프로필 수정')
    return <EditProfile {...{ pageTitle, setPageTitle }} />;
  else if (pageTitle === '설정')
    return <Settings {...{ pageTitle, setPageTitle }} />;
  else throw new Error(`pageTitle error! : ${pageTitle}`);
};

export default UserProfile;
