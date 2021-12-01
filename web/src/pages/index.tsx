import useGetUser from '@/remotes/hooks/useUser';
import React from 'react';
import styled from '@emotion/styled';
import router from 'next/router';

const Home = () => {
  const { data, error } = useGetUser();

  if (!data) return <Wait> 잠시만 기다려주세요. </Wait>;
  if (error || data.error) router.push('/auth/signin');
  else router.push('/map');
};

export default Home;

const Wait = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
