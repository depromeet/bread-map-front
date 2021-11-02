import * as React from 'react';

const CameraIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Camera Icon</title>
    <path
      d="M17.574 16.665c.273-.273.426-.643.426-1.029v-8a1.454 1.454 0 00-1.454-1.454h-2.91L12.182 4H7.818L6.364 6.182h-2.91A1.455 1.455 0 002 7.636v8a1.455 1.455 0 001.455 1.455h13.09c.386 0 .756-.153 1.029-.426z"
      stroke="#BDBDBD"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.002 14.182a2.91 2.91 0 100-5.818 2.91 2.91 0 000 5.818z"
      stroke="#BDBDBD"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CameraIcon;
