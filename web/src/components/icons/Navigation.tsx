import * as React from 'react';

export const Navigation: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.217 1L1 7.26l5.565 1.392 1.392 5.565L14.217 1z"
      stroke="#000"
      strokeWidth={1.391}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Navigation;
