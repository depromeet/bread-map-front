import React, { FC } from 'react';
import styled from '@emotion/native';
import { ThemeProvider } from '@emotion/react';
import BakeryDetailScreen from './src/pages/BakeryDetailScreen';
import { theme } from './src/styles/theme';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BakeryDetailScreen />
    </ThemeProvider>
  );
};
export default App;

const MapContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.primary500};
`;

/*
<ThemeProvider theme={theme}>
      <MapContainer>
        <MapView
          style={{ flex: 1 }}
          provider={Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <Example start={50} />
      </MapContainer>
    </ThemeProvider>

*/
