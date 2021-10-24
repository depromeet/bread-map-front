import React from 'react';

export const CategoryDonut: React.FC<React.SVGProps<SVGSVGElement>> = (
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
      d="M40.82 22.7c-.41.19-.85.3-1.32.3-1.93 0-3.5-1.79-3.5-4 0-.95.3-1.81.78-2.49-.54.3-1.14.49-1.78.49-2.21 0-4-2.01-4-4.5 0-.66.13-1.27.35-1.84A17.3 17.3 0 0024 9C14.62 9 7 16.62 7 24.73S13.44 40 24 40c10.56 0 17-7.16 17-15.27 0-.68-.07-1.36-.18-2.03zM24 27.36c-2.96 0-5.37-1.88-5.37-4.2 0-2.32 2.41-4.2 5.37-4.2s5.37 1.88 5.37 4.2c0 2.32-2.41 4.2-5.37 4.2z"
      fill="#222"
    />
  </svg>
);

export default CategoryDonut;
