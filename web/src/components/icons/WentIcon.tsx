import * as React from 'react';

const WentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Went Icon</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.003 1.277c.419 0 .771.283.875.669.947.395 1.583.444 3.055.444.71 0 1.177-.047 1.566-.124.974-.194 1.878.431 1.878 1.425V5.47a1.988 1.988 0 01-1.296 1.86c-.54.194-1.057.31-2.15.31-1.356 0-2.242-.103-3.021-.395v5.45h3.085l-2.813 2.813a.604.604 0 00.854.855l3.667-3.668h.465a4.832 4.832 0 110 9.665H6.085a4.832 4.832 0 010-9.665h3.87l-2.81 2.81A.604.604 0 008 16.36l3.097-3.098V2.182c0-.5.406-.905.906-.905z"
      fill="#222"
    />
  </svg>
);

export default WentIcon;
