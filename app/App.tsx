import React, { FC } from 'react';
import { View, Platform } from 'react-native';
import MapView, { PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { Example } from './src/components/example/example';

const App: FC = () => (
  <View style={{ flex: 1 }}>
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
  </View>
);
export default App;
