import * as React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

const Footer: React.FC = () => {
  return (
    <Base>
      <Anchor
        href={'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'}
        target={'_blank'}
        rel={'noopener noreferrer'}
      >
        Powered by{' '}
        <LogoBox>
          <Image src={'/vercel.svg'} alt={'Vercel Logo'} width={72} height={16} />
        </LogoBox>
      </Anchor>
    </Base>
  );
};

export default Footer;

const Base = styled.footer`
  width: 100%;
  height: 100%;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Anchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const LogoBox = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`;
