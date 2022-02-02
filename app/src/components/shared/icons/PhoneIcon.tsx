import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const PhoneIcon: React.FC<SvgProps> = props => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M14.667 13.28v-2a1.333 1.333 0 00-1.147-1.353 8.56 8.56 0 01-1.873-.467 1.333 1.333 0 00-1.407.3l-.847.847a10.667 10.667 0 01-4-4l.847-.847a1.333 1.333 0 00.3-1.407 8.56 8.56 0 01-.467-1.873A1.333 1.333 0 004.74 1.333h-2a1.333 1.333 0 00-1.327 1.454c.22 2.06.92 4.04 2.047 5.78a13 13 0 004 4 13.194 13.194 0 005.753 2.046 1.331 1.331 0 001.454-1.333z"
      stroke="#BDBDBD"
      strokeWidth={1.333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { PhoneIcon };
