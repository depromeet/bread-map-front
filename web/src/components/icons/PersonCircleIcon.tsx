import * as React from 'react';

const PersonCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Person Circle Icon</title>
    <circle cx={7.995} cy={7.995} r={6.665} fill="#BDBDBD" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.995 4.35a1.736 1.736 0 100 3.471 1.736 1.736 0 000-3.47zM7.995 8.516c-1.376 0-2.26.502-2.729 1.268-.29.476-.18.972.118 1.317.285.331.744.539 1.222.539h2.778c.478 0 .937-.208 1.222-.54.297-.344.409-.84.118-1.316-.468-.766-1.353-1.268-2.729-1.268z"
      fill="#fff"
    />
  </svg>
);

export default PersonCircleIcon;
