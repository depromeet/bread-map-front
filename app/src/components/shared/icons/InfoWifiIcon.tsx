import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { InfoIconProps } from './InfoDeliveryIcon';

const InfoWifiIcon: React.FC<SvgProps & InfoIconProps> = props => (
  <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
    <Path
      d="M11.143 21.429c7.714-8.572 18-8.572 25.714 0M16.286 26.572c4.629-5.143 10.8-5.143 15.429 0"
      stroke={props.strokeColor === 'orange' ? '#FF6E40' : '#BDBDBD'}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M24 33a1.286 1.286 0 100-2.572 1.286 1.286 0 000 2.571z"
      stroke={props.strokeColor === 'orange' ? '#FF6E40' : '#BDBDBD'}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { InfoWifiIcon };
