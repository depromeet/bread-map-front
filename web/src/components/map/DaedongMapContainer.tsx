import * as React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { useAtom } from 'jotai';
import { BottomSheet } from '@/components/common';
import { useGetBakeries } from '@/remotes/hooks';
import { bottomSheetRefAtom } from '@/store/map';
import BakeryMap from './BakeryMap';
import BakeryCardList from './BakeryCardList';
import { DEFAULT_POSITION } from './constants';

const DaedongMapContainer: React.FC = () => {
  const theme = useTheme();
  
  const [, setBottomSheetRef] = useAtom(bottomSheetRefAtom);

  const { data } = useGetBakeries({
    latitude: DEFAULT_POSITION.lat,
    longitude: DEFAULT_POSITION.lng,
    range: 100,
  });

  return (
    <Container>
      <BakeryMap entities={data} />
      <BottomSheet
        open
        skipInitialTransition
        blocking={false}
        defaultSnap={({ headerHeight }) => headerHeight + 68 + 148}
        snapPoints={({ headerHeight, maxHeight }) => [
          headerHeight,
          headerHeight + 148,
          headerHeight + 68 + 148,
          maxHeight - theme.height.footer,
        ]}
        ref={setBottomSheetRef}
      >
        <BakeryCardList />
      </BottomSheet>
    </Container>
  );
};

export default DaedongMapContainer;

const Container = styled.div`
  width: 100%;
  position: relative;
  height: ${({ theme }) => `calc(100vh - ${theme.height.footer}px)`};
`;
