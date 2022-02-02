import { useEffect, useState } from 'react';
import { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { resizePixel } from '@/utils';

type UseBakeryMarkerProps = {
  coord: {
    latitude: number;
    longitude: number;
  };
};

const DEFAULT_ICON_SIZE = [
  {
    width: resizePixel(16),
    height: resizePixel(16),
  },
  {
    width: resizePixel(24),
    height: resizePixel(24),
  },
  {
    width: resizePixel(32),
    height: resizePixel(32),
  },
];

export const useBakeryMarker = ({ coord }: UseBakeryMarkerProps) => {
  const size = useSharedValue(DEFAULT_ICON_SIZE[0]);
  const [toggle, setToggle] = useState(0);

  const animationStyle = useAnimatedStyle(() => ({
    width: withTiming(size.value.width, {
      duration: 300,
      easing: Easing.bounce,
    }),
    height: withTiming(size.value.height, {
      duration: 300,
      easing: Easing.bounce,
    }),
  }));

  useEffect(() => {
    size.value = DEFAULT_ICON_SIZE[toggle];
  }, [size, toggle]);

  return {
    coord,
    animationStyle,
    pressIcon: () => setToggle(prev => (prev + 1) % 3),
  };
};
