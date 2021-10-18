import * as React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

const Footer: React.FC = () => {
  return (
    <Base>
      <IconBox active>
        <Image src="/main.svg" alt="" width={24} height={24} layout="fixed" />
      </IconBox>

      <IconBox>
        <Image
          src="/compass.svg"
          alt=""
          width={24}
          height={24}
          layout="fixed"
        />
      </IconBox>

      <IconBox>
        <Image src="/edit.svg" alt="" width={24} height={24} layout="fixed" />
      </IconBox>

      <IconBox>
        <Image src="/user.svg" alt="" width={24} height={24} layout="fixed" />
      </IconBox>
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

  color: ${(props) => (props.active ? 'red' : '')};
`;

// 1. props가 반영되지 않을 때
