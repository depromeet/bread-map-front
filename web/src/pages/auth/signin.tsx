import * as React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import {
  GoogleSignInButton,
  KakaoSignInButton,
  SignInTitle,
} from '@/components/signin';
import type { NextPage } from 'next';

const SignIn: NextPage = () => {
  return (
    <Base>
      <Global
        styles={css`
          html,
          body,
          #__next {
            height: 100%;
          }
        `}
      />
      <Content>
        <SignInTitle />
        <KakaoSignInButton />
        <GoogleSignInButton />
      </Content>
    </Base>
  );
};

export default SignIn;

const Base = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.primary500};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;

  button:first-of-type {
    margin-top: 122px;
  }

  button + button {
    margin-top: 12px;
  }
`;
