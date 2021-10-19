import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { MapButtonsWrap, BottomSheet } from '@/components/daedong/';
import { NaverMap } from '@/lib/navermap';
import { FooterHeight } from '@/styles/Media';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <MapWrapper ref={mapRef}>
        <NaverMapDiv
          ncpClientId={process.env.NEXT_PUBLIC_NAVER_ID}
          mapOptions={{
            zoom: 10,
          }}
        >
          <MapButtonsWrap />
        </NaverMapDiv>
      </MapWrapper>
      <BottomSheet mapRef={mapRef} />
      <Footer>footer</Footer>
    </>
  );
};

const Footer = styled.div`
  position: fixed;
  bottom: 0%;
  width: 100%;
  height: ${FooterHeight}px;
  border: 1px solid #000;
`;

const MapWrapper = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  width: 100%;
  height: calc(100vh - (100vh / 4) - ${FooterHeight}px);
  transition: height 0.3s ease-in-out;
`;

const NaverMapDiv = styled(NaverMap)`
  width: 100vw;
  height: 100%;
`;

export default Map;
