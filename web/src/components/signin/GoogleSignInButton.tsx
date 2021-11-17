import Script from 'next/script';
import * as React from 'react';
import styled from '@emotion/styled';
import { requestSocialLogin } from '@/remotes/network/auth';

const GoogleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M23.494 12.281c0-.813-.065-1.63-.206-2.43H12.004v4.606h6.462a5.537 5.537 0 01-2.391 3.635v2.99h3.855c2.263-2.084 3.564-5.161 3.564-8.8z"
      fill="#4285F4"
    />
    <path
      d="M12.004 23.97c3.227 0 5.948-1.06 7.93-2.889l-3.855-2.989c-1.072.73-2.457 1.143-4.07 1.143-3.121 0-5.767-2.105-6.717-4.936H1.314v3.081a11.964 11.964 0 0010.69 6.59z"
      fill="#34A853"
    />
    <path
      d="M5.288 14.299a7.165 7.165 0 010-4.58V6.637H1.314a11.973 11.973 0 000 10.743L5.288 14.3z"
      fill="#FBBC04"
    />
    <path
      d="M12.004 4.778a6.5 6.5 0 014.59 1.793l3.415-3.415A11.497 11.497 0 0012.004.044a11.96 11.96 0 00-10.69 6.593L5.288 9.72c.945-2.835 3.595-4.941 6.716-4.941z"
      fill="#EA4335"
    />
  </svg>
);

const GoogleSignInButton: React.FC = () => {
  const [instance, setInstance] = React.useState<gapi.auth2.GoogleAuth | null>(
    null
  );

  const handleClickSignIn = () => {
    if (instance === null) return;

    instance.signIn().then(
      async (currentUser) => {
        try {
          const { id_token } = currentUser.getAuthResponse();
          const resp = await requestSocialLogin({
            accessToken: id_token,
            provider: 'google',
          });
          console.log(resp);
        } catch (error) {
          console.error(error);
        }
      },
      (error) => console.error(error)
    );
  };

  return (
    <Base onClick={handleClickSignIn}>
      <Script
        id={'google-js-sdk'}
        src={'https://apis.google.com/js/platform.js'}
        onLoad={() => {
          window.gapi.load('auth2', () => {
            const googleAuthInstance = window.gapi.auth2.getAuthInstance();

            if (googleAuthInstance) {
              setInstance(googleAuthInstance);
              return;
            }

            const initInstance = window.gapi.auth2.init({
              client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
              scope: 'profile email',
              ux_mode: 'popup',
              redirect_uri: `${window.origin}/auth/signin`,
            });
            setInstance(initInstance);
          });
        }}
      />
      <GoogleIcon />
      <span>구글 계정으로 로그인</span>
    </Base>
  );
};

export default GoogleSignInButton;

const Base = styled.button`
  --color-white: #ffffff;
  --hover-gradient: linear-gradient(
    rgba(51, 51, 51, 0.08),
    rgba(51, 51, 51, 0.08)
  );
  --active-gradient: linear-gradient(
    rgba(51, 51, 51, 0.16),
    rgba(51, 51, 51, 0.16)
  );

  width: 320px;
  height: 56px;
  background: var(--color-white);
  border: 1px solid var(--color-grey-500);
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--hover-gradient), var(--color-white);

    @media (hover: none) {
      background: var(--color-white);
    }
  }

  &:active {
    background: var(--active-gradient), var(--color-white);
  }

  span {
    font-size: 16px;
    font-weight: 700;
    color: #222222;
    margin-left: 8px;
  }
`;
