import dynamic from 'next/dynamic';
import * as React from 'react';
import styled from '@emotion/styled';
import {
  NaverMap,
  useNaverMapGoToMyPosition,
  useDrawCurrentPosition,
} from '@/lib/navermap';
import CurrentPositionButton from './CurrentPositionButton';
import BreadFilterButton from './BreadFilterButton';
import { useGetBakeries } from '@/remotes/hooks';
import useSWR from 'swr';
import { currentRangeBakeriesAtom } from '@/store/map';
import { useAtom } from 'jotai';
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
  const goToMyPosition = useNaverMapGoToMyPosition();
  const { data } = useSWR('getMyPosition', goToMyPosition);

  React.useEffect(() => {
    goToMyPosition();
  }, [goToMyPosition]);

  useDrawCurrentPosition();

  if (!data) return null;
  return <BakeryMarkerList position={data} />;
};

const BakeryMap: React.FC = () => {
  return (
    <Map
      mapOptions={{
        zoom: 10,
      }}
    >
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
