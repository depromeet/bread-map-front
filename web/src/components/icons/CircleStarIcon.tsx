import * as React from 'react';

const CircleStarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Circle Star Icon</title>
    <circle cx={8} cy={8} r={8} fill="#FF6E40" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.17 10.854a.391.391 0 00-.34 0l-2.068 1a.39.39 0 01-.556-.404l.313-2.272a.39.39 0 00-.105-.324L3.823 7.2a.39.39 0 01.213-.653l2.26-.405a.39.39 0 00.276-.2L7.656 3.92a.39.39 0 01.688 0l1.083 2.023a.39.39 0 00.276.2l2.26.404a.39.39 0 01.213.653l-1.591 1.654a.39.39 0 00-.105.324l.313 2.272a.39.39 0 01-.556.404l-2.067-1z"
      fill="#fff"
    />
  </svg>
);

export default CircleStarIcon;
