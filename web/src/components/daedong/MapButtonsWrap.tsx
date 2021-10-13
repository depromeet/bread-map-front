import React from 'react';
import styled from '@emotion/styled';
import { useNaverMapGoToMyPosition } from '@/lib/navermap';
import { Navigation } from '@/components/icons';
import MapButton from './MapButton';
import SideButtons from './SideButtons';

const MapButtonsWrap = () => {
  const goToMyPosition = useNaverMapGoToMyPosition();

  React.useEffect(() => {
    goToMyPosition();
  }, [goToMyPosition]);

  return (
    <>
      <MyPositionButton onClick={goToMyPosition}>
        <Navigation />
        <div>내 위치</div>
      </MyPositionButton>
      <SideButtons />
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
  &::after {
    content: none;
  }
`;
