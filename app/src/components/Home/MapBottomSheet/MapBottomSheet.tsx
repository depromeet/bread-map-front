import React from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { theme } from '../../../styles/theme';
import { bindHook } from '../../../utils';
import { Example } from '../../Example';
import { useMapButtonSheet } from './useMapBottomSheet';

const MapBottomSheet = bindHook(useMapButtonSheet, ({ bottomSheetRef, snapPoints, handleSheetChanges }) => (
  <BottomSheet
    handleIndicatorStyle={styles.handleIndicatorStyle}
    ref={bottomSheetRef}
    enableContentPanningGesture={false}
    snapPoints={snapPoints}
    onChange={handleSheetChanges}
  >
    <ScrollView style={styles.contentsContainer}>
      <Button
        title="Touch Here"
        onPress={() => {
          // eslint-disable-next-line no-console
          console.log(123);
        }}
      />
      <Example start={50} />
    </ScrollView>
  </BottomSheet>
));

export { MapBottomSheet };

const styles = StyleSheet.create({
  handleIndicatorStyle: {
    backgroundColor: theme.color.gray300,
  },
  contentsContainer: {
    flex: 1,
  },
});
