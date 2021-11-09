import React from 'react';
import styled from '@emotion/styled';
import MapButton from './MapButton';
import { useNaverMapGoToMyPosition } from '@/lib/navermap';
import { Navigation } from '@/components/icons';

const CurrentPositionButton = () => {
  const goToMyPosition = useNaverMapGoToMyPosition();

  React.useEffect(() => {
    goToMyPosition();
  }, [goToMyPosition]);

  return (
    <CurrentButton onClick={goToMyPosition}>
      <Navigation width={16} height={16} />
      <span>내 위치</span>
    </CurrentButton>
  );
};

export default CurrentPositionButton;

const CurrentButton = styled(MapButton)`
  position: absolute;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.4;
  gap: 4px;
  bottom: 1rem;
  left: 1rem;
  z-index: 1;
  &::after {
    content: none;
  }
`;
