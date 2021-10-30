import * as React from 'react';

const ReviewIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Review Icon</title>
    <g
      clipPath="url(#prefix__clip0_3:1111)"
      stroke="#222"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path d="M20 2c-.563 0-1.102.224-1.5.621l-9.5 9.5-1 4 4-1 9.5-9.5A2.121 2.121 0 0020 2z" />
    </g>
    <defs>
      <clipPath id="prefix__clip0_3:1111">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default ReviewIcon;
