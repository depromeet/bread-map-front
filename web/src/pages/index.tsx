import useGetUser from '@/remotes/hooks/useUser';
import React from 'react';
import styled from '@emotion/styled';
import router from 'next/router';
import Head from 'next/head';

const HomeHead: React.FC = ({ children }) => (
  <>
    <Head>
      <title>대동빵지도</title>
      <meta property="og:title" content="대동빵지도" key="title" />
      <meta property="og:url" content="https://www.daedonbread.com" key="url" />
      <meta property="og:type" content="website" key="type" />
      <meta
        property="og:image"
        content="/images/onboarding_02.png"
        key="image"
      />
      <meta property="og:site_name" content="대동빵지도" key="siteName" />
      <meta
        property="og:description"
        content="맛있는 빵집을 공유해봐요!"
        key="description"
      />
    </Head>
    {children}
  </>
);

const Home = () => {
  const { data, error } = useGetUser();

  if (!data)
    return (
      <HomeHead>
        <Wait> 잠시만 기다려주세요. </Wait>
      </HomeHead>
    );
  if (error || data.error) router.push('/auth/signin');
  else router.push('/map');

  return <HomeHead />;
};

export default Home;

const Wait = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
