import * as React from 'react';

const InfoWifiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Info Wifi Icon</title>
    <path
      d="M11.143 21.429c7.714-8.572 18-8.572 25.714 0M16.286 26.572c4.629-5.143 10.8-5.143 15.429 0"
      stroke="#222"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 33a1.286 1.286 0 100-2.572 1.286 1.286 0 000 2.571z"
      fill="#222"
      stroke="#222"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default InfoWifiIcon;
