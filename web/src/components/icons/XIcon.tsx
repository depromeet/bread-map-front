import * as React from 'react';

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X Icon</title>
    <g
      clipPath="url(#prefix__clip0_8:1533)"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.5 4.5l-15 15M4.5 4.5l15 15" />
    </g>
    <defs>
      <clipPath id="prefix__clip0_8:1533">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default XIcon;
