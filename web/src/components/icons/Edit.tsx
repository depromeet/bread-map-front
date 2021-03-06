import * as React from 'react';

const Edit: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
      stroke={'currentColor'}
      strokeWidth={'2'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
    />
    <path
      d="M20 2C19.4374 2 18.8978 2.2235 18.5 2.62132L9 12.1213L8 16.1213L12 15.1213L21.5 5.62132C21.8978 5.2235 22.1213 4.68393 22.1213 4.12132C22.1213 3.55871 21.8978 3.01915 21.5 2.62132C21.1022 2.2235 20.5626 2 20 2Z"
      stroke={'currentColor'}
      strokeWidth={'2'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
    />
  </svg>
);

export default Edit;
