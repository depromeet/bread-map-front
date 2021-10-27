import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Home, User, Edit, Compass } from '@/components/icons';

const active = '#FF6E40';

const Footer: React.FC = () => {
  const router = useRouter();

  const items = [
    {
      url: '/#home',
      Icon: <Home stroke={router.asPath === '/#home' ? active : 'black'} />,
    },
    {
      url: '/#compass',
      Icon: (
        <Compass stroke={router.asPath === '/#compass' ? active : 'black'} />
      ),
    },
    {
      url: '/#edit',
      Icon: <Edit stroke={router.asPath === '/#edit' ? active : 'black'} />,
    },
    {
      url: '/#user',
      Icon: <User stroke={router.asPath === '/#user' ? active : 'black'} />,
    },
  ];

  const mapToComponents = (data) => {
    // TODO: type 선언
    return data.map(({ url, Icon }, key) => (
      <Link href={url} key={key} passHref={true}>
        <IconBox>{Icon}</IconBox>
      </Link>
    ));
  };

  return <Base>{mapToComponents(items)}</Base>;
};

export default Footer;

const Base = styled.footer`
  width: 100%;
  height: 3rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  margin-right: 2rem;
`;
