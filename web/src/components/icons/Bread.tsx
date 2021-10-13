import React from 'react';

export const Bread: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={22}
    height={18}
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 13.041c0-.6.133-1.197.486-1.684C2.522 9.925 5.335 7 11 7c5.665 0 8.477 2.925 9.515 4.357.352.487.485 1.084.485 1.684A3.959 3.959 0 0117.041 17H4.96A3.959 3.959 0 011 13.041v0z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 2v2M6 8v2M17 2v2M16 8v2M11 1v3M11 7v4M19 9.722C17.453 8.39 14.904 7 11 7S4.547 8.39 3 9.722"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default Bread;
