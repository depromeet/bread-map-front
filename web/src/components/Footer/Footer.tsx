import * as React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

const Footer: React.FC = () => {
  return (
    <Base>
      <IconBox>
        <Image src='/home.svg' alt='' width={48} height={48}/>
      </IconBox>

      <IconBox>
        <Image src='/home.svg' alt='' width={48} height={48}/>
      </IconBox>

      <IconBox>
        <Image src='/home.svg' alt='' width={48} height={48}/>
      </IconBox>
    </Base>
  );
};

export default Footer;

const Base = styled.footer`
  width: 100%;
  height: 4rem;
  border-top: 1px solid #5f5f5f;

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

  margin-left: 4rem;
  margin-right: 4rem;
`;
