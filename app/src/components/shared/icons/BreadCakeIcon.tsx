import * as React from 'react';
import Animated from 'react-native-reanimated';
import Svg, { Path, SvgProps } from 'react-native-svg';

const AnimateSvg = Animated.createAnimatedComponent(Svg);

export const BreadCakeIcon: React.FC<Animated.AnimateProps<SvgProps>> = props => (
  <AnimateSvg viewBox="0 0 16 18" fill="none" {...props}>
    <Path
      d="M16 7.75C16 12.0302 10.3538 18 8 18C5.64624 18 0 12.0302 0 7.75C0 3.46979 3.58172 0 8 0C12.4183 0 16 3.46979 16 7.75Z"
      fill="#FF6E40"
    />
  </AnimateSvg>
);
