import React from 'react';
import { Button, Text } from 'react-native';
import styled from '@emotion/native';
import { Config } from '../../utils';
import { bindHook } from '../../utils';
import { useExample } from './useExample';

export const Example = bindHook(useExample, ({ bakeries, loading, count, increase, decrease }) => (
  <ExampleContainer>
    <Text>{count}</Text>
    <Button title={'up'} onPress={increase} />
    <Button title={'down'} onPress={decrease} />

    <Text>config: {Config.AUTH_TOKEN}</Text>

    {loading && <Text>Loading...</Text>}
    {bakeries && bakeries.map(bakery => <Text key={bakery.bakeryId}>{bakery.address}</Text>)}
  </ExampleContainer>
));

const ExampleContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
