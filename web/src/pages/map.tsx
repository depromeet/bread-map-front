import React from 'react';
import MapButtons from '@/components/home/mapButtons';
import { NaverMap } from '@/lib/navermap';
import styled from '@emotion/styled';

const Map = () => {
  return (
    <MapWrapper>
      <NaverMapDiv
        ncpClientId={process.env.NEXT_PUBLIC_NAVER_ID}
        mapOptions={{
          zoom: 10,
        }}
      >
        <MapButtons />
      </NaverMapDiv>
    </MapWrapper>
  );
};

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
`;

const NaverMapDiv = styled(NaverMap)`
  width: 100vw;
  height: 80vh;
`;

export default Map;
