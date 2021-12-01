import React from 'react';

type GradientStarProps = {
  start: number;
} & React.SVGProps<SVGSVGElement>;

export const GradientStar: React.FC<GradientStarProps> = ({
  start,
  ...props
}: GradientStarProps) => (
  <svg
    width={32}
    height={31}
    viewBox="0 0 32 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...props}
  >
    <linearGradient id="starGradient">
      <stop offset={start} stopColor="#FF6E40" />
      <stop offset={start + 0.0000001} stopColor="#E1E1E1" />
      <stop offset={1} stopColor="#E1E1E1" />
    </linearGradient>

    <path
      d="M14.555 1.673c.543-1.096 2.107-1.096 2.65 0l3.644 7.35a1.48 1.48 0 001.113.807l8.136 1.177c1.216.176 1.7 1.67.819 2.526l-5.88 5.705c-.35.34-.51.831-.427 1.312l1.389 8.063c.208 1.207-1.058 2.13-2.144 1.561l-7.29-3.815a1.48 1.48 0 00-1.371 0l-7.29 3.815c-1.085.569-2.351-.354-2.143-1.561L7.15 20.55a1.48 1.48 0 00-.428-1.312L.843 13.533c-.88-.856-.397-2.35.819-2.526L9.798 9.83c.481-.07.897-.371 1.113-.807l3.644-7.35z"
      fill="url(#starGradient)"
    />
  </svg>
);

export default GradientStar;
