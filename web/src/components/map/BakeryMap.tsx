import dynamic from 'next/dynamic';
import * as React from 'react';
import styled from '@emotion/styled';
import { NaverMap, useNaverMapGoToMyPosition } from '@/lib/navermap';
import CurrentPositionButton from './CurrentPositionButton';
import BreadFilterButton from './BreadFilterButton';
import { useGetBakeries } from '@/remotes/hooks';
import useSWR from 'swr';
import { currentRangeBakeriesAtom } from '@/store/map';
import { useAtom } from 'jotai';
const BakeryMarkers = dynamic(() => import('./BakeryMarkers'), { ssr: false });

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

const BakeryMarkersContainer = () => {
  const goToMyPosition = useNaverMapGoToMyPosition();
  const { data } = useSWR('getMyPosition', goToMyPosition);
  if (!data) return null;
  goToMyPosition();

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
