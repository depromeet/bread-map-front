import * as React from 'react';

const XCircleFilledIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X Circle Filled Icon</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zm-5.034-2.966a.8.8 0 010 1.132L13.13 12l1.835 1.834a.8.8 0 01-1.132 1.132L12 13.13l-1.834 1.835a.8.8 0 01-1.132-1.132L10.87 12l-1.835-1.834a.8.8 0 011.132-1.132L12 10.87l1.834-1.835a.8.8 0 011.132 0z"
      fill="#000"
      opacity={0.2}
    />
  </svg>
);

export default XCircleFilledIcon;
