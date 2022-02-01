import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Marker } from 'react-native-maps';
import { bindHook } from '@/utils';
import styled from '@emotion/native';
import { BreadCakeIcon } from '@shared/icons';
import { useBakeryMarker } from './useBakeryMarker';

const BakeryMarker = bindHook(useBakeryMarker, ({ coord, animationStyle, pressIcon }) => (
  <Marker coordinate={coord}>
    <TouchableWithoutFeedback onPress={pressIcon}>
      <IconStyle animatedProps={animationStyle} />
    </TouchableWithoutFeedback>
  </Marker>
));

export { BakeryMarker };

const IconStyle = styled(BreadCakeIcon)`
  color: ${({ theme }) => theme.color.white};
`;
