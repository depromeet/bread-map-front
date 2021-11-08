import * as React from 'react';
import styled from '@emotion/styled';
import { BottomSheetRef } from 'react-spring-bottom-sheet';
import {
  defaultSnapProps,
  snapPoints,
} from 'react-spring-bottom-sheet/dist/types';
import { NaverMap } from '@/lib/navermap';
import { DaedongBottomSheet, CategorySide } from '@/components/daedong';
import { FooterHeight } from '@/styles/Media';
import CurrentPositionButton from './CurrentPositionButton';
import SideButtons from './SideButtons';

const MapContainer = () => {
  const currentButtonRef = React.useRef<HTMLDivElement>(null);
  const bottomSheetRef = React.useRef<BottomSheetRef>(null);

  const bottomSheetSpringMapHeightChanger = React.useCallback(() => {
    requestAnimationFrame(() => {
      if (currentButtonRef?.current && bottomSheetRef?.current) {
        currentButtonRef.current.style.bottom =
          bottomSheetRef.current.height + FooterHeight + 10 + 'px';
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
    React.useCallback(
      ({ maxHeight }) => {
        bottomSheetSpringMapHeightChanger();
        return maxHeight / 5;
      },
      [bottomSheetSpringMapHeightChanger]
    );

  return (
    <>
      <MapWrapper>
        <NaverMapDiv
          ncpClientId={process.env.NEXT_PUBLIC_NAVER_ID}
          mapOptions={{
            zoom: 10,
          }}
        >
          <SideButtons />
          <CurrentButtonWrapper ref={currentButtonRef}>
            <CurrentPositionButton />
          </CurrentButtonWrapper>
          <CategorySide />
        </NaverMapDiv>
      </MapWrapper>
      <DaedongBottomSheet
        ref={bottomSheetRef}
        defaultSnap={bottomSheetDefaultSnap}
        snapPoints={bottomSheetSnapPoints}
        onSpringStart={bottomSheetSpringMapHeightChanger}
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

const CurrentButtonWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  transition: bottom 0.3s ease-in-out;
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
