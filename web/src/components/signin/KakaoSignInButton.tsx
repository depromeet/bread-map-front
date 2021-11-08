import * as React from 'react';
import styled from '@emotion/styled';

const KakaoTalkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1.2c6.628 0 12 4.361 12 9.74 0 5.38-5.372 9.74-12 9.74-.727 0-1.44-.052-2.131-.152L8.09 21.803c-1.299.922-2.858 2.003-3.235 2.156l-.057.017s-.155.062-.286-.018c-.132-.08-.108-.289-.108-.289l.033-.152c.181-.747 1.02-3.732 1.188-4.325C2.246 17.47 0 14.418 0 10.94 0 5.561 5.373 1.2 12 1.2z"
      fill="#3C1E1E"
    />
  </svg>
);

const KakaoSignInButton: React.FC = () => {
  return (
    <Base>
      <KakaoTalkIcon />
      <span>카카오 계정으로 로그인</span>
    </Base>
  );
};

export default KakaoSignInButton;

const Base = styled.button`
  --color-kakao: #fee500;
  --hover-gradient: linear-gradient(
    rgba(51, 51, 51, 0.08),
    rgba(51, 51, 51, 0.08)
  );
  --active-gradient: linear-gradient(
    rgba(51, 51, 51, 0.16),
    rgba(51, 51, 51, 0.16)
  );

  border: none;
  outline: none;
  width: 320px;
  height: 56px;
  background: var(--color-kakao);
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--hover-gradient), var(--color-kakao);

    @media (hover: none) {
      background: var(--color-kakao);
    }
  }

  &:active {
    background: var(--active-gradient), var(--color-kakao);
  }

  span {
    font-size: 16px;
    font-weight: 700;
    color: #222222;
    margin-left: 8px;
  }
`;
