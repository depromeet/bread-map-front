import React, { useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Home, User, Edit, Compass } from '@/components/icons';

const activeColor = '#FF6E40';

const Footer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("");
  
  const handleClick = e => {
    // e.target을 쓰면 이벤트 캡처링 문제가 생겨서 currentTarget 사용
    setCurrentPage(e.currentTarget.name);
    console.log(e.currentTarget)
    console.log(`now : ${currentPage}`)
  };


  return (
    <Base>
      <Link href="#home">
        <a name="home" onClick={handleClick}>
          <IconBox>
            <Home name="home" stroke={currentPage === "home" ? activeColor : 'black'} />
          </IconBox>
        </a>
      </Link>

      <Link href="#compass">
        <a name="compass" onClick={handleClick}>
          <IconBox>
            <Compass stroke={currentPage === "compass" ? activeColor : 'black'} />
          </IconBox>   
        </a>
      </Link>

      <Link href="#edit" >
        <a name="edit" onClick={handleClick}>
          <IconBox>
            <Edit stroke={currentPage === "edit" ? activeColor : 'black'} />
          </IconBox>
        </a>
      </Link>

      <Link href="#user"  >
        <a name="user" onClick={handleClick}>
          <IconBox>
            <User stroke={currentPage === "user" ? activeColor : 'black'}  />
          </IconBox>
        </a>
      </Link>
    </Base>
  );
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

const IconBox = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  margin-right: 2rem;
`;

// 1. props가 반영되지 않을 때
// 2. TODO - Next-Router 대체
// 3. TODO - react-router-dom 제거
