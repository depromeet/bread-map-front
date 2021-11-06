import React from 'react';
import styled from '@emotion/styled';
import UserProfile from '@/components/UserProfile';

const Profile = () => {
  return (
    <ProfileLayout>
      <UserProfile />
    </ProfileLayout>
  );
};

export default Profile;

const ProfileLayout = styled.section`
  position: relative;
  overflow-x: hidden;
  min-height: 100vh;
`;
