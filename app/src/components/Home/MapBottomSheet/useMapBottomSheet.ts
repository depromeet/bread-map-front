import { useCallback, useMemo, useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

const useMapButtonSheet = () => {
  'worklet';
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['25%', '50%', '80%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    // eslint-disable-next-line no-console
    console.log('handleSheetChanges', index);
  }, []);

  return { bottomSheetRef, snapPoints, handleSheetChanges };
};

export { useMapButtonSheet };
