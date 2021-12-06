import dynamic from 'next/dynamic';
import * as React from 'react';
import styled from '@emotion/styled';
import {
  NaverMap,
  useGoToPosition,
  useDrawCurrentPosition,
  useSetMapSize,
} from '@/lib/navermap';
import CurrentPositionButton from './CurrentPositionButton';
import BreadFilterButton from './BreadFilterButton';
import { useGetBakeries } from '@/remotes/hooks';
import useSWR from 'swr';
import {
  bottomSheetRefAtom,
  currentLatLng,
  currentRangeBakeriesAtom,
} from '@/store/map';
import { useAtom } from 'jotai';
import { useTheme } from '@emotion/react';
const BakeryMarkers = dynamic(() => import('./BakeryMarkers'), { ssr: false });

/**
 *
 * @param param0 현재 위치
 * @returns 마커
 */
const BakeryMarkerList = ({
  position,
}: {
  position: GeolocationCoordinates;
}) => {
  const { data: entities } = useGetBakeries({
    latitude: position.latitude,
    longitude: position.longitude,
    range: 100000,
  });
  const [, setBakeries] = useAtom(currentRangeBakeriesAtom);

  React.useEffect(() => {
    if (entities) setBakeries(entities);
  }, [entities, setBakeries]);

  if (!entities) return null;

  return <BakeryMarkers entities={entities} />;
};

/**
 * 현재위치 가져오는 컴포넌트
 * @returns
 */
const BakeryMarkersContainer = () => {
  const { goToMyPosition, goToPosition } = useGoToPosition();
  const { data } = useSWR('getMyPosition', goToMyPosition);
  const [{ latitude, longitude }] = useAtom(currentLatLng);

  React.useEffect(() => {
    if (latitude && longitude) goToPosition({ latitude, longitude });
    else goToMyPosition();
  }, [goToMyPosition, goToPosition, latitude, longitude]);

  useDrawCurrentPosition();

  if (!data) return null;
  return <BakeryMarkerList position={data} />;
};

/**
 * 맵 사이즈 조절용 함수
 */
const AutoMapSizing = () => {
  const setMapSize = useSetMapSize();
  const theme = useTheme();
  const [bottomSheetRef] = useAtom(bottomSheetRefAtom);

  React.useEffect(() => {
    requestAnimationFrame(() => {
      if (bottomSheetRef)
        setMapSize({
          height:
            window.innerHeight - bottomSheetRef.height - theme.height.footer,
        });
    });
  });

  return null;
};

const BakeryMap: React.FC = () => {
  return (
    <Map
      mapOptions={{
        zoom: 10,
      }}
    >
      <AutoMapSizing />
      <CurrentPositionButton />
      <BreadFilterButton />
      {/* TODO 차후 추가 */}
      {/* <FlagFilterButton /> */}
      <BakeryMarkersContainer />
    </Map>
  );
};

export default BakeryMap;

const Map = styled(NaverMap)`
  width: 100%;
  height: 100%;
  z-index: 0;
`;
