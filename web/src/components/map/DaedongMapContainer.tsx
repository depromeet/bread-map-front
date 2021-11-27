import * as React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useAtom } from 'jotai';
import { BottomSheet } from '@/components/common';
import { useGetBakeries } from '@/remotes/hooks';
import {
  bottomSheetLastSnapPoint,
  bottomSheetRefAtom,
  mapRefAtom,
} from '@/store/map';
import BakeryMap from './BakeryMap';
import BakeryCardList from './BakeryCardList';
import { DEFAULT_POSITION } from './constants';

const DaedongMapContainer: React.FC = () => {
  const theme = useTheme();
  const [mapRef, setMapRef] = useAtom(mapRefAtom);
  const [bottomSheetLastSnap, setBottomSheetLastSnap] = useAtom(
    bottomSheetLastSnapPoint
  );
  const [bottomSheetRef, setBottomSheetRef] = useAtom(bottomSheetRefAtom);

  const { data } = useGetBakeries({
    latitude: DEFAULT_POSITION.lat,
    longitude: DEFAULT_POSITION.lng,
    range: 100,
  });

  const bottomSheetSpringMapHeightChanger = React.useCallback(() => {
    requestAnimationFrame(() => {
      if (mapRef && bottomSheetRef?.height) {
        mapRef.style.height =
          window.innerHeight -
          bottomSheetRef.height -
          theme.height.footer +
          'px';
        setBottomSheetLastSnap(bottomSheetRef.height);
      }
    });
  }, [
    bottomSheetRef?.height,
    mapRef,
    setBottomSheetLastSnap,
    theme.height.footer,
  ]);

  const defaultSnapPoint = React.useCallback(
    ({ height }: { height: number }) => {
      return bottomSheetLastSnap || height + 68 + 148;
    },
    [bottomSheetLastSnap]
  );

  return (
    <Container ref={setMapRef}>
      <BakeryMap entities={data} />
      <BottomSheet
        open
        skipInitialTransition
        blocking={false}
        defaultSnap={defaultSnapPoint}
        snapPoints={({ headerHeight, maxHeight }) => [
          headerHeight,
          headerHeight + 148,
          headerHeight + 68 + 148,
          maxHeight - theme.height.footer,
        ]}
        ref={setBottomSheetRef}
        onSpringStart={bottomSheetSpringMapHeightChanger}
      >
        <BakeryCardList />
      </BottomSheet>
    </Container>
  );
};

export default DaedongMapContainer;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 68px + 148px);
  position: relative;
  transition: height 0.2s ease-in-out;
`;
