import React, { useRef, useState } from 'react';
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet';
import styled from '@emotion/styled';
import 'react-spring-bottom-sheet/dist/style.css';
import { FooterHeight } from '@/styles/Media';

interface BottonSheetProps {
  mapRef?: React.RefObject<HTMLDivElement>;
}

const DaedongBottomSheet: React.FC<BottonSheetProps> = ({
  children,
  mapRef,
}) => {
  const sheetRef = useRef<BottomSheetRef>(null);
  const heightButtons = ['Top', 'MiddleHigh', 'Middle', 'Bottom'];

  return (
    <BottomSheetStyle
      open
      skipInitialTransition
      blocking={false}
      ref={sheetRef}
      defaultSnap={({ maxHeight }) => maxHeight / 4}
      snapPoints={({ maxHeight }) => [
        maxHeight - FooterHeight,
        maxHeight - FooterHeight - maxHeight / 5,
        maxHeight * 0.6 - FooterHeight,
        maxHeight / 4,
      ]}
      onSpringStart={() => {
        requestAnimationFrame(() => {
          if (mapRef?.current && sheetRef?.current) {
            mapRef.current.style.height =
              window.innerHeight -
              sheetRef.current.height -
              FooterHeight +
              'px';
          }
        });
      }}
    >
      <ButtonWrap>
        {heightButtons.map((height, idx) => (
          <button
            key={idx}
            onClick={() =>
              sheetRef.current?.snapTo(({ snapPoints }) => snapPoints[idx])
            }
          >
            {height}
          </button>
        ))}
      </ButtonWrap>
      {children}
    </BottomSheetStyle>
  );
};

export default DaedongBottomSheet;

const BottomSheetStyle = styled(BottomSheet)`
  --rsbs-backdrop-bg: ${({ theme }) => theme.color.background}99;
  --rsbs-bg: ${({ theme }) => theme.color.background};
  --rsbs-handle-bg: ${({ theme }) => theme.color.label};
  /* hsla(0, 0%, 0%, 0.14); */
  --rsbs-max-w: auto;
  --rsbs-ml: env(safe-area-inset-left);
  --rsbs-mr: env(safe-area-inset-right);
  --rsbs-overlay-rounded: 3rem;
  > div {
    box-shadow: 0px -8px 10px lightgrey !important;
    bottom: ${FooterHeight}px !important;
  }
`;

const ButtonWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 2rem;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  button {
    border: 1px solid ${({ theme }) => theme.color.textColor};
    border-radius: 0.3rem;
    padding: 0.5rem;
    background: none;
    color: ${({ theme }) => theme.color.textColor};
  }
`;
