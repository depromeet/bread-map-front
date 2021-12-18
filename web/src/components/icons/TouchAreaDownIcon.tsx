import React from 'react';

const TouchAreaDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M7.354 2.646a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L4 5.293l2.646-2.647a.5.5 0 01.708 0z"
      fill="#757575"
    />
  </svg>
);

export default TouchAreaDownIcon;
