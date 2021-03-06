import * as React from 'react';

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Star Icon</title>
    <path
      d="M22.755 8.673c.543-1.096 2.107-1.096 2.65 0l3.644 7.35a1.48 1.48 0 001.113.807l8.136 1.177c1.216.176 1.7 1.67.819 2.525l-5.88 5.706c-.35.34-.51.831-.427 1.312l1.39 8.063c.207 1.207-1.059 2.13-2.145 1.561l-7.289-3.815a1.48 1.48 0 00-1.372 0l-7.29 3.815c-1.085.569-2.351-.354-2.143-1.561l1.389-8.063a1.48 1.48 0 00-.428-1.312l-5.878-5.706c-.882-.855-.397-2.35.818-2.525l8.136-1.177c.481-.07.897-.371 1.113-.807l3.644-7.35z"
      fill="#222"
    />
  </svg>
);

export default StarIcon;
