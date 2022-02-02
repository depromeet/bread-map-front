import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const MapPinIcon: React.FC<SvgProps> = props => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8 15.333s6-4 6-8.666a6 6 0 10-12 0c0 4.666 6 8.666 6 8.666z"
      stroke="#BDBDBD"
      strokeWidth={1.333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 8.667a2 2 0 100-4 2 2 0 000 4z"
      stroke="#BDBDBD"
      strokeWidth={1.333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { MapPinIcon };
