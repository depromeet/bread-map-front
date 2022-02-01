import React from 'react';
import { Platform } from 'react-native';
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { Example } from '@/components/Example';
import styled from '@emotion/native';

const Home = () => (
  <MapContainer>
    <MapView
      style={{ flex: 1 }}
      provider={Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 37.6799006,
        longitude: 127.0549781,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      minZoomLevel={17}
      maxZoomLevel={25}
    />
    <Example start={50} />
  </MapContainer>
);

export { Home };

const MapContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.primary500};
`;
