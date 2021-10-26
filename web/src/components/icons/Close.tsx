import * as React from 'react';

export const Close: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.865 6.198l.106.106a.675.675 0 010 .954l-4.826 4.826 4.826 4.827c.242.241.262.62.06.885l-.06.07-.106.105a.675.675 0 01-.885.06l-.07-.06-4.826-4.826-4.826 4.826a.675.675 0 01-.954 0l-.106-.106a.675.675 0 010-.954l4.826-4.827-4.826-4.826a.675.675 0 01-.06-.885l.06-.07.106-.105a.675.675 0 01.885-.06l.07.06 4.825 4.826 4.827-4.826a.675.675 0 01.954 0z"
      fill="#fff"
    />
    <mask
      id="prefix__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={6}
      y={6}
      width={13}
      height={13}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.865 6.198l.106.106a.675.675 0 010 .954l-4.826 4.826 4.826 4.827c.242.241.262.62.06.885l-.06.07-.106.105a.675.675 0 01-.885.06l-.07-.06-4.826-4.826-4.826 4.826a.675.675 0 01-.954 0l-.106-.106a.675.675 0 010-.954l4.826-4.827-4.826-4.826a.675.675 0 01-.06-.885l.06-.07.106-.105a.675.675 0 01.885-.06l.07.06 4.825 4.826 4.827-4.826a.675.675 0 01.954 0z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#000" d="M3.837 3.837h32v32h-32z" />
    </g>
  </svg>
);

export default Close;
