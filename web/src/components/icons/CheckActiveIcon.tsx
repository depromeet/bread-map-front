import * as React from 'react';

const CheckActiveIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Check Active Icon</title>
    <path
      d="M21.375 11.922c0 5.13-4.193 9.297-9.375 9.297s-9.375-4.167-9.375-9.297c0-5.13 4.193-9.297 9.375-9.297s9.375 4.167 9.375 9.297z"
      fill="#FF6E40"
      stroke="#FF6E40"
      strokeWidth={1.25}
    />
    <path
      d="M16 9.624l-5.037 6.08L8 11.65"
      stroke="#FAFAFA"
      strokeWidth={1.387}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CheckActiveIcon;
