import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ClockIcon: React.FC<SvgProps> = props => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z"
      stroke="#BDBDBD"
      strokeWidth={1.333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M8 4v4l2.667 1.333" stroke="#BDBDBD" strokeWidth={1.333} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

export { ClockIcon };
