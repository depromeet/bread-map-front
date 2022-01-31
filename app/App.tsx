import React, { FC } from 'react';
import { Platform } from 'react-native';
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from '@emotion/native';
import { ThemeProvider } from '@emotion/react';
import { Example } from './src/components/example/example';
import { theme } from './src/styles/theme';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
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
            minZoomLevel={17}
            maxZoomLevel={25}
          />
          <Example start={50} />
        </MapContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
export default App;

const MapContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.primary500};
`;
