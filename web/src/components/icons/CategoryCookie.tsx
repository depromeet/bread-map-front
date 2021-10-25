import React from 'react';

export const CategoryCookie: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.562 16.305c.722.374 1.068 1.442.688 2.16a6.501 6.501 0 003.055 8.95c.515.236.835.804.632 1.332C36.627 34.744 30.81 39 24 39c-8.837 0-16-7.163-16-16S15.163 7 24 7c2.963 0 5.737.805 8.117 2.209.52.307.587 1.01.31 1.548A3.794 3.794 0 0032 12.5c0 1.601 1.022 3.007 2.562 3.805zM23 17a2 2 0 100-4 2 2 0 000 4zm5 11a2 2 0 11-4 0 2 2 0 014 0zm-12-3a2 2 0 100-4 2 2 0 000 4z"
      fill="#222"
    />
  </svg>
);

export default CategoryCookie;
