import * as React from 'react';

const ImageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Image Icon</title>
    <path
      d="M15.462 3.5H4.12A1.62 1.62 0 002.5 5.12v11.342c0 .895.725 1.62 1.62 1.62h11.342a1.62 1.62 0 001.62-1.62V5.12a1.62 1.62 0 00-1.62-1.62z"
      stroke="#BDBDBD"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.991 9.17c.69 0 1.25-.543 1.25-1.215 0-.67-.56-1.215-1.25-1.215s-1.25.544-1.25 1.215c0 .672.56 1.216 1.25 1.216zM17.083 13.222l-4.051-4.05-8.911 8.91"
      stroke="#BDBDBD"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ImageIcon;
