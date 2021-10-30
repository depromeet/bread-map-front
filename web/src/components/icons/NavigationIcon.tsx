import * as React from 'react';

const NavigationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Navigation Icon</title>
    <path
      d="M14.667 2L2 8l5.333 1.333 1.334 5.334 6-12.667z"
      stroke="#000"
      strokeWidth={1.391}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default NavigationIcon;
