import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ChevronDownIcon: React.FC<SvgProps> = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.53 6.47a.75.75 0 010 1.06l-9 9a.75.75 0 01-1.06 0l-9-9a.75.75 0 011.06-1.06L12 14.94l8.47-8.47a.75.75 0 011.06 0z"
      fill="#222"
    />
  </Svg>
);

export { ChevronDownIcon };
