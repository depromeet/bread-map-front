import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

type UseBakeryMarkerProps = {
  coord: {
    latitude: number;
    longitude: number;
  };
};

const getPixel = (x: number) => {
  return (x / 360) * Dimensions.get('screen').width;
};

const DEFAULT_ICON_SIZE = [
  {
    width: getPixel(16),
    height: getPixel(16),
  },
  {
    width: getPixel(24),
    height: getPixel(24),
  },
  {
    width: getPixel(32),
    height: getPixel(32),
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
