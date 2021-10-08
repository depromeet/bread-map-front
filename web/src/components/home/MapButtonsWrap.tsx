import React, { useLayoutEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMap from '@/hooks/useMap';
import Navigation from '@assets/navigation.svg';
import Bread from '@assets/bread.svg';
import Flag from '@assets/flag.svg';
import { NaverMapMarker } from '@/lib/navermap';
import MapButton from './MapButton';

const MapButtonsWrap = () => {
  const { goToMyPosition, getCenterLatLng } = useMap();
  const [markers, setMarkers] = useState<naver.maps.Point[]>([]);

  const getCenterClickHandler = () => {
    const center = getCenterLatLng();
    if (center) {
      setMarkers([...markers, center]);
    }
  };

  useLayoutEffect(() => {
    goToMyPosition();
  }, [goToMyPosition]);

  return (
    <>
      <MyPositionButton onClick={goToMyPosition}>
        <Navigation />
        <div>내 위치</div>
      </MyPositionButton>
      <SideButtons>
        <MapButton onClick={getCenterClickHandler}>
          <Bread />
        </MapButton>
        <MapButton onClick={() => {}}>
          <Flag />
        </MapButton>
        <>
          {markers.map((marker, idx) => {
            return (
              <NaverMapMarker
                key={idx}
                latitude={marker.y}
                longitude={marker.x}
              />
            );
          })}
        </>
      </SideButtons>
    </>
  );
};

export default MapButtonsWrap;

const MyPositionButton = styled(MapButton)`
  position: absolute;
  gap: 0.6rem;
  bottom: 1rem;
  left: 1rem;
  z-index: 1;
`;

const SideButtons = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  display: flex;
  z-index: 1;
  flex-direction: column;
  list-style: none;
  gap: 0.6rem;
  right: 1rem;
  top: 1rem;
`;
