import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Home, User, Edit, Compass } from '@/components/icons';

const active = '#FF6E40';

const Footer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('');
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

  const handleClick = (e) => {
    // e.target을 쓰면 이벤트 캡처링 문제가 생겨서 currentTarget 사용
    setCurrentPage(e.currentTarget.dataset.name);
    console.log(e.currentTarget);
    console.log(`now : ${currentPage}`);
  };

  const mapToComponents = (data) => {
    return data.map(({ url, Icon }, key) => (
      <Link href={url} key={key}>
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
