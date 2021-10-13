import * as React from 'react';

export const LeftArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.479 7.585c.346.345.373.89.08 1.266l-.08.09-6.147 6.141H24.04c.471 0 .854.382.854.853v.213c0 .47-.383.853-.854.853H8.545l5.934 5.928c.346.346.373.89.08 1.266l-.08.09a.96.96 0 01-1.267.08l-.09-.08-7.68-7.672a.959.959 0 01-.08-1.266l.08-.09 7.68-7.672a.96.96 0 011.357 0z"
      fill="#fff"
    />
    <mask
      id="prefix__a"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={5}
      y={7}
      width={20}
      height={18}
    >
      <path
        d="M14.479 7.585c.346.345.373.89.08 1.266l-.08.09-6.147 6.141H24.04c.471 0 .854.382.854.853v.213c0 .47-.383.853-.854.853H8.545l5.934 5.928c.346.346.373.89.08 1.266l-.08.09a.96.96 0 01-1.267.08l-.09-.08-7.68-7.672a.959.959 0 01-.08-1.266l.08-.09 7.68-7.672a.96.96 0 011.357 0z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#prefix__a)">
      <path fill="#000" d="M.36.591h30.72V31.28H.36z" />
    </g>
  </svg>
);

export default LeftArrow;
