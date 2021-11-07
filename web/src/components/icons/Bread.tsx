import * as React from 'react';

const Bread: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Bread</title>
    <path
      fillRule="nonzero"
      clipRule="nonzero"
      d="M10.261 6.495c.216-.13.955-.389 2.016-.47a8.204 8.204 0 012.543.198.685.685 0 00-.107.331 3.242 3.242 0 00-.418.383c-1.186 1.29-1.642 2.812-1.642 4.46a.686.686 0 101.372 0c0-1.375.371-2.543 1.282-3.533l.004-.005c.443-.49 1.75-1.229 3.386-.663a4.41 4.41 0 01.512.216.695.695 0 00.087.037c2.768 1.33 4.337 3.292 4.337 5.32 0 1.71-1.11 3.064-3.217 4.028-2.112.966-5.09 1.463-8.45 1.463-3.358 0-6.337-.497-8.449-1.463C1.41 15.833.3 14.478.3 12.77c0-2.047 1.597-4.026 4.41-5.356a6.042 6.042 0 012.116-.56c.252-.015.476-.008.666.019-.33.349-.608.719-.839 1.11-.617 1.048-.863 2.201-.863 3.414a.686.686 0 001.373 0c0-1.023.206-1.924.673-2.717.467-.793 1.224-1.527 2.401-2.171a.656.656 0 00.024-.014z"
      fill="#222"
    />
  </svg>
);

export default Bread;
