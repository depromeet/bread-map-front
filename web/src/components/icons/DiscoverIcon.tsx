import * as React from 'react';

const DiscoverIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Discover Icon</title>
    <g
      clipPath="url(#prefix__clip0_3:1116)"
      stroke="#222"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="M14.36 14.36L16.48 8l-6.36 2.12L8 16.48l6.36-2.12z" />
    </g>
    <defs>
      <clipPath id="prefix__clip0_3:1116">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default DiscoverIcon;
