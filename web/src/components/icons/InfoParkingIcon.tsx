import * as React from 'react';

const InfoParkingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Info Parking Icon</title>
    <path
      d="M36.571 8H11.43C9.536 8 8 9.512 8 11.375v24.75c0 1.863 1.536 3.375 3.429 3.375H36.57c1.893 0 3.429-1.512 3.429-3.375v-24.75C40 9.512 38.464 8 36.571 8zM25.143 28.25h-3.429v3.375c0 .619-.514 1.125-1.143 1.125h-2.285a1.137 1.137 0 01-1.143-1.125v-15.75c0-.619.514-1.125 1.143-1.125h6.857C28.92 14.75 32 17.78 32 21.5s-3.079 6.75-6.857 6.75zm0-9h-3.429v4.5h3.429c1.257 0 2.286-1.012 2.286-2.25s-1.029-2.25-2.286-2.25z"
      fill="#222"
    />
  </svg>
);

export default InfoParkingIcon;
