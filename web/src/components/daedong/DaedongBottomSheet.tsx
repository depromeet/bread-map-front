import React from 'react';
import { BottomSheetRef } from 'react-spring-bottom-sheet';
import {
  defaultSnapProps,
  snapPoints,
  SpringEvent,
} from 'react-spring-bottom-sheet/dist/types';
import { BottomSheet } from '../common';

interface BottonSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultSnap?: number | ((props: defaultSnapProps) => number) | undefined;
  snapPoints?: snapPoints | undefined;
  open?: boolean;
  onSpringStart?: ((event: SpringEvent) => void) | undefined;
  onSpringEnd?: ((event: SpringEvent) => void) | undefined;
}

const DaedongBottomSheet = React.forwardRef<BottomSheetRef, BottonSheetProps>(
  (
    {
      children,
      open = true,
      defaultSnap,
      snapPoints,
      onSpringStart,
      onSpringEnd,
    },
    ref
  ) => {
    return (
      <BottomSheet
        open={open}
        skipInitialTransition
        blocking={false}
        ref={ref}
        defaultSnap={defaultSnap}
        snapPoints={snapPoints}
        onSpringStart={onSpringStart}
        onSpringEnd={onSpringEnd}
      >
        {children}
      </BottomSheet>
    );
  }
);

DaedongBottomSheet.displayName = 'DaedongBottomSheet';

export default DaedongBottomSheet;
