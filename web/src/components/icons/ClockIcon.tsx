import * as React from 'react';

const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Clock Icon</title>
    <path
      d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z"
      stroke="#BDBDBD"
      strokeWidth={1.333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 4v4l2.667 1.333"
      stroke="#BDBDBD"
      strokeWidth={1.333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ClockIcon;
