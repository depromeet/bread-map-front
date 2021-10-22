import * as React from 'react';

export const Flag: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.022 14c-3.008 0-4.01 1-4.01 1V3s1.002-1 4.01-1c3.009 0 5.014 2 8.023 2 3.008 0 4.01-1 4.01-1v12s-1.002 1-4.01 1c-3.009 0-5.014-2-8.023-2zM4.011 22v-7"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Flag;
