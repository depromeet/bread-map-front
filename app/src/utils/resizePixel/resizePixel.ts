import { Dimensions } from 'react-native';

//디자인과 화면 너비에 맞게 size를 조절합니다.
export const resizePixel = (x: number) => {
  return (x / 360) * Dimensions.get('screen').width;
};
