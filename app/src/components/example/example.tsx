import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Config } from '../../utils';
import { bindHook } from '../../utils';
import { useExample } from './useExample';

export const Example = bindHook(useExample, ({ bakeries, loading, count, increase, decrease }) => (
  <View style={styles.container}>
    <ScrollView>
      <Text>{count}</Text>
      <Button title={'up'} onPress={increase} />
      <Button title={'down'} onPress={decrease} />

      <Text>config: {Config.AUTH_TOKEN}</Text>

      {loading && <Text>Loading...</Text>}
      {bakeries && bakeries.map(bakery => <Text key={bakery.bakeryId}>{bakery.address}</Text>)}
    </ScrollView>
  </View>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
