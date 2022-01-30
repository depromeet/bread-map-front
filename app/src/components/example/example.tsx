import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { Config } from '../../utils';
import { bindHook } from '../../utils';
import { useExample } from './useExample';

export const Example = bindHook(useExample, ({ data, loading, count, increase, decrease }) => (
  <View style={styles.container}>
    <Text>{count}</Text>
    <Button title={'up'} onPress={increase} />
    <Button title={'down'} onPress={decrease} />

    <Text>config: {Config.AUTH_TOKEN}</Text>

    {loading && <Text>Loading...</Text>}
    {data && data.map(bakery => <Text>{bakery.address}</Text>)}
  </View>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
