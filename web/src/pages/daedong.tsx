import React from 'react';
import styled from '@emotion/styled';
import MapButtonsWrap from '@/components/daedong/MapButtonsWrap';
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
  overflow: hidden;
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const NaverMapDiv = styled(NaverMap)`
  width: 100vw;
  height: 100vh;
`;

export default Map;
