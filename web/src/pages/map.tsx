import React from 'react';
import styled from '@emotion/styled';
import MapButtonsWrap from '@/components/home/MapButtonsWrap';
import { NaverMap } from '@/lib/navermap';

const Map = () => {
  return (
    <MapWrapper>
      <NaverMapDiv
        ncpClientId={process.env.NEXT_PUBLIC_NAVER_ID}
        mapOptions={{
          zoom: 10,
        }}
      >
        <MapButtonsWrap />
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
