import React from 'react';
import styled from '@emotion/styled';
import Navigation from '@assets/navigation.svg';
import Flag from '@assets/flag.svg';
import { NaverMapGoToMyPosition } from '@/lib/navermap';
import Bread from '@assets/bread.svg';
import CategorySide from './CategorySide';
import MapButton from './MapButton';

const MapButtonsWrap = () => {
  const [sideOpen, setSideOpen] = React.useState(false);
  const goToMyPosition = NaverMapGoToMyPosition();

  React.useEffect(() => {
    (async () => {
      await goToMyPosition();
    })();
  }, [goToMyPosition]);

  return (
    <>
      <MyPositionButton onClick={goToMyPosition}>
        <Navigation />
        <div>내 위치</div>
      </MyPositionButton>
      <SideButtons>
        <MapButton
          onClick={() => {
            setSideOpen(!sideOpen);
          }}
        >
          <Bread />
        </MapButton>
        <MapButton onClick={() => {}}>
          <Flag />
        </MapButton>
      </SideButtons>
      <CategorySide
        isCategorySideOpen={sideOpen}
        closeCategorySide={() => {
          setSideOpen(false);
        }}
      />
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
