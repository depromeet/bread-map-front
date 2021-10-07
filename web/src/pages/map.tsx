import React from 'react';
import styled from '@emotion/styled';
import {
  NaverMap,
  NaverMapMarker,
} from '@/lib/navermap';

const Map: React.FC = () => {
  return (
    <StyledNaverMap
      ncpClientId={process.env.NEXT_PUBLIC_NAVER_ID}
      mapOptions={{
        zoom: 10,
      }}
    >
      <NaverMapMarker
        latitude={37.5657037}
        longitude={126.9746676}
      />
    </StyledNaverMap>
  );
};

export default Map;

const StyledNaverMap = styled(NaverMap)`
  width: 100vw;
  height: 100vh;
`;
