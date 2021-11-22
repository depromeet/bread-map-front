import * as React from 'react';

const UserCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7.99508" cy="7.99508" r="6.665" fill="current" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.99544 4.34961C7.03685 4.34961 6.25977 5.1267 6.25977 6.08529C6.25977 7.04387 7.03685 7.82096 7.99544 7.82096C8.95403 7.82096 9.73112 7.04387 9.73112 6.08529C9.73112 5.1267 8.95403 4.34961 7.99544 4.34961Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.99451 8.51562C6.61875 8.51562 5.73385 9.01766 5.26546 9.78442C4.97476 10.2603 5.08602 10.7556 5.38323 11.1009C5.66834 11.4322 6.12771 11.6398 6.60596 11.6398H9.38305C9.86131 11.6398 10.3207 11.4322 10.6058 11.1009C10.903 10.7556 11.0143 10.2603 10.7236 9.78442C10.2552 9.01766 9.37026 8.51562 7.99451 8.51562Z"
      fill="white"
    />
  </svg>
);

export default UserCircle;
