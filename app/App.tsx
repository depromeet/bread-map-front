import React, { FC } from 'react';
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from '@emotion/native';
import { ThemeProvider } from '@emotion/react';
import { MapBottomSheet } from './src/components/landing';
import { BakeryMarker } from './src/components/landing/BakeryMarker';
import { theme } from './src/styles/theme';

const queryClient = new QueryClient();
const App: FC = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
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
          >
            <BakeryMarker
              coord={{
                latitude: 37.6799006,
                longitude: 127.0549781,
              }}
            />
          </MapView>
        </MapContainer>
        <MapBottomSheet />
      </ThemeProvider>
    </QueryClientProvider>
  </GestureHandlerRootView>
);

export default App;

const MapContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.primary500};
`;
