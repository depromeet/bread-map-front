import React from 'react';
import { Marker } from 'react-native-maps';
import { bindHook } from '@/utils';
import styled from '@emotion/native';
import { BreadCakeIcon } from '@shared/Icons';
import { useBakeryMarker } from './useBakeryMarker';

const BakeryMarker = bindHook(useBakeryMarker, ({ coord, animationStyle, pressIcon }) => (
  <Marker coordinate={coord} onPress={pressIcon}>
    <IconStyle animatedProps={animationStyle} />
  </Marker>
));

export { BakeryMarker };

const IconStyle = styled(BreadCakeIcon)`
  color: ${({ theme }) => theme.color.white};
`;
