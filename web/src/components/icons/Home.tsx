import * as React from 'react';

export const Home: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2L3 9V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V9L12 2Z"
      stroke={'currentColor'}
      strokeWidth={'2'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
    />
    <path
      d="M9 22V12H15V22"
      stroke={'currentColor'}
      strokeWidth={'2'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
    />
  </svg>
);

export default Home;