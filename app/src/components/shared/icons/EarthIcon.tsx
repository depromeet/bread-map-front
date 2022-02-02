import * as React from 'react';
import Svg, { Path, G, SvgProps, Defs, Rect, ClipPath } from 'react-native-svg';

const EarthIcon: React.FC<SvgProps> = props => (
  <Svg width={16} height={17} viewBox="0 0 16 17" fill="none" {...props}>
    <G clipPath="url(#clip0_36_14296)">
      <Path
        d="M7.99967 14.8851C11.6816 14.8851 14.6663 11.899 14.6663 8.21549C14.6663 4.53198 11.6816 1.5459 7.99967 1.5459C4.31778 1.5459 1.33301 4.53198 1.33301 8.21549C1.33301 11.899 4.31778 14.8851 7.99967 14.8851Z"
        stroke="#BDBDBD"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.33301 8.21582H14.6663"
        stroke="#BDBDBD"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.6663 8.21549C10.6148 5.74243 9.66719 3.37227 7.99967 1.5459C6.33215 3.37227 5.38451 5.74243 5.33301 8.21549C5.38451 10.6886 6.33215 13.0587 7.99967 14.8851C9.66719 13.0587 10.6148 10.6886 10.6663 8.21549Z"
        stroke="#BDBDBD"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_36_14296">
        <Rect width="16" height="16.007" fill="white" transform="translate(0 0.211914)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export { EarthIcon };
