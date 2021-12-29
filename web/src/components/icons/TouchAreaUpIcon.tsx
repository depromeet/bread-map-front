import * as React from 'react';

const TouchAreaUpIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={8}
    height={8}
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.646 5.354a.5.5 0 010-.708l3-3a.5.5 0 01.708 0l3 3a.5.5 0 11-.708.708L4 2.707 1.354 5.354a.5.5 0 01-.708 0z"
      fill="#757575"
    />
  </svg>
);

export default TouchAreaUpIcon;
