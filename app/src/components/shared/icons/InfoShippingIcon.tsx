import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { InfoIconProps } from './InfoDeliveryIcon';

const InfoShippingIcon: React.FC<SvgProps & InfoIconProps> = props => (
  <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
    <Path
      d="M36.748 29.38V18.045a2.833 2.833 0 00-1.417-2.45l-9.916-5.668a2.833 2.833 0 00-2.834 0l-9.916 5.667a2.832 2.832 0 00-1.417 2.45V29.38a2.834 2.834 0 001.417 2.451l9.916 5.667a2.834 2.834 0 002.834 0l9.916-5.667a2.833 2.833 0 001.417-2.45z"
      stroke={props.strokeColor === 'orange' ? '#FF6E40' : '#BDBDBD'}
      strokeWidth={2.223}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.5 17.194l12.367 7.155 12.368-7.155M18 13l12.367 7.154M23.991 37.271v-12.28"
      stroke={props.strokeColor === 'orange' ? '#FF6E40' : '#BDBDBD'}
      strokeWidth={2.223}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { InfoShippingIcon };
