import * as React from 'react';
import styled from '@emotion/styled';
import { BottomSheetRef } from 'react-spring-bottom-sheet';
import {
  defaultSnapProps,
  snapPoints,
  SpringEvent,
} from 'react-spring-bottom-sheet/dist/types';
import { NaverMap } from '@/lib/navermap';
import { MapButtonsWrap, DaedongBottomSheet } from '@/components/daedong';
import { FooterHeight } from '@/styles/Media';

const MapContainer = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);
  const bottomSheetRef = React.useRef<BottomSheetRef>(null);

  const bottomSheetSpringStart: (event: SpringEvent) => void =
    React.useCallback(() => {
      requestAnimationFrame(() => {
        if (mapRef?.current && bottomSheetRef?.current) {
          mapRef.current.style.height =
            window.innerHeight -
            bottomSheetRef.current.height -
            FooterHeight +
            'px';
        }
      });
    }, []);

  const bottomSheetSnapPoints: snapPoints = React.useCallback(
    ({ maxHeight }) => [
      maxHeight - FooterHeight,
      (maxHeight - FooterHeight) * 0.6,
      maxHeight / 3,
      maxHeight / 5,
    ],
    []
  );

  const bottomSheetDefaultSnap: number | ((props: defaultSnapProps) => number) =
    React.useCallback(({ maxHeight }) => maxHeight / 5, []);

  return (
    <>
      <MapWrapper>
        <NaverMapDiv
          ncpClientId={process.env.NEXT_PUBLIC_NAVER_ID}
          mapOptions={{
            zoom: 10,
          }}
        >
          <MapButtonWrapper ref={mapRef}>
            <MapButtonsWrap />
          </MapButtonWrapper>
        </NaverMapDiv>
      </MapWrapper>
      <DaedongBottomSheet
        ref={bottomSheetRef}
        defaultSnap={bottomSheetDefaultSnap}
        snapPoints={bottomSheetSnapPoints}
        onSpringStart={bottomSheetSpringStart}
      >
        <BottomSheetButtonWrap>
          {['Top', 'MiddleHigh', 'Middle', 'Bottom'].map((height, idx) => (
            <button
              key={idx}
              onClick={() =>
                bottomSheetRef.current?.snapTo(
                  ({ snapPoints }) => snapPoints[idx]
                )
              }
            >
              {height}
            </button>
          ))}
        </BottomSheetButtonWrap>
      </DaedongBottomSheet>
    </>
  );
};

export default MapContainer;

const MapWrapper = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  z-index: 0;
`;

const MapButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: calc(100vh - (100vh / 5) - ${FooterHeight}px);
  transition: height 0.3s ease-in-out;
`;

const NaverMapDiv = styled(NaverMap)`
  width: 100%;
  height: 100%;
  position: fixed;
`;

const BottomSheetButtonWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 2rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  button {
    border: 1px solid ${({ theme }) => theme.color.black};
    border-radius: 0.3rem;
    padding: 0.5rem;
    background: none;
    color: ${({ theme }) => theme.color.black};
  }
`;
